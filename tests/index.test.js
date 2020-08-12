import EventDispatcher from '../src/index'

const generateKey = () => {
    let key = ''
    const random = Math.floor(Math.random() * 2)
    if (random === 0 ) {
        key += String.fromCharCode('0'.charCodeAt(0) + Math.floor(Math.random() * 10))
    } else {
        key += String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 26))
    }
    return key
}

describe('EventDispatcher Test Suite', () => {
    it('should emit function set and get them', () => {
        const key = generateKey()
        const functionSet = [
            () => true,
            () => 'Hello World!'
        ]
        EventDispatcher.dispatch(key, ...functionSet)
        expect(EventDispatcher.getOne(key, 0)()).toBe(true)
        expect(EventDispatcher.getOne(key, 1)()).toBe('Hello World!')
        expect(EventDispatcher.getAll(key)).toStrictEqual(functionSet)
    })

    it('should emit function set and trigger them', () => {
        const key = generateKey()
        const functionSet = [
            (name) => '@f' + name,
            (name) => '@g' + name
        ]
        EventDispatcher.dispatch(key, ...functionSet)
        expect(EventDispatcher.triggerOne(key, 0, 'One')).toBe('@fOne')
        expect(EventDispatcher.triggerOne(key, 1, 'Two')).toBe('@gTwo')
        expect(EventDispatcher.triggerAll(key, [['One'], ['Two']])).toStrictEqual(['@fOne', '@gTwo'])
    })

    it('should clear the dispatcher', () => {
        const key = generateKey()
        const f = () => 'I will be erased soon.'
        EventDispatcher.dispatch(key, f)
        EventDispatcher.clear()
        expect(EventDispatcher.getOne(key)).toThrow(EventDispatcher.KeyNotFoundError)
    })

    it('should remove the key from the key map', () => {
        const key = generateKey()
        const f = () => 'This shan\'t be invoked.'
        EventDispatcher.dispatch(key, f)
        EventDispatcher.deleteKey(key)
        expect(EventDispatcher.getOne(key)).toThrow(EventDispatcher.KeyNotFoundError)
    })
})