export const getAllTransactions = async() => {
    const response = await fetch("/accountData/transactionsInfo.json")
    const data = await response.json()
    return data
}

export const getAllUserInfo = async(token) => {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
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
    const response = await fetch("/accountData/accountsInfo.json")
    const dataAccounts = await response.json()
    return dataAccounts
}

export const userConnexion = async(user) => {
    const response = await fetch("http://localhost:3001/api/v1/user/login", {
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
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
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