import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { addTotalAmount, clearCart, removeItem } from '../redux/action/cartAcytion';

function Cart() {
    const cartData = useSelector(state => state.cart)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log('cart', cartData)
    var pAmount = 0
    const remove = (item) => {
        dispatch(removeItem(item))
    }
    const confirmation =()=>{
        if(pAmount === 0){
            alert("Your Cart is Empty");
            navigate('/')
            return;
        }
        window.localStorage.setItem('TotalAmount',pAmount)
        navigate('/payment')
    }
    return (
        <div>
            <div className='cart'>
                <div className='container-fluid'>
                    <div className='row pt-5 pb-2 head-row'>
                        <div className='col-1'>Index</div>
                        <div className='col-3'>Name</div>
                        <div className='col-2'>Price</div>
                        <div className='col-2'>Quantity</div>
                        <div className='col-2'>Total Price</div>
                    </div>
                    {
                        cartData.map((item, index) => {
                            let p1 = parseInt(item.price - (0.15 * item.price))
                            // console.log(item.quantity * item.price)
                            let total = p1 * Number(item.quantity)
                            pAmount = pAmount + total
                            return (
                                <div className='row p-2 content-row' key={index}>
                                    <div className='col-1'>{index + 1}</div>
                                    <div className='col-3'>{item.name}</div>
                                    <div className='col-2'>{p1}</div>
                                    <div className='col-2'>{item.quantity}</div>
                                    <div className='col-2'>{total}</div>
                                    <div className='col-2'>
                                        <button className='h-btn' onClick={() => remove(item)}><i className="fa-solid fa-circle-minus"></i></button>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className='row h5 pb-3 btm-row'>
                        <div className='col-8'>Total Payable Amount : </div>
                        <div className='col-2'>{pAmount}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='row btn-row'>
                    <div className='col-xs-12 col-md-4 mb-lg-0 mb-3'>
                        <button className='h-btn' onClick={() => dispatch(clearCart())}>Clear Cart</button>
                    </div>
                    <div className='col-xs-12 col-md-4 mb-lg-0 mb-3'>
                        <Link className='h-btn' to='/'>Back To Home</Link>
                    </div>
                    <div className='col-xs-12 col-md-4 mb-lg-0 mb-3'>
                        <button className='h-btn c-ord' onClick={confirmation}>Confirm Order</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Cart