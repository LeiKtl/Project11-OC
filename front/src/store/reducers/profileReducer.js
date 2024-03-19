export function setProfileReducer (currentState, action) {
    return {
        ...currentState,
        firstName : action.payload.firstName,
        lastName : action.payload.lastName,
        userName : action.payload.userName,
        userEmail : action.payload.email,
        userId : action.payload.id
    }
}