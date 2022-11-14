import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "./AuthContext";
import { createContext, useContext, useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import SubscriptionStatus from "./SubscriptionStatus";
import "../view/BeforeLogin/PricingPage";
import { async } from "@firebase/util";
// import SubscriptionValidator from "./SubscriptionValidator";

const ProtectedRoute = ({ children }) => {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
