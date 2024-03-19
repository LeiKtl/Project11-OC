export function transactionReducer(currentState, action) {
    return {
        ...currentState,
        transactions : action.payload
    }
}