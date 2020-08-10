// @flow
class EventEmitter {
    /**
     * A static variable for storing events
     * It is shared across all components
     * Yet it is hidden from them
     * So this variable is private
     */
    static __$: Map<string, Function[]> = new Map()

    /**
     * Dispatches the given function set to the __$.
     * @param {string} key The string representation of the components name
     * @param {Function[]} $functionSet A set of functions which is to be dispatched
     * @return {void}
     */
    emit(key: string, ...$functionSet: Function[]): void {
        if (EventEmitter.__$.set(key, EventEmitter.__$.get(key) ? EventEmitter.__$.get(key).concat($functionSet) : [...$functionSet])) return
        else {
            throw new Error('Cannot add the new function set to the EventEmitter.')
        }
    }

    /**
     * Gets a function with the given key an index.
     * When failed returns a function which throws and error.
     * @param {string} key The string representation of the components name
     * @param {number} index The index of the function to be got
     * @return {Function} The function with the given index and key
     */
    getOne(key: string, index: number = 0): Function {
        if (EventEmitter.__$.has(key)) {
            return EventEmitter.__$.get(key)[index]
        } else {
            console.error('Key has not been found')
            return () => {
                throw new Error('Key has not been found')
            }
        }
    }

    /**
     * Gets the function set of the given key.
     * When failed returns a function which throws and error.
     * @param {string} key The string representation of the components name
     * @return {Function[] | Function} Function set for the given key
     */
    getAll(key: string): Function[] | Function  {
        if (EventEmitter.__$.has(key)) {
            return EventEmitter.__$.get(key)
        } else {
            console.error('Key has not been found')
            return () => {
                throw new Error('Key has not been found')
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
    triggerOne(key: string, index: number, ...args: any[]): void {
        this.getOne(key, index)(...args)
    }

    /**
     * Instead of getAll, runs the function set with given key.
     * @param {string} key The string representation of the components name
     * @param {any[][]} argsSet A set of arguments to be injected in the target function set as parameters
     * @return {void}
     */
    triggerAll(key: string, argsSet: any[][]): void {
        const functionSet = this.getAll(key)
        for (let i = 0; i < functionSet.length; ++i) {
            functionSet[i](...argsSet[i])
        }
    }

    /**
     * Clears the event map __$.
     * @return {void}
     */
    clear(): void {
        EventEmitter.__$.clear()
    }
}

const eventEmitter = new EventEmitter()
export default eventEmitter