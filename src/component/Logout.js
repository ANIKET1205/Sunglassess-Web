import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addLoggedinInfo } from '../redux/action/UserAction';

function Logout() {
    const dispatch = useDispatch();
    let cart = window.localStorage.getItem('Cart');
    let admin = window.localStorage.getItem('Admin');
    const initialData = [{
        id: 0,
        name: '',
        email: '',
        password: '',
        mNumber: '',
        gender: ''
    }]
    const navigate = useNavigate();
    useEffect(()=>{
        window.localStorage.removeItem('Login')
        window.localStorage.removeItem('Cart')
        window.localStorage.removeItem('Admin')
        dispatch(addLoggedinInfo(initialData))
        // console.log('YYYY')
        navigate('/')
            
        //   });
    },[])
  return (
    <div></div>
  )
}

export default Logout