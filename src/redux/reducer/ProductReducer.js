import { useState } from "react";
import api from "../users";

// var initData = []
// const retriveProducts = async () => {
//     const response = await api.get('/products').catch(err => {console.log(err)});
//     // console.log('response.data ',response.data)
//     // initialData = response.data
//     // setProducts(response.data)
//     console.log(response.data)
//     initData = response.data
    
//     // return response.data;
// }
// retriveProducts();

const initialState = []
// console.log('init',initialState)

export const ProductReducer = (state = initialState, action) => {

    switch (action.type) {
        case "ADD_PRODUCT":
            return state=[...state , action.payload];
        case "SET_PRODUCT":
            return state=action.payload;
            

        default: return state;
    }
}

