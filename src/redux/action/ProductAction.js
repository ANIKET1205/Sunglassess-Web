export const addProduct = (data) => {
    return {
        type: "ADD_PRODUCT",
        payload: data
    }
}

export const setProduct = (data) => {
    return {
        type: "SET_PRODUCT",
        payload: data
    }
}