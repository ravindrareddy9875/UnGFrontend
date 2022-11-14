import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../Style/PricingPage.css";
import OutNavBar from "../../model/NavBarBefore";
import SignUp from "./SignUp";

export default function PricingPage() {
  const [width, setwidth] = useState();
  const [flag1, setflag1] = useState(false);
  const [flag2, setflag2] = useState(false);

  useEffect(() => {
    setwidth(window.screen.width);
  }, []);
  console.log(window.screen.width);

  function navigate() {
    setflag1(true);
  }
  if (flag1) {
    return <SignUp />;
  }

  return (
    <div className="App">
      <OutNavBar />

      <div className="MainContent1">
        <p className="firstHeading">
          Sensational
          <span style={{ color: "rgba(23,70,162,255)" }}> program</span>,
          Sensible <span style={{ color: "rgba(23,70,162,255)" }}>price</span>
        </p>
      </div>

      <div className="Subscription">
        <div className="firstBox">
          <p className="timePeriod">6 months subscription</p>
          <p className="question">What You'll Get</p>
          <p className="options">Access to entire academic notes </p>
          <p className="options">Access to placement preparation</p>
          <p className="options">1 mock interview/month</p>
          <p className="line">
            -------------------------------------------------------
          </p>
          <p className="pricing">
            <span id="Amount">₹ 40</span>/month/billed 6 months
          </p>
        </div>

        <div className="secondBox">
          <p className="timePeriod">1 year subscription</p>
          <p className="question">What You'll Get</p>
          <p className="options">Access to entire academic notes </p>
          <p className="options">Access to placement preparation</p>
          <p className="options">1 mock interview/month</p>
          <p className="line">
            -------------------------------------------------------
          </p>
          <p className="pricing">
            <span id="Amount">₹ 30</span>/month/billed yearly
          </p>
          <form>
            <script
              src="https://cdn.razorpay.com/static/widget/subscription-button.js"
              data-subscription_button_id="pl_KbWgTy93GwFnqe"
              data-button_theme="brand-color"
              async
            >
              {" "}
            </script>{" "}
          </form>
        </div>

        <div className="thirdBox">
          <p className="timePeriod">1 month subscription</p>
          <p className="question">What You'll Get</p>
          <p className="options">Access to entire academic notes </p>
          <p className="options">Access to placement preparation</p>
          <p className="options">1 mock interview/month</p>
          <p className="line">
            -------------------------------------------------------
          </p>
          <p className="pricing">
            <span id="Amount">₹ 50</span>/month/billed 1 month
          </p>
        </div>
      </div>

      <div className="BottomLast">
        <p className="freeTrail">
          Pay after you like it, try it out for 1 day -{" "}
        </p>
        <Link to="/SignUp" style={{ textDecoration: "none" }}>
          <p className="freeTrailButton">1 Day Free Trail</p>
        </Link>
      </div>

      <p className="CopyRight1">Copyright @ 2022 Ungraduation</p>
    </div>
  );
}
