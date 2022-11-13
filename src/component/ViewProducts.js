import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import api from "../api/users";
import { setSelectedProduct } from '../redux/action/SelectedProductAction';

function ViewProducts(props) {
    const [products, setProducts] = useState([])
    const retriveProducts = async () => {
        const response = await api.get('/products');
        setProducts(response.data)
    }
    let admin = window.localStorage.getItem('Admin');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    useEffect(() => {
        retriveProducts();
        if (!admin) {
            alert("To access this page you have to login first");
            navigate('/login');
        }
        
        // console.log('OK',products)
    }, [])

    const removeProducts = (item) => {
        const text = window.confirm("Are you Sure? You want to remove Product : ",item.name);
        if (text === true) {
            const newProducts = products.filter((p) => p.id !== item.id)
            setProducts(newProducts)
            // console.log('new',newProducts)
            api.delete(`/products/${item.id}`)
        }
        else { }

        // console.log(id)

    }

    const editAction =(product)=>{
        dispatch(setSelectedProduct(product))
        navigate(`/admin/edit-product/${product.id}`)

    }

    return (
        <div>
            <section id='view-products'>
                <div className='view-products m-0 text-white'>
                    <div className='container'>
                        {/* <div className='row'>
              <div className='col-sm-12'>
                <div className='text-content text-center'>
                  <h2>Buy Our Products.</h2>
                  <p>Don't Live a Littel, Live a Sunglasses. From this Website You can purchase any type of sunglasses with high qulity material. All Sunglasses are made by our company with best quality raw material.</p>
                </div>
              </div>
            </div> */}
                        <div className='row pt-3'>
                            {
                                // console.log('HHH',products)
                                products.map((product) => {
                                    // console.log(product.image);
                                    return (
                                        <div key={product.id} className='col-lg-4 col-md-6 mb-5'>
                                            <div className='card'>
                                                <img src={product.image} className='img-fluid'></img>
                                                <div className='pt-3'>
                                                    <h4>{product.name}</h4>
                                                    <p>{product.description}</p>
                                                    <span><i className="fa-solid fa-indian-rupee-sign"></i> {parseInt(product.price - (0.15 * product.price))} <del className='ms-1 me-2'><i className="fa-solid fa-indian-rupee-sign"></i> {product.price}</del></span>
                                                    <button className='mt-4 bg-light text-primary rounded me-2' onClick={()=>editAction(product)}><i className="fa-solid fa-pen-to-square"></i></button>
                                                    <button className='mt-4 bg-light text-danger ad-button rounded' onClick={() => removeProducts(product)}><i className="fa-solid fa-circle-minus"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Outlet />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ViewProducts