export const addItem = (data) => {
    return {
        type: "ADD_ITEM_INTO_CART",
        payload: data
    }
}

export const removeItem = (data) => {
    return {
        type: "REMOVE_ITEM_FROM_CART",
        payload: data
    }
}

export const clearCart = () => {
    return {
        type: "CLEAR_CART"
    }
}

// export const addTotalAmount = (data) => {
//     return {
//         type: "ADD_TOTAL_AMOUNT",
//         payload:data
//     }
// }