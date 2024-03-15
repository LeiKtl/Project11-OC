import { configureStore } from "@reduxjs/toolkit";

let state = {
    token: null
}

const reducer = (currentState = state, action) => {
    switch (action.type) {
        case "user/login" : {
            return {
                ...currentState,
                token : action.payload.token
            }
        }
        case "user/logout" : {
            return {
                ...currentState,
                token : action.payload.token
            }
        }
        case "user/setProfile" : {
            return {
                ...currentState,
                firstName : action.payload.firstName,
                lastName : action.payload.lastName,
                userName : action.payload.userName,
                userEmail : action.payload.email,
                userId : action.payload.id
            }
        }
        
        case "user/accounts" : {
            return {
                ...currentState,
                accounts : action.payload.accounts
            }
        }
        default : {
            console.error("no action to perform");
        }
    }
    return currentState
}

export const store = configureStore(
    {
        preloadedState: state,
        reducer,
    }
)