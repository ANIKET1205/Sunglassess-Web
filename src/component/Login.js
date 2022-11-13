import React, { useEffect } from 'react';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { validateUSer } from '../redux/action/UserAction';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import api from "../api/users";

function Login() {
    const data = useSelector(state => state.addUser)
    const navigate = useNavigate();
    // const dispatch = useDispatch();

    var initialData = []
    // const response = api.get('/users');
    // console.log('L users data', response.data)
    // var initialData = response.data
    const retriveUsers = () => {
        // console.log('HIh',api.get('/contact'))
        const response = api.get('/users');
        console.log('L users data', response.data)
        initialData = response.data
        // return response.data;
    }
    // retriveUsers();
    useEffect(() => {
        console.log('casd')
        retriveUsers();
    }, [])


    const loginPerform = async (data) => {
        if(data.email === 'admin@gmail.com' && data.password === 'Admin@123'){
            window.localStorage.setItem("Admin",data)
            navigate('/admin');
            window.location.reload();
            return;
        }
        const response = await api.get('/users');
        console.log('L users data', response.data)
        initialData = response.data

        console.log('ini', initialData)
        const validateUser = initialData.filter((Idata) => Idata.email === data.email && Idata.password === data.password)
        console.log('VV', validateUser)
        if (validateUser.length === 0) {
            console.log("User not Exist", validateUser)
            alert("User Not Exists")
        }
        else {
            console.log("User Exist", validateUser)
            window.localStorage.setItem("Login", JSON.stringify(validateUser))
            navigate('/');
            // return validateUser
        }
    }
    const initialValues = {
        email: '',
        password: ''
    }
    useEffect(() => {
        let login = window.localStorage.getItem('Login');
        // console.log("LLL", JSON.parse(login))
        if (login) {
            navigate('/')
        }
    }, [])
    useEffect(() => {
        let login = window.localStorage.getItem('Login');
        if (login) {
            navigate('/')
        }
    }, [data])

    const onSubmit = (values, onSubmitProps) => {
        console.log('Form data', values)
        onSubmitProps.setSubmitting('false')
        onSubmitProps.resetForm()
        // dispatch(validateUSer(values))
        loginPerform(values)

    }

    const validationSchema = Yup.object({
        email: Yup.string().email('INVALID EMAIL').required("REQUIRED"),
        password: Yup.string().required('REQUIRED').matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        )

    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })



    // const { handleBlur, handleChange, values } = formik
    return (
        <div className='bg-dark p-2 text-white '>
            <div className='row'>
                <div className='border border-white bg-warning text-dark text-lg p-4 m-5 rounded mx-auto shadow col-lg-5 col-md-7 col-sm-9 col-xs-11 login-box'>
                    <h3 className='bg-black text-white d-inline-block p-2 rounded mx-auto shadow shadow-intensity-xl'>Login Form</h3>
                    <div className=''>
                        <form onSubmit={formik.handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="email">User ID : </label>
                                <input type='text' name="email" id="email" className='form-control mx-auto' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />
                                {formik.errors.email && formik.touched.email ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.email}</div>) : null}
                            </div>
                            <div className='form-group'>
                                <label htmlFor="password">Password : </label>
                                <input type='text' name="password" id="password" className='form-control mx-auto' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
                                {formik.errors.password && formik.touched.password ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.password}</div>) : null}
                            </div>
                            <button type="submit" className='btn btn-primary border mt-4 shadow l-btn'>LOGIN</button>
                        </form>
                    </div>
                    <Link to="/forgot-pass" >Forgot Password</Link>
                </div>
            </div>
        </div>
    )
}

export default Login