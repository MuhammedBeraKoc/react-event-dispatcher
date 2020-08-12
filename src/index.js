// @flow

class EventDispatcher {
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
     * @param {Function[]} $functionSet A set of functions which is to be dispatched
     * @return {void}
     */
    dispatch(key: string, ...$functionSet: Function[]): void {
        if (!EventDispatcher.__$.set(key, EventDispatcher.__$.get(key) ? EventDispatcher.__$.get(key).concat($functionSet) : [...$functionSet]))
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
        if (EventDispatcher.__$.has(key)) {
            return EventDispatcher.__$.get(key)[index]
        } else {
            return () => {
                throw new this.KeyNotFoundError('Key has not been found.')
            }
        }
    }

    /**
     * Gets the function set of the given key.
     * When failed returns a function which throws an error.
     * @param {string} key The string representation of the components name
     * @return {Function[] | Function} Function set for the given key
     */
    getAll(key: string): Function[] | Function  {
        if (EventDispatcher.__$.has(key)) {
            return EventDispatcher.__$.get(key)
        } else {
            return () => {
                throw new this.KeyNotFoundError('Key has not been found.')
            }
        }
    }

    /**
     * Instead of getOne, runs the function with given key and index.
     * @param {string} key The string representation of the components name
     * @param {number} index The index of the function to be executed
     * @param {any[]} args The arguments to be injected in the target function as parameters
     * @return {void}
     */
    triggerOne(key: string, index: number, ...args: any[]): any {
        return this.getOne(key, index)(...args)
    }

    /**
     * Instead of getAll, runs the function set with given key.
     * @param {string} key The string representation of the components name
     * @param {any[][]} argsSet A set of arguments to be injected in the target function set as parameters
     * @return {void}
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