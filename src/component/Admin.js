import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import api from "../api/users";
import { setProduct } from '../redux/action/ProductAction';
import { addSellingData } from '../redux/action/SellingAction';

function Admin() {
    const dispatch =useDispatch();
    const retriveProducts = async () => {
        const response = await api.get('/products').catch(err => {console.log(err)});
        const response2 = await api.get('/payment').catch(err => {console.log(err)});
        dispatch(setProduct(response.data))
        console.log('WWWWW',response2.data)
        dispatch(addSellingData(response2.data));
    }

    useEffect(() => {
        retriveProducts();
        // window.location.reload();
    }, [])
    return (
        <div className='container-fluid text-white h3 m-0 '>
            <div className='container-fluid sticky-top'>
            <nav className="navbar navbar-expand-sm nav-wrap bg-warning ">
             <div className="container-fluid">
                 {/* <a className="navbar-brand" href="#">MyApp</a> */}
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                     <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                         <li className="nav-item">
                             <Link className="nav-link active" to='/admin'>Home</Link>
                         </li>
                         <li className="nav-item">
                         <Link className="nav-link" to='add-product'>Add Products</Link>
                         </li>
                         {/* <li className="nav-item">
                             <a className="nav-link" href='#about'>Edit / Remove Product</a>
                         </li> */}
                         <li className="nav-item">
                             <Link className="nav-link" to='view-products'>View Products</Link>
                         </li>
                         <li className="nav-item">
                             <Link className="nav-link" to='Selling-data'>View Selling Data</Link>
                         </li>
                         {/* <li className="nav-item">
                             <a className="nav-link" href='#faq'>FAQ</a>
                         </li> */}
                         

                     </ul>
                 </div>
             </div>
         </nav>
         </div>
         <div className=''>Welcome To Admin Section</div>
         <Outlet />
         {/* <div>
             {add === 0 ? null :}
             
         
         </div> */}
         
        </div>
    )
}

export default Admin