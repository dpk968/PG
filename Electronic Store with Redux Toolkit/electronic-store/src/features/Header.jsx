import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchContent } from "../Slices/UserSlice";

function Header() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchContent())
  },[dispatch]);

    const laptopsUnits = useSelector((state) => state.laptop.laptopsUnits);
    const mobileUnits = useSelector((state) => state.mobile.mobileUnits);
  return (
    <>
      <header>
        <div className="logo">
            <img src=""/>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/laptop">Laptop {laptopsUnits}</Link>
            </li>
            <li>
              <Link to="/mobile">Mobile {mobileUnits}</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
