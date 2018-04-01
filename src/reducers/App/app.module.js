
const initialState = {};

const appData = (state = initialState, payload, type) => {
    switch (type) {
        case 'TEST':
            return todos.filter(t => t.completed)
        default:
            return state
    }
}