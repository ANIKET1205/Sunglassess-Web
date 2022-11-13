export const addLoggedinInfo = (data) => {
    return {
        type:"ADD_LOGGEDIN_USER",
        payload:data
    }
}

export const updatePassword = (data) => {
    return {
        type:"UPDATE_PASSWORD",
        payload:data
    }
}