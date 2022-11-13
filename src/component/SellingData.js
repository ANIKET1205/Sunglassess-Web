import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import api from "../api/users";

function SellingData() {
    // const d = useSelector(state => state.selling)
    // const d =  api.get('/payment').catch(err => {console.log(err)});
    // var data = d
    const [initialData,setInitialData] = useState([])
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    // const [BySearch, setBySearch] = useState()

    // console.log(BySearch)
   
    var tAmount = 0
    const retriveData = async () => {
        const response2 = await api.get('/payment').catch(err => {console.log(err)});
        setInitialData(response2.data)
        setData(response2.data)
    }

    const onInputChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const FilterData = () => {
        if(searchTerm === ""){
            setData(initialData)
            return
        }
        const newData = initialData.map((i) => {
            // console.log('HHH',i.Date)
            if (i.Date === searchTerm || i.id === searchTerm ) {
                return i;
            }
        })
        var filtered = newData.filter(function (x) {
            return x !== undefined;
        });
        console.log(newData)
        setData(filtered);
    }











    useEffect(() => {
        retriveData();
        // fetchData();
        // setArrayData();
    }, [])


    return (
        <div>
            <div className='mt-5 mb-5'>
                <div className='h5'>Seacrch data by Date or Order ID</div>
                {/* <input type="radio" value="Date" name="BySearch">Search By Date</input> */}
                {/* <select name="BySearch" id="BySearch">
                    <option value='Date'>Date</option>
                    <option value='customerId'>Cust. Id</option>
                </select> */}
                {/* <input type="radio" value="customerId" name="BySearch">Search By Cust. ID</input> */}
                {/* <input type="radio" value="" name="BySearch"></input> */}
                <input type="search" className='' placeholder="Search By Date" value={searchTerm} onChange={onInputChange}></input>
                <button className='bg-dark text-light border border-light rounded' onClick={FilterData}>Search</button>
            </div>
            <div className='cart'>
                <div className='container-fluid'>
                    <div className='row pt-5 pb-2 head-row'>
                        <div className='col-1'>C ID</div>
                        <div className='col-1'>Order ID</div>
                        <div className='col-2'>Date</div>
                        <div className='col-3'>Product Name</div>
                        <div className='col-2'>Price</div>
                        <div className='col-1'>Quantity</div>
                        <div className='col-2'>Total Price</div>
                    </div>
                    {
                        data.map((data, index) => {
                            // console.log(sArray)
                            return (
                                data.cartData.map((cdata, index) => {
                                    let p = (cdata.price - (cdata.price * 0.15)) * cdata.quantity
                                    tAmount = tAmount + p
                                    return (
                                        <div className='row p-2 content-row' key={index}>
                                            <div className='col-1'>{data.customerId}</div>
                                            <div className='col-1'>{data.id}</div>
                                            <div className='col-2'>{data.Date}</div>
                                            <div className='col-3'>{cdata.name}</div>
                                            <div className='col-2'>{cdata.price - (cdata.price * 0.15)}</div>
                                            <div className='col-1'>{cdata.quantity}</div>
                                            <div className='col-2'>{p}</div>
                                        </div>
                                    )
                                })
                            )
                        })
                    }

                    <div className='row h5 pb-3 btm-row'>
                        <div className='col-10'>Total Amount : </div>
                        <div className='col-2'>{tAmount}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SellingData