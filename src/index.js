// @flow

class EventDispatcher {
    KeyNotFoundError: Object

    /**
     * A static variable for storing events
     * It is shared across all components
     * Yet it is hidden from them
     * So this variable is private
     */
    static __$: Map<string, Function[]> = new Map()

    constructor() {
        this.KeyNotFoundError = class extends Error {
            constructor(message: string) {
                super(message)
                this.name = 'KeyNotFoundError'
            }
        }
    }

    /**
     * Dispatches the given function set to the __$.
     * @param {string} key The string representation of the components name
     * @param {Function[]} functionSet A set of functions which is to be dispatched
     * @return {void}
     */
    dispatch(key: string, ...functionSet: Function[]): void {
        const currentFunctionSet: ?Function[] = EventDispatcher.__$.get(key)
        if (!EventDispatcher.__$.set(key, currentFunctionSet ? currentFunctionSet.concat(functionSet) : [...functionSet]))
            throw new Error('Cannot add the new function set to the EventDispatcher.')
    }

    /**
     * Gets a function with the given key an index.
     * When failed returns a function which throws an error.
     * @param {string} key The string representation of the components name
     * @param {number} index The index of the function to be got
     * @return {Function} The function with the given index and key
     */
    getOne(key: string, index: number = 0): Function {
        const errorFunction = () => {
            throw new this.KeyNotFoundError('Key has not been found.')
        }
        const functionSet: ?Function[] = EventDispatcher.__$.get(key)
        return functionSet ? functionSet[index] : errorFunction
    }

    /**
     * Gets the function set of the given key.
     * When failed returns a function which throws an error.
     * @param {string} key The string representation of the components name
     * @return {Function[] | Function} Function set for the given key
     */
    getAll(key: string): Function[] | Function  {
        const errorFunction = () => {
            throw new this.KeyNotFoundError('Key has not been found.')
        }
        const functionSet: ?Function[] =  EventDispatcher.__$.get(key)
        return functionSet ? functionSet : errorFunction
    }

    /**
     * Instead of getOne, runs the function with given key and index.
     * @param {string} key The string representation of the components name
     * @param {number} index The index of the function to be executed
     * @param {any[]} args The arguments to be injected in the target function as parameters
     * @return {any} Returns the return value of the executed function
     */
    triggerOne(key: string, index: number = 0, ...args: any[]): any {
        return this.getOne(key, index)(...args)
    }

    /**
     * Instead of getAll, runs the function set with given key.
     * @param {string} key The string representation of the components name
     * @param {any[][]} argsSet A set of arguments to be injected in the target function set as parameters
     * @return {any[]} Returns the return value set of the executed function set
     */
    triggerAll(key: string, argsSet: any[][]): any[] {
        const functionSet = this.getAll(key)
        const returnValues = []
        for (let i = 0; i < functionSet.length; ++i) {
            returnValues.push(functionSet[i](...argsSet[i]))
        }
        return returnValues
    }

    /**
     * Removes the given key from key map.
     * Warning: This method is meant to be used only in componentWillUnmount
     * @param {string} key The string representation of the components name
     */
    deleteKey(key: string) {
        if (!EventDispatcher.__$.delete(key)) {
            throw new this.KeyNotFoundError('Key has not been found.')
        }
    }

    /**
     * Prints the key map as a visual tree
     * @param {boolean} isTest Returns the output string if it is true, otherwise prints the output to the console
     */
    print(isTest: boolean = false): void | string {
        let outputString = ''
        outputString += '*\n'
        const keys = Array.from(EventDispatcher.__$.keys())
        for (let i = 0; i < keys.length; ++i) {
            const lineToken = i === keys.length - 1 ? ' ' : '|'
            const keyToken = i === keys.length - 1 ? '└──' : '├──'
            const key = keys[i]
            const functionSet = this.getAll(key)
            outputString += `${keyToken} ${key}\n`
            for (let j = 0; j < functionSet.length; ++j) {
                outputString += `${lineToken}   ${j === functionSet.length - 1 ? '└──' : '├──'} ${functionSet[j].name}\n`
            }
        }
        if (isTest) {
            return outputString
        }
        console.log(outputString)
    }

    /**
     * Clears the event map __$.
     * @return {void}
     */
    clear(): void {
        EventDispatcher.__$.clear()
    }
}

/**
 * @brief Singleton object of EventDispatcher
 * @type {EventDispatcher}
 */
const eventEmitter = new EventDispatcher()
export default eventEmitter