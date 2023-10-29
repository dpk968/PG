import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link } from "react-router-dom";

function Home() {
    // document.body.style.overflow = "hidden";
  return (
    <div className='home'>
        <Header/>
      <div className="header">
        <h1 className="animate__animated animate__fadeInDown">Welcome to our Electronic Store</h1>
        <p className="animate__animated animate__fadeInUp">Browse our selection of laptops and mobiles</p>
    </div>
    
    <section className="products">
        <div className="product animate__animated animate__fadeInLeft">
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/6/5/g/-original-imagtke7erkzwzfp.jpeg?q=70" alt="Laptop"/>
            <h2>Laptop</h2>
            <p>Powerful laptops for work and play</p>
            <Link to="laptop">View Laptops</Link>

        </div>
        <div className="product animate__animated animate__fadeInRight">
            <img src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/v/8/-original-imaghx9qudmydgc4.jpeg?q=70" alt="Mobile"/>
            <h2>Mobile</h2>
            <p>Latest mobile phones with amazing features</p>
            <Link to="mobile">View Mobiles</Link>
        </div>
    </section>
    <Footer/>
    </div>
  );
}

export default Home;
