export function accountReducer(currentState, action) {
    return {
        ...currentState,
        accounts : action.payload
    }
}