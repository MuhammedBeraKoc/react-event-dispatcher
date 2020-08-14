// @flow

import EventDispatcherFactory from '../src/index'

const generateKey = () => {
    let key = ''
    for (let i = 0; i < 4; ++i) {
        const random = Math.floor(Math.random() * 2)
        if (random === 0 ) {
            key += String.fromCharCode('0'.charCodeAt(0) + Math.floor(Math.random() * 10))
        } else {
            key += String.fromCharCode('a'.charCodeAt(0) + Math.floor(Math.random() * 26))
        }
    }
    return key
}

(() => {
    EventDispatcherFactory.create('UnitTest')
    return EventDispatcherFactory.use('UnitTest')
})()

describe('EventDispatcher Test Suite', () => {
    let unitTestEventDispatcher

    beforeAll(() => {
        unitTestEventDispatcher = (() => {
            EventDispatcherFactory.create('unitTest')
            return EventDispatcherFactory.use('unitTest')
        })()
    })

    it('should emit function set and get them', () => {
        const key = generateKey()
        const functionSet = [
            (bool: boolean) => bool,
            () => 'Hello World!'
        ]
        unitTestEventDispatcher.dispatch(key, ...functionSet)
        expect(unitTestEventDispatcher.getOne(key, 0)(true)).toBe(true)
        expect(unitTestEventDispatcher.getOne(key, 1)()).toBe('Hello World!')
        expect(unitTestEventDispatcher.getAll(key)).toStrictEqual(functionSet)
    })

    it('should try to get an unknown component name and throw error', () => {
        const key = generateKey()
        expect(unitTestEventDispatcher.getOne(key)).toThrow(unitTestEventDispatcher.ComponentNotFoundError)
        expect(unitTestEventDispatcher.getAll(key)).toThrow(unitTestEventDispatcher.ComponentNotFoundError)
    })

    it('should emit function set and run them', () => {
        const key = generateKey()
        const functionSet = [
            (name: string) => '@f' + name,
            (name: string) => '@g' + name
        ]
        unitTestEventDispatcher.dispatch(key, ...functionSet)
        expect(unitTestEventDispatcher.runOne<string>(key, 0, 'One')).toBe('@fOne')
        expect(unitTestEventDispatcher.runOne<string>(key, 1, 'Two')).toBe('@gTwo')
        expect(unitTestEventDispatcher.runAll(key, [['One'], ['Two']])).toStrictEqual(['@fOne', '@gTwo'])
    })

    it('should clear the _componentEventMap', () => {
        const key = generateKey()
        const f = () => 'I will be erased soon.'
        unitTestEventDispatcher.dispatch(key, f)
        unitTestEventDispatcher.clear()
        expect(unitTestEventDispatcher.getOne(key)).toThrow(unitTestEventDispatcher.ComponentNotFoundError)
    })

    it('should remove the key from the _componentEventMap', () => {
        const key = generateKey()
        const f = () => 'This shan\'t be invoked.'
        unitTestEventDispatcher.dispatch(key, f)
        unitTestEventDispatcher.deleteComponent(key)
        expect(unitTestEventDispatcher.getOne(key)).toThrow(unitTestEventDispatcher.ComponentNotFoundError)
    })

    it('should remove an unknown key from the _componentEventMap and throw error', () => {
        const key = generateKey()
        expect(unitTestEventDispatcher.deleteComponent(key)).toThrow(unitTestEventDispatcher.ComponentNotFoundError)
    })

    it('should print _componentEventMap as a visual tree', () => {
        const k1 = generateKey()
        const k2 = generateKey()
        const f1 = () => '@f1'
        const f21 = () => '@f21'
        const f22 = () => '@f22'
        expect(unitTestEventDispatcher.print(true)).toBe(`${unitTestEventDispatcher.name}\n`)
        unitTestEventDispatcher.dispatch(k1, f1)
        unitTestEventDispatcher.dispatch(k2, f21, f22)
        expect(unitTestEventDispatcher.print(true)).toBe(`${unitTestEventDispatcher.name}\n├── ${k1}\n|   └── f1\n└── ${k2}\n    ├── f21\n    └── f22\n`)
    })

    it('should emit function set then resolve them', () => {
        const key = generateKey()
        const add = (a: number, b: number) => a + b
        const stringToNumber = (s: string) => +s
        unitTestEventDispatcher.dispatch(key, add, stringToNumber)
        unitTestEventDispatcher.resolveOne(key, 0, 2, 3).then(result => {
            expect(result).toBe(5)
        })
        unitTestEventDispatcher.resolveOne(key, 1, '154').then(result  => {
            expect(result).toBe(154)
        })
        unitTestEventDispatcher.resolveAll(key, [[2, 3], ['154']]).then(resultSet => {
            expect(resultSet).toStrictEqual([5, 154])
        })
    })
})

describe('EventDispatcherFactory Test Suite', () => {
    beforeEach(() => {
        EventDispatcherFactory.clear()
    })

    it('should create an EventDispatcher then use it', () => {
        const tacoEventDispatcher = EventDispatcherFactory.create('IntergalacticTaco')
        expect(EventDispatcherFactory.use('IntergalacticTaco')).toStrictEqual(tacoEventDispatcher)
    })

    it('should try to create a duplicate EventDispatcher and throw error', () => {
        EventDispatcherFactory.create('IntergalacticTaco')
        expect(EventDispatcherFactory.create('IntergalacticTaco')).toThrow(EventDispatcherFactory.DispatcherNameIsNotUniqueError)
    })

    it('should try to use a not given EventDispatcher name and throw error', () => {
        expect(EventDispatcherFactory.use('IntergalacticTaco')).toThrow(EventDispatcherFactory.DispatcherNotFoundError)
    })

    it('should delete an EventDispatcher', () => {
        EventDispatcherFactory.create('IntergalacticTaco')
        EventDispatcherFactory.delete('IntergalacticTaco')
        expect(EventDispatcherFactory.use('IntergalacticTaco')).toThrow(EventDispatcherFactory.DispatcherNotFoundError)
    })

    it('should try to delete an EventDispatcher that does not exist and throw error', () => {
        expect(EventDispatcherFactory.delete('IntergalacticTaco')).toThrow(EventDispatcherFactory.DispatcherNotFoundError)
    })

    it('should print _eventDispatcherMap', () => {
        const buttonEventDispatcher = EventDispatcherFactory.create('Button')
        const inputEventDispatcher = EventDispatcherFactory.create('Input')
        const k1 = generateKey()
        const k2 = generateKey()
        const f1 = () => '@f1'
        const f21 = () => '@f21'
        const f22 = () => '@f22'
        expect(buttonEventDispatcher.print(true)).toBe(`${buttonEventDispatcher.name}\n`)
        expect(inputEventDispatcher.print(true)).toBe(`${inputEventDispatcher.name}\n`)
        buttonEventDispatcher.dispatch(k1, f1)
        inputEventDispatcher.dispatch(k2, f21, f22)
        expect(EventDispatcherFactory.print(true)).toBe(`${'-'.repeat(32)}\n${buttonEventDispatcher.name}\n└── ${k1}\n    └── f1\n${inputEventDispatcher.name}\n└── ${k2}\n    ├── f21\n    └── f22\n${'-'.repeat(32)}`)
    })
})