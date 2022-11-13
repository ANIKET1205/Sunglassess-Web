let cart = window.localStorage.getItem('Cart')
let cartData = JSON.parse(cart)

const initialState = cart ? cartData : []


// let flag = 0
// let new_data
// cartData.map((d1) => d1.id === data.id ? flag = 1 : null)
// if (flag === 1) {
//     new_data = { quantity: Number(data.quantity) + 1, ...data }
// }
// else {
//     new_data = { quantity: 1, ...data }
// }


// const addToCart = (data) => {
//     let flag = 0
//     let new_data
//     console.log(data)
//     initialState.map((d1) => d1.id === data.id ? flag = 1 : null)
//     if (flag === 1) {
//         new_data = { quantity: Number(data.quantity) + 1, ...data }
//     }
//     else {
//         new_data = { quantity: 1, ...data }
//     }
//     initialState = [...initialState, new_data];
//     window.localStorage.setItem("Cart", JSON.stringify(initialState))

// }



export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM_INTO_CART":
            // return addToCart(action.paylopad)
            // state = [...state, action.payload]
            // // let storedArray = [...cartData , action.payload];
            // window.localStorage.setItem("Cart", JSON.stringify(state))
            let flag = 0
            let new_data
            console.log(action.payload)
            state.map((d1) => d1.id === action.payload.id ? <>{d1.quantity = d1.quantity + 1} {flag = 1}</> : null)
            if (flag === 0) {
                new_data = { quantity: 1, ...action.payload }
                state = [...state, new_data]
            }
            else {
                state = [...state]
            }
            window.localStorage.setItem("Cart", JSON.stringify(state))
            return state;
        case "REMOVE_ITEM_FROM_CART":
            let flag1;
            let refData = action.payload
            state.map((d1, index) =>
                d1.id === refData.id ? flag1 = index : null
            )
            if (refData.quantity === 1) {
                // ref.
                state = state.filter((d1) => d1.id !== refData.id);
            }
            else {
                refData.quantity = refData.quantity - 1;
                state[flag1] = refData
                state = [...state]
            }
            window.localStorage.setItem("Cart", JSON.stringify(state))
            return state
        case "CLEAR_CART":
            state = []
            window.localStorage.setItem("Cart", JSON.stringify(state))
            return state
        // case "ADD_TOTAL_AMOUNT":
        //     return [...state,{"total":action.payload}]
        default: return state
    }
}