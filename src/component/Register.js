import React from 'react'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
// import { addUserDetails } from '../redux/action/UserAction';
import { Navigate, useNavigate } from 'react-router-dom';
import api from "../api/users";

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addUserDetails = (data) => {
        api.post('/users', data)
    }

    const initialValues = {
        id: Date.now(),
        name: '',
        email: '',
        password: '',
        mNumber: '',
        gender: ''
    }

    const onSubmit = (values, onSubmitProps) => {
        console.log('Form data', values)
        onSubmitProps.setSubmitting('false')
        onSubmitProps.resetForm()
        // dispatch(addUserDetails(values))
        addUserDetails(values)
        navigate('/login')
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('REQUIRED'),
        email: Yup.string().email('INVALID EMAIL').required("REQUIRED"),
        password: Yup.string().required('REQUIRED').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
        mNumber: Yup.string().required('REQUIRED').matches(
            /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
            "Phone number is not valid"
        ),
        gender: Yup.string().required('REQUIRED')

    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })



    const { handleBlur, handleChange, values } = formik
    return (
        <div className='bg-dark p-2 text-white '>
            <div className='row'>
                <div className='border border-white bg-warning text-dark text-lg p-4 m-5 col-lg-5 col-md-7 col-sm-9 col-xs-11 rounded mx-auto login-box'>
                    <h3 className='bg-black text-white d-inline-block p-2 rounded mx-auto shadow shadow-intensity-xl'>Registration Form</h3>
                    <div className=''>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="name">Name : </label>
                                <input type='text' name="name" id="name" className='form-control input-sm mx-auto line-height-1' onBlur={handleBlur} onChange={handleChange} value={values.name} />
                                {formik.errors.name && formik.touched.name ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.name}</div>) : null}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="email">Email : </label>
                                <input type='text' name="email" id="email" className='form-control mx-auto' onBlur={handleBlur} onChange={handleChange} value={values.email} />
                                {formik.errors.email && formik.touched.email ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.email}</div>) : null}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="password">Password : </label>
                                <input type='text' name="password" id="password" className='form-control mx-auto' onBlur={handleBlur} onChange={handleChange} value={values.password} />
                                {formik.errors.password && formik.touched.password ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.password}</div>) : null}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="mNumber">Mobile Number : </label>
                                <input type='text' name="mNumber" id="mNumber" className='form-control mx-auto' onBlur={handleBlur} onChange={handleChange} value={values.mNumber} />
                                {formik.errors.mNumber && formik.touched.mNumber ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.mNumber}</div>) : null}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="gender">Gender : </label><br />
                                <input type='radio' name="gender" id="Male" value='Male' className='form-check-input' onBlur={handleBlur} onChange={handleChange} />
                                <label htmlFor='Male' className='form-check-label ms-2'>  Male</label> <br />
                                <input type='radio' name="gender" id="Female" value='Female' className='form-check-input' onBlur={handleBlur} onChange={handleChange} />
                                <label htmlFor='Female' className='form-check-label ms-2'>  Female</label> <br />
                                <input type='radio' name="gender" id="Other" value='Other' className='form-check-input' onBlur={handleBlur} onChange={handleChange} />
                                <label htmlFor='Other' className='form-check-label ms-2'>  Other</label>
                                {formik.errors.gender && formik.touched.gender ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.gender}</div>) : null}
                            </div>
                            <button type="submit" className='btn btn-primary border mt-4 shadow l-btn'>REGISTER</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register