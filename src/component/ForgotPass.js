import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { updatePassword, validateUSer } from '../redux/action/UserAction';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ForgotPass() {
    const data = useSelector(state => state.addUser)
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const initialValues = {
        email: '',
        password: '',
        cpassword:''
    }
    useEffect(() => {
        let login = window.localStorage.getItem('Login');
        if (login) {
            navigate('/')
        }
    }, [])

    const onSubmit = (values, onSubmitProps) => {
        console.log('Form data', values)
        onSubmitProps.setSubmitting('false')
        onSubmitProps.resetForm()
        dispatch(updatePassword(values))
        navigate('/login')

    }

    const validationSchema = Yup.object({
        email: Yup.string().email('INVALID EMAIL').required("REQUIRED"),
        password: Yup.string().required('REQUIRED').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
        cpassword:Yup.string().required('REQUIRED').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ).oneOf([Yup.ref('password'), null], 'Passwords must match')

    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })



    // const { handleBlur, handleChange, values } = formik
    return (
        <div className='bg-dark p-2 text-white '>
            <div className='border border-white bg-warning text-dark text-lg p-4 m-5 rounded w-75 mx-auto shadow'>
                <h3 className='bg-black text-white d-inline-block p-2 rounded mx-auto shadow shadow-intensity-xl'>Forgot Password</h3>
                <div className=''>
                    <form onSubmit={formik.handleSubmit}>
                        <div className='form-group'>
                            <label htmlFor="email">Email ID : </label>
                            <input type='text' name="email" id="email" className='form-control  w-75 h-25  p-3 mx-auto' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                            {formik.errors.email && formik.touched.email ? (<div className='bg-danger text-light w-25 mx-auto mb-3 rounded'>{formik.errors.email}</div>) : null}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Password : </label>
                            <input type='text' name="password" id="password" className='form-control  w-75 h-25 p-3 mx-auto' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
                            {formik.errors.password && formik.touched.password ? (<div className='bg-danger text-light w-25 mx-auto mb-3 rounded'>{formik.errors.password}</div>) : null}
                        </div>
                        <div className='form-group'>
                            <label htmlFor="password">Confirm Password : </label>
                            <input type='text' name="cpassword" id="cpassword" className='form-control  w-75 h-25 p-3 mx-auto' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.cpassword} />
                            {formik.errors.cpassword && formik.touched.cpassword ? (<div className='bg-danger text-light w-25 mx-auto mb-3 rounded'>{formik.errors.cpassword}</div>) : null}
                        </div>
                        <button type="submit" className='btn btn-primary border w-25 m-4 shadow'>Change Password</button>
                    </form>
                </div>
                <Link to="/login" >Back To Login</Link>
            </div>
        </div>
    )
}

export default ForgotPass