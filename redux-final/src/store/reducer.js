import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM } from './actionTypes'

const defaultState = {
    inputValue: 'write Something',
    list: [
        '你说的还能那么？',
        '你说的还能那么？'
    ]
}

export default (state = defaultState, action) => {
    console.log(action)
    switch (action.type) {
        case CHANGE_INPUT:
            let newState = JSON.parse(JSON.stringify(state))
            newState.inputValue = action.value
            return newState
        case ADD_ITEM:
            let newState2 = JSON.parse(JSON.stringify(state))
            console.log(newState2)
            newState2.list.push(newState2.inputValue)
            newState2.inputValue = ''
            return newState2
        case DELETE_ITEM:
            let newState3 = JSON.parse(JSON.stringify(state))
            newState3.list.splice(action.index, 1)
            return newState3
        default:
            return state
    }
}