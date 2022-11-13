import {combineReducers} from 'redux';
import { cartReducer } from './CartReducer';
import { ProductReducer } from './ProductReducer';
import { SelectedProductReducer } from './SelectedProductReducer';
import { SellingReducer } from './SellingReducer';
import { userReducer } from './UserReducer';


export const reducer = combineReducers({
    addUser:userReducer,
    cart:cartReducer,
    products:ProductReducer,
    selectedProduct:SelectedProductReducer,
    selling:SellingReducer
})