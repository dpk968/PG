import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import {decrementMobileUnit} from '../Slices/MobileSclice'
import { decrementLaptopUnit } from "../Slices/LaptopSlice";

function Laptop() {
  const laptops = useSelector((state) => state.laptop.laptops);
  const dispatch = useDispatch();

  function buylaptop(id){
    dispatch(decrementLaptopUnit());
    if(laptops[id-1].price > 200000){
      Swal.fire({
        title: `You got a free smartPhone`,
        confirmButtonText: 'OK',
        
    });
      dispatch(decrementMobileUnit());
    }
  };
  return (
    <div>
      <Header />
      <div className="laptop-component">
        {laptops.map((item) => (
          <div key={item.id} className="product-card">
            <div className="laptop-image">
              <img src={item.url} alt="Product Image" />
            </div>
            <div className="product-details">
              <h2 className="product-name">{item.heading.slice(0, 20)}...</h2>
              <div className="product-price">
                <h3>Price: {item.price}</h3>
              </div>
              <div className="product-actions">
                <button
                  className="btn"
                  onClick={() => {
                    buylaptop(item.id);
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Laptop;
