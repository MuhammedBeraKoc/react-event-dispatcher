// @flow

class EventDispatcher {
    /**
     * @class
     * @type {Class<Error>}
     */
    ComponentNotFoundError: Class<Error> = class extends Error {
        constructor(message: string) {
            super(message || 'Cannot find the given component name.')
            this.name = 'ComponentNotFoundError'
        }
    }

    /**
     * @brief A map for storing events by component names
     * @type {Map<string, Function[]>}
     * @private
     */
    _componentEventMap: Map<string, Function[]> = new Map()

    _name: string

    /**
     * @constructor
     * @param name Name of the EventDispatcher
     */
    constructor(name: string) {
        this._name = name;
    }

    /**
     * Dispatches the given function set to the __$.
     * @param {string} componentName The string representation of the components name
     * @param {Function[]} functionSet A set of functions which is to be dispatched
     * @return {void}
     */
    dispatch(componentName: string, ...functionSet: Function[]): void {
        const currentFunctionSet: ?Function[] = this._componentEventMap.get(componentName)
        this._componentEventMap.set(componentName, currentFunctionSet ? currentFunctionSet.concat(functionSet) : [...functionSet])
    }

    /**
     * Gets a function with the given componentName an index.
     * When failed returns a function which throws an error.
     * @param {string} componentName The string representation of the components name
     * @param {number} index The index of the function to be got
     * @return {Function} The function with the given index and componentName
     */
    getOne(componentName: string, index: number = 0): Function {
        const functionSet: ?Function[] = this._componentEventMap.get(componentName)
        return functionSet ? functionSet[index] : () => {
            throw new this.ComponentNotFoundError()
        }
    }

    /**
     * Gets the function set of the given componentName.
     * When failed returns a function which throws an error.
     * @param {string} componentName The string representation of the components name
     * @return {Function[] | Function} Function set for the given componentName
     */
    getAll(componentName: string): Function[] | Function  {
        const functionSet: ?Function[] =  this._componentEventMap.get(componentName)
        return functionSet ? functionSet :  () => {
            throw new this.ComponentNotFoundError()
        }
    }

    /**
     * Instead of getOne, runs the function with given componentName and index and args.
     * @template T
     * @param {string} componentName The string representation of the components name
     * @param {number} index The index of the function to be executed
     * @param {any[]} args The arguments to be injected in the target function as parameters
     * @return {T|unknown} Returns the return value of the executed function
     */
    runOne<T>(componentName: string, index: number = 0, ...args: any[]): T {
        return this.getOne(componentName, index)(...args)
    }

    /**
     * Instead of getAll, runs the function set with given componentName and argument set.
     * @param {string} componentName The string representation of the components name
     * @param {any[][]} argsSet A set of arguments to be injected in the target function set as parameters
     * @return {any[]} Returns the return value set of the executed function set
     */
    runAll(componentName: string, argsSet: any[][]): any[] {
        const functionSet = this.getAll(componentName)
        const returnValues = []
        for (let i = 0; i < functionSet.length; ++i) {
            returnValues.push(functionSet[i](...argsSet[i]))
        }
        return returnValues
    }

    /**
     * Resolves the result then returns it as a promise
     * @template T
     * @param componentName {string} The string representation of the components name
     * @param index {number} The index of the function to be executed
     * @param args {any[]} The arguments to be injected in the target function as parameters
     * @return {Promise<T>|Promise<unknown>}
     */
    resolveOne<T>(componentName: string, index: number = 0, ...args: any[]): Promise<T> {
        return new Promise((resolve) => {
            resolve(this.runOne<T>(componentName, index, ...args))
        })
    }

    /**
     * Resolves the result set then returns it as a promise
     * @param componentName {string} The string representation of the components name
     * @param {any[][]} argsSet A set of arguments to be injected in the target function set as parameters
     * @return {Promise<any[]>|Promise<unknown>}
     */
    resolveAll(componentName: string, argsSet: any[][]): Promise<any[]> {
        const promiseSet: Promise<any>[] = []
        const functionSet: Function[] = this.getAll(componentName)
        for (let i = 0; i < functionSet.length; ++i) {
            promiseSet.push(Promise.resolve(functionSet[i](...argsSet[i])))
        }
        return Promise.all(promiseSet)
    }

    /**
     * Removes the given componentName from componentName map.
     * Warning: This method is meant to be used only in componentWillUnmount
     * @param {string} componentName The string representation of the components name
     * @return {void|function():never} A function that throws error
     */
    deleteComponent(componentName: string): void | Function {
        if(!this._componentEventMap.delete(componentName)) {
            return () => {
                throw new this.ComponentNotFoundError()
            }
        }
    }

    /**
     * Prints the componentName map as a visual tree
     * @param {boolean} isTest Returns the output string if it is true, otherwise prints the output to the console
     */
    print(isTest: boolean = false): void | string {
        let outputString = ''
        outputString += `${this.name}\n`
        const componentNames = Array.from(this._componentEventMap.keys())
        for (let i = 0; i < componentNames.length; ++i) {
            const lineToken = i === componentNames.length - 1 ? ' ' : '|'
            const componentNameToken = i === componentNames.length - 1 ? '└──' : '├──'
            const componentName = componentNames[i]
            const functionSet = this.getAll(componentName)
            outputString += `${componentNameToken} ${componentName}\n`
            for (let j = 0; j < functionSet.length; ++j) {
                outputString += `${lineToken}   ${j === functionSet.length - 1 ? '└──' : '├──'} ${functionSet[j].name}\n`
            }
        }
        if (isTest) return outputString
        console.log(outputString)
    }

    /**
     * Clears the event map __$.
     * @return {void}
     */
    clear(): void {
        this._componentEventMap.clear()
    }


    get name(): string {
        return this._name;
    }
}

/**
 * A class with no ability to create instances (private constructor)
 * and all methods
 * @class
 */
class EventDispatcherFactory {
    /**
     * @class
     * @type {Class<Error>}
     */
    static DispatcherNotFoundError: Class<Error> = class extends Error {
        constructor(message: string) {
            super(message || 'Cannot find the given dispatcher name.')
            this.name = 'DispatcherNotFoundError'
        }
    }

    /**
     * @class
     * @type {Class<Error>}
     */
    static DispatcherNameIsNotUniqueError: Class<Error> = class extends Error {
        constructor(message: string) {
            super(message || 'Given dispatcher name is not unique.')
            this.name = 'DispatcherNameIsNotUniqueError'
        }
    }

    /**
     * @brief A map for storing dispatchers by their names
     * @type {Map<string, EventDispatcher>}
     * @private
     */
    static _eventDispatcherMap: Map<string, EventDispatcher> = new Map()

    /**
     * @constructor
     * @brief A private constructor to make EventDispatcherFactory not to instantiate objects
     */
    _constructor() {}

    /**
     * Creates a new dispatcher. If the dispatcher name is not unique throws DispatcherNameIsNotUniqueError
     * @param dispatcherName The unique name for the dispatcher
     * @return {void|function():never} A function that throws error
     */
    static create(dispatcherName: string): EventDispatcher | Function {
        if (this._eventDispatcherMap.get(dispatcherName)) {
            return () => {
                throw new this.DispatcherNameIsNotUniqueError()
            }
        }
        return this._eventDispatcherMap.set(dispatcherName, new EventDispatcher(dispatcherName)).get(dispatcherName)
    }

    /**
     *
     * @param dispatcherName The unique name for the dispatcher
     * @template EventDispatcher
     * @return {EventDispatcher|(function():never)}
     */
    static use(dispatcherName: string): EventDispatcher | Function {
        const eventDispatcher: ?EventDispatcher = this._eventDispatcherMap.get(dispatcherName)
        return eventDispatcher ? eventDispatcher : () => {
            throw new this.DispatcherNotFoundError()
        }
    }

    /**
     * Removes the dispatcher from _eventDispatcherMap.
     * @param dispatcherName The unique name for the dispatcher
     * @return {void|function():never}
     */
    static delete(dispatcherName: string): void | Function {
        if (!this._eventDispatcherMap.delete(dispatcherName)) {
            return () => {
                throw new this.DispatcherNotFoundError()
            }
        }
    }

    static print(isTest: boolean = false): void | string {
        let outputString = `${'-'.repeat(32)}\n`
        for (const eventDispatcherName of this._eventDispatcherMap.keys()) {
            const eventDispatcher: ?EventDispatcher = this._eventDispatcherMap.get(eventDispatcherName)
            if (eventDispatcher) {
                const eventDispatcherOutput: ?string = eventDispatcher.print(true)
                outputString += eventDispatcherOutput ? eventDispatcherOutput : 'This shall never happen.'
            }
        }
        outputString += '-'.repeat(32)
        if (isTest) return outputString
        console.log(outputString)
    }

    /**
     * Clears the _eventDispatcherMap
     */
    static clear() {
        this._eventDispatcherMap.clear()
    }
}

export default EventDispatcherFactory