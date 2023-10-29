import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Home() {
  const { user } = useAuth();
  return (
    <>
      <Header />
      <div className="landing-page">
        <div className="left-side">
          <img
            src="https://amincodes.com/html/flex-it/assets/images/about/3.png"
            height="300px"
            alt=""
          />
        </div>
        <div className="right-side">
          <h1>Welcome to Our Website</h1>
          <h2>"Your Quotation Here"</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Link to="/login">
            <button>Get Started</button>
          </Link>
        </div>
      </div>
      {/* {(user != null?<h1>{user.username}</h1>:<h1>Please Login in</h1>)} */}
    </>
  );
}
