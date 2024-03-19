export function loginReducer (currentState, action) {
    return {
        ...currentState,
        token : action.payload.token
    }
}

export function logoutReducer (currentState, action) {
    return {
        ...currentState,
        token : action.payload.token
    }
}