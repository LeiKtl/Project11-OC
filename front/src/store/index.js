import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, logoutReducer } from "./reducers/authReducer";
import { setProfileReducer } from "./reducers/profileReducer";
import { accountReducer } from "./reducers/accountReducer";
import { transactionReducer } from "./reducers/transactionReducer";

let state = {
    token: null
}

const reducer = (currentState = state, action) => {
    switch (action.type) {
        case "user/login" : return loginReducer(currentState, action)
        case "user/logout" : return logoutReducer(currentState, action)
        case "user/setProfile" : return setProfileReducer(currentState, action) 
        case "user/accounts" : return accountReducer(currentState, action)
        case "user/transactions" : return transactionReducer(currentState, action)
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