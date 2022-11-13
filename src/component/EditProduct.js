import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import * as Yup from 'yup';
import { useFormik } from 'formik';
import api from "../api/users";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function EditProduct() {
    const navigate = useNavigate();
    const selectedProduct = useSelector(state => state.selectedProduct)
    // const pData = useSelector(state => state.products)
    const productId = useParams().id;
    // var product = pData.filter((p)=>p.id===productId)
    
    // console.log(selectedProduct)
    // const dispatch = useDispatch();
    // console.log('pdata',pData)
    
    // console.log("Data",productId)
    // dispatch(setSelectedProduct(product[0]))
    
    
    // console.log(product[0])

    
    // var product
    // useEffect(()=>{
    //     product = pData.filter((p)=>p.id===productId)
    // console.log(product[0])
    // },[])
    const [imageField, setImageField] = useState();

    const handleFile = (e) => {
        let files = e.target.files;
        console.log(files)
        // file reader object to read file as data url
        let reader = new FileReader();
        // reading file as data url
        reader.readAsDataURL(files[0]);
        // this will give base64 image
        console.log(e.target);

        reader.onload = (e) => {
            console.log(e.target.result);
            //   imageField = e.target.result
            setImageField(e.target.result)
            //   formik.setFieldValue("image",e.target.result)
        };
    };


    const initialValues = {
        name: selectedProduct.name,
        // image: selectedProduct.image,
        // image:"",
        description: selectedProduct.description,
        price: selectedProduct.price
    }

    const onSubmit = (values, onSubmitProps) => {
        values = { ...values, "image": imageField }
        console.log('Form data', values)
        onSubmitProps.setSubmitting('false')
        onSubmitProps.resetForm()
        api.put(`/products/${productId}`, values)
        navigate('/admin/view-products')
        // dispatch(addProduct(values))
        // loginPerform(values

    }

    const validationSchema = Yup.object({
        name: Yup.string().required("REQUIRED"),
        // image: Yup.string().required('REQUIRED'),
        description: Yup.string().required("REQUIRED"),
        price: Yup.number().required("REQUIRED")

    })



    const formik = useFormik({
        initialValues: initialValues,
        onSubmit,
        validationSchema
    })



    return (
        <div>
            <div className='bg-dark p-2 text-white '>
                <div className='row'>
                    <div className='border border-white bg-warning text-dark text-lg p-4 m-5 rounded mx-auto shadow col-lg-5 col-md-7 col-sm-9 col-xs-11 login-box'>
                        {/* <div>{console.log(product)}</div> */}
                        <h3 className='bg-black text-white d-inline-block p-2 rounded mx-auto shadow shadow-intensity-xl'>Edit Product</h3>
                        <div className=''>
                            <form onSubmit={formik.handleSubmit}>
                                <div className='form-group'>
                                    <label htmlFor="name">Product Name : </label>
                                    <input type='text' name="name" id="name" className='form-control mx-auto' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name} />
                                    {formik.errors.name && formik.touched.name ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.name}</div>) : null}
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="image">Image : </label>
                                    <input type='file' name="image" id="image" className='form-control mx-auto' onBlur={formik.handleBlur} onChange={(e)=>handleFile(e)} value={formik.values.image} />
                                    {formik.errors.image && formik.touched.image ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.image}</div>) : null}
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="description">Description : </label>
                                    <input type='text' name="description" id="description" className='form-control mx-auto' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.description} />
                                    {formik.errors.description && formik.touched.description ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.description}</div>) : null}
                                </div>
                                <div className='form-group'>
                                    <label htmlFor="price">Price : </label>
                                    <input type='text' name="price" id="price" className='form-control mx-auto' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.price} />
                                    {formik.errors.price && formik.touched.price ? (<div className='bg-danger text-light mx-auto mb-3 rounded err'>{formik.errors.price}</div>) : null}
                                </div>
                                <button type="submit" className='btn btn-primary border mt-4 shadow l-btn'>UPDATE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProduct