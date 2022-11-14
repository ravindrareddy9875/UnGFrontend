import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Style/LandingPage.css";

function OutNavBar() {
  const [flag1, setflag1] = useState(false);
  const [width, setwidth] = useState();

  useEffect(() => {
    setwidth(window.screen.width);
  }, []);
  console.log(window.screen.width);

  return (
    <div className="navbar">
      {width <= 700 ? (
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgba(0,0,0,255)" }}
        >
          <h1 className="UnGraduation" id="UnGraduation1">
            <span style={{ color: "rgba(23,50,162,255)" }}>Un</span>
            Graduation
          </h1>
        </Link>
      ) : (
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgba(0,0,0,255)" }}
        >
          <h1 className="UnGraduation" id="UnGraduation">
            <span style={{ color: "rgba(23,50,162,255)" }}>Un</span>
            Graduation
          </h1>
        </Link>
      )}

      {width <= 700 ? (
        <ul className="navbar1">
          {/* <li> */}
          <Link to="/PricingPage" className="navbarItems">
            Our Little Pricing
          </Link>
          <Link className="navbarItems">About Us</Link>
          <Link to="/Login" style={{ textDecoration: "none" }}>
            <p className="button1" style={{ marginTop: "20px" }}>
              {" "}
              Login
            </p>
          </Link>
        </ul>
      ) : (
        <ul className="navbar1">
          <Link to="/PricingPage" className="navbarItems">
            Our Little Pricing
          </Link>
          <Link className="navbarItems">About Us</Link>
          <Link
            to="/Login"
            style={{ textDecoration: "none" }}
            className="button1"
          >
            Login
          </Link>
        </ul>
      )}
    </div>
  );
}

export default OutNavBar;
