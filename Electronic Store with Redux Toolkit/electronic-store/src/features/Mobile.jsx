import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux/es/hooks/useSelector";
import {decrementMobileUnit} from '../Slices/MobileSclice'
import { useDispatch } from "react-redux";

function Mobile() {
    document.body.style.scroll = "true";
    const mobiles = useSelector((state) => state.mobile.mobiles);
    const dispatch = useDispatch()

    function buyPhone(id){
        dispatch(decrementMobileUnit());
        
    }

  return (
    <div>
      <Header />
      <div className="mobile-component">
        
        {
          mobiles.map((item) => (
            
              <div key={item.id} className="product-card">
            <div className="product-image">
              <img
                src={item.url}
                alt="Product Image"
              />
            </div>
            <div className="product-details">
              <h2 className="product-name">
                {item.heading}
              </h2>
              <div className="product-price"><h3>Price: {item.price}</h3></div>
              <div className="product-actions">
                <button className="btn" onClick={() => {buyPhone(item.id)}}>Buy Now</button>
              </div>
            </div>
          </div>
          ))
        }

      
        
        
      </div>
    </div>
  );
}

export default Mobile;
