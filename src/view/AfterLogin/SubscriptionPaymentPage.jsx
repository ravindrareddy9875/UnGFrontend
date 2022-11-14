import React, { useEffect, useState } from "react";
import "../../Style/SignUp.css";
import "../../Style/SubscriptionPaymentPage.css";
import { signOut } from "firebase/auth";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Controller/fire";

export default function SubscriptionPaymentPage() {
  const [width, setwidth] = useState();
  const [flag1, setflag1] = useState(false);
  const [flag2, setflag2] = useState(false);
  const [user, setUser] = useState({});
  const [username, UserName] = useState();
  const auth = getAuth();

  const Stat = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);
    const uid = currentUser.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const Name = docSnap.data().FullName;
    UserName(Name);
  });

  useEffect(() => {
    const rzpPaymentForm1 = document.getElementById("rzp_payment_form1");
    const rzpPaymentForm2 = document.getElementById("rzp_payment_form2");
    const rzpPaymentForm3 = document.getElementById("rzp_payment_form3");

    if (!rzpPaymentForm3.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_KbWgTy93GwFnqe";

      rzpPaymentForm3.appendChild(script);
    }
    if (!rzpPaymentForm2.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_KbWgTy93GwFnqe";

      rzpPaymentForm2.appendChild(script);
    }
    if (!rzpPaymentForm1.hasChildNodes()) {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/payment-button.js";
      script.async = true;
      script.dataset.payment_button_id = "pl_KbWgTy93GwFnqe";

      rzpPaymentForm1.appendChild(script);
    }
  });

  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    setwidth(window.screen.width);
  }, []);
  console.log(window.screen.width);

  function navigate() {
    setflag1(true);
  }

  return (
    <div style={{ backgroundColor: "#12181C" }} className="Complete">
      <div className="Header9">
        <p className="Logout" onClick={logout}>
          LOGOUT
        </p>
        <p className="firstHeading1">
          Hi , {username} please choose a subscription to get access to the
          content
        </p>
      </div>
      <div className="Subscription1">
        <div className="firstBox1">
          <p className="timePeriod1">6 months subscription</p>
          <p className="question1">What You'll Get</p>
          <p className="options1">Access to entire academic notes </p>
          <p className="options1">Access to placement preparation</p>
          <p className="options1">1 mock interview/month</p>
          <p className="line1">
            -------------------------------------------------------
          </p>

          <p className="pricing1">
            <span id="Amount1">₹ 40</span>/month/billed 6 months
          </p>

          <form id="rzp_payment_form2" className="chooseButton1"></form>
        </div>

        <div className="secondBox1">
          <p className="timePeriod1">1 year subscription</p>
          <p className="question1">What You'll Get</p>
          <p className="options1">Access to entire academic notes </p>
          <p className="options1">Access to placement preparation</p>
          <p className="options1">1 mock interview/month</p>
          <p className="line1">
            -------------------------------------------------------
          </p>
          <p className="pricing1">
            <span id="Amount1">₹ 30</span>/month/billed yearly
          </p>
          <form id="rzp_payment_form1" className="chooseButton2"></form>
        </div>

        <div className="thirdBox1">
          <p className="timePeriod1">1 month subscription</p>
          <p className="question1">What You'll Get</p>
          <p className="options1">Access to entire academic notes </p>
          <p className="options1">Access to placement preparation</p>
          <p className="options1">1 mock interview/month</p>
          <p className="line1">
            -------------------------------------------------------
          </p>
          <p className="pricing1">
            <span id="Amount1">₹ 50</span>/month/billed 1 month
          </p>
          <form id="rzp_payment_form3" className="chooseButton1"></form>
        </div>
      </div>
    </div>
  );
}
