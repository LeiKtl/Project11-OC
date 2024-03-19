export function loginReducer (currentState, action) {
    return {
        ...currentState,
        token : action.payload.token
    }
}

export function logoutReducer () {
    return {
        token: null,
        firstName: null,
        lastName: null,
        userName: null,
        userEmail: null,
        userId: null,
        accounts: null,
        transactions: null
    }
}