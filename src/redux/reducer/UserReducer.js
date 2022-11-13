import { Navigate, useNavigate } from "react-router-dom";
import api from "../users";

const initialState = [{
    id: 0,
    name: '',
    email: '',
    password: '',
    mNumber: '',
    gender: ''
}]
var initialData = []

const retriveUsers = async () => {
    // console.log('HIh',api.get('/contact'))
    const response = await api.get('/users');
    console.log('users data',response.data)
    initialData = response.data
    return response.data;
}
// retriveUsers();
retriveUsers();

// const ValidateU = (data) => {
//     // const navigate = useNavigate();
//     retriveUsers();
//     for (let i = 0; i < 900000; i++) {
//         // text += cars[i] + "<br>";
//         let n = i
//       }
    
//     // const response = api.get('/users');
//     // console.log('users data',response.data)
//     // initialData = response.data
//     const validateUser = initialData.filter((Idata) => Idata.email === data.email && Idata.password === data.password)
//     console.log('VV',validateUser)
//     if (validateUser.length === 0) {
//         console.log("User not Exist", validateUser)
//         alert("User Not Exists")
//     }
//     else {
//         console.log("User Exist", validateUser)
//         window.localStorage.setItem("Login", JSON.stringify(validateUser))
//         return validateUser
//     }
// }fsfsg
const forgotPassword = async (data) => {
    const validateUser = initialData.filter((Idata) => Idata.email === data.email)
    if (validateUser.length === 0) {
        alert("Email Id not Exist!")
    }
    else {
        const id = validateUser[0].id
        validateUser[0].password = data.password
        const response = await api.put(`/users/${id}`, validateUser[0]);
        console.log(response.data)
    }

}




export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_LOGGEDIN_USER":
            return state = action.payload
        case "UPDATE_PASSWORD":
            return forgotPassword(action.payload)

        default: return state;
    }
}
