import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom'
import "../App.css";
import { addLoggedinInfo } from '../redux/action/UserAction';

function Header() {
    const data = useSelector(state => state.addUser[0])
    let login = window.localStorage.getItem('Login');
    let admin = window.localStorage.getItem('Admin');
    const cart = useSelector(state => state.cart)
    // let cart = window.localStorage.getItem('Cart');
    let n = 0
    cart.map((item) => n = n + item.quantity)
    // console.log(cart.length)
    // useEffect(() => {
    //     cart.map((item) => n = n + item.quantity)
    // }, [cart])






    return (
        <div className='shadow-sm sticky-top'>
            <div className='container-fluid p-3 bg-dark text-white '>
                <div className='row'>
                    <div className='navbar-expand-sm text-white font-weight-bold rounded col-4'><img src='../images/logo.png' height="30px" width="30px" /> Sunglasses</div>
                    {login || admin ? <div className='col-8 d-flex justify-content-end'> {login ? <Link className="h-btn me-1" to='/cart'>View Cart <i className="fa-solid fa-cart-shopping"></i><span className="badge text-black bg-warning ms-2 badge-pill badge-warning">{n}</span></Link> : null }<Link to='logout' className='h-btn'>LOGOUT</Link> </div> : 
                    <div className='col-8  align-items-center d-flex justify-content-end'>
                        <Link to='login' className='h-btn me-1'>LOGIN</Link>
                        <Link to='register' className='h-btn me-1'>REGISTER</Link>
                    </div>}
                        {/* <Link to='login' className='btn border border-white text-dark me-3 text-white'>LOGIN</Link>
                    <Link to='register' className='btn border border-white text-dark text-white'>REGISTER</Link> */}

                    
                </div>


            </div>
            {/* <div className='contaoiner-fluid d-block bg-warning'>
                <Link to='/' className='text-decoration-none p-2 text-dark d-block'>HOME</Link>
                <Link to='/page2' className='text-decoration-none p-2 text-dark d-block'>page2</Link>
                <Link to='/page3' className='text-decoration-none p-2 text-dark d-block'>page3</Link>
                <Link to='/page4' className='text-decoration-none p-2 text-dark d-block'>page4</Link>
            </div> */}
            {/* <div className="navbar navbar-expand-sm bg-warning navigation-wrap">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/page1'>page1</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/page2'>page2</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/page3'>page3</Link>
                    </li>
                </ul>
            </div> */}

            {admin ? 
             null
             :



            <nav className="navbar navbar-expand-sm nav-wrap bg-warning">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">MyApp</a> */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {login ? <li className="nav-item">
                                <a className="nav-link active" href='#home'>Home</a>
                            </li> : <li className="nav-item">
                                <Link className="nav-link active" to='/'>Home</Link>
                            </li>}
                            <li className="nav-item">
                                <a className="nav-link" href='#counter'>Count</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#about'>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#buy-sunglasses'>Buy Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href='#faq'>FAQ</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav> }

        </div>
    )
}

export default Header