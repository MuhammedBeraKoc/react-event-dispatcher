import EventEmitter from './EventEmitter'
const key = 'TestComponent'

describe('EventEmitter Test Suite', () => {
    it('should emit the given function set and get them', () => {
        const functionSet = [
            () => console.log('First function'),
            () => console.log('Second function')
        ]
        EventEmitter.emit(key, ...functionSet)
        expect(EventEmitter.getOne(key, 0)).toStrictEqual(functionSet[0])
        expect(EventEmitter.getOne(key, 1)).toStrictEqual(functionSet[1])
        expect(EventEmitter.getAll(key)).toStrictEqual(functionSet)
    })

    it('should clear __$ and trigger the given function set', () => {
        EventEmitter.clear()
        const user = {
            name: 'Richard',
            isEmployed: false
        }
        const changeName = function(name) {
            this.name = name
        }.bind(user)
        const changeWorkStatus = function(isEmployed) {
            this.isEmployed = isEmployed
        }.bind(user)
        const functionSet = [
            changeName,
            changeWorkStatus
        ]
        EventEmitter.emit(key, ...functionSet)
        EventEmitter.triggerOne(key, 0, 'Edward')
        expect(user.name).toBe('Edward')
        EventEmitter.triggerOne(key, 1, true)
        expect(user.isEmployed).toBe(true)
        EventEmitter.triggerAll(key, [['Richard'], [false]])
        expect(user).toStrictEqual({
            name: 'Richard',
            isEmployed: false
        })
    })
})