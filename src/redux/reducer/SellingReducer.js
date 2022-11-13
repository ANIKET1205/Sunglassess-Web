


const initialState = []
// console.log('init',initialState)

export const SellingReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_SELLING_DATA":
            return state=action.payload;
        default: return state;
    }
}
