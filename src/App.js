import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Home from './component/Home';
import Register from './component/Register';
import { Provider } from 'react-redux';
import store from './redux/Store'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addLoggedinInfo } from './redux/action/UserAction';
import Logout from './component/Logout';
import ForgotPass from './component/ForgotPass';
import Cart from './component/Cart';
import Admin from './component/Admin';
import AddItems from './component/AddItems';
import ViewProducts from './component/ViewProducts';
import EditProduct from './component/EditProduct';
import Payment from './component/Payment';
import SellingData from './component/SellingData';
import PrintBill from './component/PrintBill';

function App() {


  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path='/' element={<Home />}>
              {/* <Route path='/#counter' element={<Login />} /> */}
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/forgot-pass' element={<ForgotPass />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/print' element={<PrintBill />} />
            <Route path='/admin/' element={<Admin />} >
              <Route path='add-product' element={<AddItems />} />
              <Route path='view-products/' element={<ViewProducts />} ></Route>
              <Route path='edit-product/:id' element={<EditProduct />} />
              <Route path='selling-data' element={<SellingData />} />
            </Route>

          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
