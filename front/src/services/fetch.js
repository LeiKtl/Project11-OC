const DATA_SOURCE = "PROD";

const API_PATH = {
    PROD : {
        GET_ALL_TRANSACTIONS : "/accountData/transactionsInfo.json",
        GET_USER_PROFILE : "http://localhost:3001/api/v1/user/profile",
        GET_ALL_ACCOUNTS : "/accountData/accountsInfo.json",
        USER_LOGIN : "http://localhost:3001/api/v1/user/login",
        CHANGE_USERNAME : "http://localhost:3001/api/v1/user/profile"
    },
    MOCK : {
        GET_ALL_TRANSACTIONS : "/accountData/transactionsInfo.json",
        GET_USER_PROFILE : "/accountData/userProfile.json",
        GET_ALL_ACCOUNTS : "/accountData/accountsInfo.json",
        USER_LOGIN : "/accountData/userProfile.json",
        CHANGE_USERNAME : "/accountData/userProfile.json"
    }
}

export const getAllTransactions = async() => {
    const response = await fetch(API_PATH[DATA_SOURCE].GET_ALL_TRANSACTIONS)
    const data = await response.json()
    return data
}

export const getUserProfile = async(token) => {
    const response = await fetch(API_PATH[DATA_SOURCE].GET_USER_PROFILE, {
                                method: "POST",
                                headers: {
                                    "Accept" : "application/json",
                                    "Content-Type" : "application/json",
                                    "Authorization" : `Bearer${token}`
                                }
                            })
    const data = await response.json()
    return data
}

export const getAllAccounts = async() => {
    const response = await fetch(API_PATH[DATA_SOURCE].GET_ALL_ACCOUNTS)
    const dataAccounts = await response.json()
    return dataAccounts
}

export const userLogin = async(user) => {
    const response = await fetch(API_PATH[DATA_SOURCE].USER_LOGIN, {
                                method: "POST",
                                headers: {
                                    "Accept" : "application/json",
                                    "Content-Type" : "application/json",
                                },
                                body: JSON.stringify(user)
                            })
    const data = response.json()
    return data
}

export const changeUsername = async(token, userName) => {
    const response = await fetch(API_PATH[DATA_SOURCE].CHANGE_USERNAME, {
                                method : "PUT",
                                headers : {
                                    "Accept" : "application/json",
                                    "Authorization" : `Bearer ${token}`,
                                    "Content-Type" : "application/json"
                                },
                                body : JSON.stringify(userName)
                            })
    const data = response.json()
    return data
}