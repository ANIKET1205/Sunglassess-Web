


const initialState = {}
// console.log('init',initialState)

export const SelectedProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case "SET_SELECTED_PRODUCT":
            return action.payload ? state=action.payload : state;
            case "REMOVE_SELECTED_PRODUCT":
            return state=[];
        default: return state;
    }
}
