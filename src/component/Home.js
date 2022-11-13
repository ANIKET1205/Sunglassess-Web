import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { addItem } from '../redux/action/cartAcytion';
import { addLoggedinInfo } from '../redux/action/UserAction';

// import bg1 from '../images/bg1.png';
// import s1 from '../images/s1.png';
// import s2 from '../images/s2.png';
// import s3 from '../images/s3.png';
import api from "../redux/users";





function Home() {
  const data = useSelector(state => state.addUser)
  const cartData = useSelector(state => state.cart)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])
  const retriveProducts = async () => {
    const response = await api.get('/products');
    // console.log('response.data ',response.data)
    // initialData = response.data
    setProducts(response.data)
    // return response.data;
  }
  // retriveProducts();
  let login = window.localStorage.getItem('Login');



  // let login = window.localStorage.getItem('Login');
  // console.log(cartData)


  const addItemToCart = (data) => {
    // const d1 = {'userId':data[0].name , ...data}
    if (login) {
      // console.log("FF",data)
      dispatch(addItem(data));
    }
    else {
      alert("You have to Login your self First...")
      navigate('/login')
    }
    // console.log(data)
    // 
  }





  // useEffect(() => {
  //   // window.location.reload();
  // }, [])
  useEffect(() => {
    // window.location.reload();

    // console.log("LLL", JSON.parse(login))
    let admin = window.localStorage.getItem('Admin');
    if (login) {
      dispatch(addLoggedinInfo(JSON.parse(login)))
    }
    if (admin) {
      navigate('/admin')
    }


    //fetch all product details
    retriveProducts()

    // console.log(initialData)


    // document.addEventListener("DOMContentLoaded",()=>{
    function counter(id, start, end, duration) {
      let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
          current += increment;
          obj.textContent = current;
          if (current === end) {
            clearInterval(timer);
          }
        }, step);
    }
    counter("count1", 0, 400, 3000);
    counter("count2", 100, 1000, 3000);
    counter("count3", 0, 1400, 3000);
    counter("count4", 0, 700, 3000);
    // })
  }, [])

  //To Hide Navigation bar when size is small
  let navBar = document.querySelectorAll('.nav-link');
  let navCollapse = document.querySelector('.navbar-collapse.collapse');
  navBar.forEach(function (a) {
    a.addEventListener("click", function () {
      navCollapse.classList.remove('show')
    })
  })



  // console.log('OOOO', data)
  return (
    <div className='bg-dark text-white'>
      <div className='bg-light text-dark p-3'>
        <div className='container p-2 '>
          Welcome {data[0].name === '' ? <>GUEST</> : data[0].name}
        </div>
      </div>


      <section id="home" className='text-light'>
        <div className='container-fluid px-0  top-banner'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-5 col-md-6'>
                <h1>Don't Live a Littel, Live a Sunglasses.</h1>
                <p>From this Website You can purchase any type of sunglasses with high qulity material.</p>
                <div className='mt-4'>
                  <a className='h-btn' href='#buy-sunglasses'>Order now <i className='fas fa-shopping-basket ps-3' /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="counter">
        <div className='bg-warning counter-section'>
          <div className='container'>
            <div className='row text-center'>
              <div className='col-md-3 mb-lg-0 mb-md-0 mb-5'>
                <h2>
                  <span id="count1"></span>+
                </h2>
                <p>SAVINGS</p>
              </div>
              <div className='col-md-3 mb-lg-0 mb-md-0 mb-5'>
                <h2>
                  <span id="count2"></span>+
                </h2>
                <p>PHOTOS</p>
              </div>
              <div className='col-md-3 mb-lg-0 mb-md-0 mb-5'>
                <h2>
                  <span id="count3"></span>+
                </h2>
                <p>ROCKETS</p>
              </div>
              <div className='col-md-3 mb-lg-0 mb-md-0 mb-5'>
                <h2>
                  <span id="count4"></span>+
                </h2>
                <p>GLOBES</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />



      <section id="about">
        <div className='about-section wrapper'>
          <h1 className='text-warning p-4 mb-2'>About Us</h1>
          <div className='container-fluid'>
            <div className='row align-items-center'>
              <div className='col-lg-7 col-md-12 mb-lg-0 mb-5'>
                <div className='card border-0'>
                  <img src='../images/bg1.png' className="img-fluid" />
                </div>
              </div>
              <div className='col-lg-5 col-md-12 text-sec'>
                <h2>Don't Live a Littel, Live a Sunglasses.</h2>
                <p>From this Website You can purchase any type of sunglasses with high qulity material.</p>
                <button className='h-btn mt-4'>Learn More</button>
              </div>
            </div>
            <div className='container-fluid sunglass-type'>
              <div className='row align-items-center'>
                <div className='col-lg-5 col-md-12 text-sec mb-lg-0 mb-5'>
                  <h2>All Sunglasses are made by our company with best quality raw material.</h2>
                  <p>Don't Live a Littel, Live a Sunglasses. From this Website You can purchase any type of sunglasses with high qulity material. All Sunglasses are made by our company with best quality raw material.</p>
                  <ul className='list-unstyled py-3'>
                    <li>0 Power Sunglasses</li>
                    <li>1 Power Sunglasses</li>
                    <li>2 Power Sunglasses</li>
                  </ul>
                  <button className='h-btn mt-4 '>Learn More</button>
                </div>
                <div className='col-lg-7 col-md-12 mb-md-3'>
                  <div className='card border-0'>
                    <img src='../images/bg1.png' className='img-fluid'></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />

      <section id="story">
        <div className='story-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='text-content'>
                  <h2>All Sunglasses are made by our company with best quality raw material.</h2>
                  <p>Don't Live a Littel, Live a Sunglasses. From this Website You can purchase any type of sunglasses with high qulity material. All Sunglasses are made by our company with best quality raw material.</p>
                  <button className='h-btn mt-3'>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr />



      {/* <section id='buy-sunglasses'>
        <div className='buy-sunglasses wrapper'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='text-content text-center'>
                  <h2>Buy Our Products.</h2>
                  <p>Don't Live a Littel, Live a Sunglasses. From this Website You can purchase any type of sunglasses with high qulity material. All Sunglasses are made by our company with best quality raw material.</p>
                </div>
              </div>
            </div>
            <div className='row pt-5'>
              <div className='col-lg-4 col-md-6 mb-lg-0 mb-5'>
                <div className='card'>
                  <img src='../images/s3.png' className='img-fluid'></img>
                  <div className='pt-3'>
                    <h4>Extra Power Sunglasses</h4>
                    <p>Most Choice</p>
                    <span><i className="fa-solid fa-indian-rupee-sign"></i> 250 <del className='ms-1 me-2'><i className="fa-solid fa-indian-rupee-sign"></i> 450</del></span>
                    <button className='mt-4 h-btn'>Order Now</button>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 mb-lg-0 mb-5'>
                <div className='card'>
                  <img src='../images/s1.png' className='img-fluid'></img>
                  <div className='pt-3'>
                    <h4>Rainbow Colour Sunglasses</h4>
                    <p>Most Choice</p>
                    <span ><i className="fa-solid fa-indian-rupee-sign"></i> 350 <del className='ms-1 me-2'><i className="fa-solid fa-indian-rupee-sign"></i> 650</del></span>
                    <button className='mt-4 h-btn'>Order Now</button>
                  </div>
                </div>
              </div>
              <div className='col-lg-4 col-md-6 mb-lg-0 mb-5'>
                <div className='card'>
                  <img src='../images/s2.png' className='img-fluid'></img>
                  <div className='pt-3'>
                    <h4>Blue Colour Sunglasses</h4>
                    <p>Most Choice</p>
                    <span ><i className="fa-solid fa-indian-rupee-sign"></i> 150 <del className='ms-1 me-2'><i className="fa-solid fa-indian-rupee-sign"></i> 300</del></span>
                    <button className='mt-4 h-btn'>Order Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}




      <section id='buy-sunglasses'>
        <div className='buy-sunglasses wrapper'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='text-content text-center'>
                  <h2>Buy Our Products.</h2>
                  <p>Don't Live a Littel, Live a Sunglasses. From this Website You can purchase any type of sunglasses with high qulity material. All Sunglasses are made by our company with best quality raw material.</p>
                </div>
              </div>
            </div>
            <div className='row pt-5'>
              {
                // console.log('HHH',products)
                products.map((product) => {
                  // console.log(product.image);
                  return (
                    <div key={product.id} className='col-lg-4 col-md-6 mb-lg-4 mb-5'>
                      <div className='card'>
                        <img src={product.image} className='img-fluid'></img>
                        <div className='pt-3'>
                          <h4>{product.name}</h4>
                          <p>{product.description}</p>
                          <span><i className="fa-solid fa-indian-rupee-sign"></i> {parseInt(product.price - (0.15 * product.price))} <del className='ms-1 me-2'><i className="fa-solid fa-indian-rupee-sign"></i> {product.price}</del></span>
                          <button className='mt-4 h-btn' onClick={() => addItemToCart(product)}>Order Now</button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>


      <section id='slider'>
        <div className='wrapper slider-section p-5'>
          <div className='container text-center'>
            <div className='text-center pb-4'>
              <h2>AD Sunglasses</h2>
            </div>
            <div className='row'>
              <div className='col-sm-12 col-lg-10 offset-lg-1'>
                <div id='carouselExampleDark' className='carousel slide' data-bs-ride='carousel'>
                  <div className='carousel-indicators'>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className='active' aria-current='true' aria-label='Slide1'></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-current='true' aria-label='Slide2'></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-current='true' aria-label='Slide3'></button>
                  </div>
                  <div className='carousel-inner'>
                    <div className='carousel-item active'>
                      <div className='carousel-caption'>
                        <img src='../images/s1.png' />
                        <p>This is Rainbow Colored Sunglasses.</p>
                        <h5>Only Rs. 250</h5>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <div className='carousel-caption'>
                        <img src='../images/s2.png' />
                        <p>This is Blue Colored Sunglasses.</p>
                        <h5>Only Rs. 350</h5>
                      </div>
                    </div>
                    <div className='carousel-item'>
                      <div className='carousel-caption'>
                        <img src='../images/s3.png' />
                        <p>This is Black Colored Sunglasses.</p>
                        <h5>Only Rs. 450</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='faq'>
        <div className='faq wrapper'>
          <div className="container">
            <div className='row'>
              <div className='col-sm-12'>
                <div className='text-center pb-4'>
                  <h2>Frequently Asked Qustions</h2>
                </div>
              </div>
            </div>
            <div className='row pt-5'>
              <div className='col-sm-6 mb-4'>
                <h4><span>~</span>Is our sunglasses are really best?</h4>
                <p>Don't Live a Littel, Live a Sunglasses. From this Website You can purchase any type of sunglasses with high qulity material. All Sunglasses are made by our company with best quality raw material.</p>
              </div>
              <div className='col-sm-6 mb-4'>
                <h4><span>~</span>Is our sunglasses are really best?</h4>
                <p>Don't Live a Littel, Live a Sunglasses. From this Website You can purchase any type of sunglasses with high qulity material. All Sunglasses are made by our company with best quality raw material.</p>
              </div>
              <div className='col-sm-6 mb-4'>
                <h4><span>~</span>Is our sunglasses are really best?</h4>
                <p>Don't Live a Littel, Live a Sunglasses. From this Website You can purchase any type of sunglasses with high qulity material. All Sunglasses are made by our company with best quality raw material.</p>
              </div>
              <div className='col-sm-6 mb-4'>
                <h4><span>~</span>Is our sunglasses are really best?</h4>
                <p>Don't Live a Littel, Live a Sunglasses. From this Website You can purchase any type of sunglasses with high qulity material. All Sunglasses are made by our company with best quality raw material.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section id='book-glasses'>
        <div className='book-glasses'>
          <div className='container book-glasses-text'>
            <div className='row text-center'>
              <div className='col-lg-9 col-md-12'>
                <h2>All Types of Glasses Are Available on Our Website.</h2>
              </div>
              <div className='col-lg-3 col-md-12 mt-lg-0 mt-4'>
                <button className='h-btn'>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='newsletter'>
        <div className='newsletter wrapper'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='text-content text-center pb-4'>
                  <h2>Yahhh! Purchase our Premium and get 15% OFF.</h2>
                  <p>Limited Time Offer. Purchase our Premium and get Discount.</p>
                </div>
                <form className='newsletter'>
                  <div className='row'>
                    <div className='col-md-8 col-12'>
                      <input className='form-control' placeholder='Email Address here' name='email' type='email'></input>
                    </div>
                    <div className='col-md-4 col-12'>
                      <button className='h-btn' type='submit'>Subscribe</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>


      <footer id='footer'>
        <div className='footer py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12 text-center'>
                <a className='footer-link' href='#'>Register</a>
                <a className='footer-link' href='#'>Form</a>
                <a className='footer-link' href='#'>Affiliate</a>
                <a className='footer-link' href='#'>FAQ</a>
                <div className='footer-social pt-4 text-center'>
                  <a href='#'><i className="fa-brands fa-facebook-f"></i></a>
                  <a href='#'><i className="fa-brands fa-instagram"></i></a>
                  <a href='#'><i className="fa-brands fa-twitter"></i></a>
                  <a href='#'><i className="fa-brands fa-youtube"></i></a>
                  <a href='#'><i className="fa-brands fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className='col-md-12'>
                <div className='footer-copy'>
                  <div className='copy-right text-center pt-5'>
                    <p className='text-light'>© 2021. Foodies. All rights reserved.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home