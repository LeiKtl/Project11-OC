export function loginReducer (currentState, action) {
    return {
        ...currentState,
        token : action.payload.token
    }
}