import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import app, { db } from "./fire";
import "./AuthContext";
import SubscriptionPaymentPage from "../view/AfterLogin/SubscriptionPaymentPage";

const SubscriptionStatus = ({ children }) => {
  //TODO: this is for custom tokens dont delete these.
  // await getAuth.currentUser?.getIdToken(true);
  //   const decodedToken = await firebase.auth().currentUser?.getIdTokenResult();
  //   return decodedToken?.claims?.subscriptionStatus ? true : false;
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [Sts, setSts] = useState();
  const Stat = onAuthStateChanged(auth, async (currentUser) => {
    setUser(currentUser);
    const uid = currentUser.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    const Result = docSnap.data().SubscriptionStatus;
    setSts(Result);
  });
  if (Sts === false) {
    return <Navigate to="/SubscriptionPaymentPage"  />;
  }

  return children;
};

export default SubscriptionStatus;
