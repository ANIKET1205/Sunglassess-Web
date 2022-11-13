export const setSelectedProduct = (data) => {
    return {
        type: "SET_SELECTED_PRODUCT",
        payload: data
    }
}

export const removeSelectedProduct = () => {
    return {
        type: "REMOVE_SELECTED_PRODUCT"
    }
}