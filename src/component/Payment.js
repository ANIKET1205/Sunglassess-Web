import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import api from "../redux/users";

function Payment() {
    let login = window.localStorage.getItem('Login');
    let tAmount = window.localStorage.getItem('TotalAmount');
    const cart = useSelector(state=>state.cart)
    console.log('car',cart)
    const navigate = useNavigate();
    const user = JSON.parse(login)

    useEffect(() => {
      if(tAmount === 0 || !tAmount){
          navigate('/')
      }
    }, [])
    


    const initialValues = {
        email: user[0].email,
        cNumber: "",
        cName: "",
        cvv: "",
        mm: "",
        yyyy: "",
        totalAmount:tAmount
    }

    const onSubmit = (values, onSubmitProps) => {
        let data = {...values , "cartData":cart,"customerId":user[0].id,"Date": new Date().getDate()+'/'+new Date().getMonth()+'/'+new Date().getFullYear(),"Time":new Date().getHours()+':'+new Date().getMinutes()}
        console.log('Form data', values)
        onSubmitProps.setSubmitting('false')
        onSubmitProps.resetForm()
        
        console.log(data)
        const res = api.post('/payment', data).catch(err=>console.log(err))
        if(res){
            alert("Payment Successfull")
            navigate('/print')
        }
    }

    const validationSchema = Yup.object({
        email: Yup.string().email('INVALID EMAIL').required("REQUIRED"),
        cNumber: Yup.string().length(16, "not less than 16").required("REQUIRED"),
        cName:Yup.string().required("REQUIRED"),
        cvv: Yup.string().required("REQUIRED").length(3),
        mm: Yup.string().required("REQUIRED").length(2),
        yyyy: Yup.string().required("REQUIRED").length(4)
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <div className='bg-dark p-2 text-white '>
            <div className='row'>
                <div className='border border-white bg-light text-dark text-lg p-4 m-5 rounded mx-auto shadow col-lg-5 col-md-7 col-sm-9 col-xs-11 login-box'>
                    <h3 className='bg-black text-white d-inline-block p-2 rounded mx-auto shadow shadow-intensity-xl'>Payment</h3>
                    <div className=''>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="email">Email ID : </label>
                                <input type='text' name="email" id="email" className='form-control mx-auto' onBlur={formik.handleBlur} onChange={formik.handleChange} value={user[0].email} disabled />
                                {formik.errors.email && formik.touched.email ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.email}</div>) : null}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="cNumber">Card Details : </label>
                                <input type="text" className='form-control mx-auto' name="cNumber" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cNumber} placeholder='Card Number' />
                                {formik.errors.cNumber && formik.touched.cNumber ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.cNumber}</div>) : null}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="cName">Card Holder Name : </label>
                                <input type="text" className='form-control mx-auto' name="cName" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cName} placeholder='Card Holder Name' />
                                {formik.errors.cName && formik.touched.cName ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.cName}</div>) : null}
                            </div>
                            <div className='form-group mt-3 '>
                                <div className='d-flex justify-content-around'>
                                    <div className='w-25'>
                                        <input type='text' className='form-control mx-auto' name='cvv' id='cvv' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.cvv} placeholder='CVV' />
                                        {formik.errors.cvv && formik.touched.cvv ? (<div className='bg-danger text-light w-75 mx-auto mb-3 rounded err'>{formik.errors.cvv}</div>) : null}
                                    </div>
                                    <div className='w-25'>
                                        <input type='text' className='form-control mx-auto' name='mm' id='mm' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.mm} placeholder='MM' />
                                        {formik.errors.mm && formik.touched.mm ? (<div className='bg-danger text-light mx-auto mb-3  w-75 rounded err'>{formik.errors.mm}</div>) : null}
                                    </div>
                                    <div className='w-25'>
                                        <input type='text' className='form-control mx-auto' name='yyyy' id='yyyy' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.yyyy} placeholder='YYYY' />
                                        {formik.errors.yyyy && formik.touched.yyyy ? (<div className='bg-danger text-light mx-auto w-75 mb-3 rounded err'>{formik.errors.yyyy}</div>) : null}
                                    </div>
                                </div>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="totalAmount">Total Amount : </label>
                                <input type="text" className='form-control mx-auto' name="totalAmount" onChange={formik.handleChange} onBlur={formik.handleBlur} value={'Rs. '+tAmount} disabled />
                                {formik.errors.totalAmount && formik.touched.totalAmount ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.totalAmount}</div>) : null}
                            </div>
                            <button type="submit" className='btn btn-primary border mt-4 shadow l-btn'>Pay</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
