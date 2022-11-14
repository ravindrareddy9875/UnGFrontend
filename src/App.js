import React from "react";
import { Helmet } from "react-helmet";

import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./Controller/AuthContext";
import ProtectedRoute from "././Controller/ProtectedRoute";
import LandingPage from "./view/BeforeLogin/LandingPage";
import Login from "./view/BeforeLogin/Login";
import PricingPage from "./view/BeforeLogin/PricingPage";
import SignUp from "./view/BeforeLogin/SignUp";
import HomePage from "./view/AfterLogin/Home";
import NavbarAfter from "./model/NavbarAfter";
import Subject from "./view/AfterLogin/Subject";
import Semester from "./view/AfterLogin/Semester";
import Chapter from "./view/AfterLogin/Chapter";
import Topic from "./view/AfterLogin/Topic";
import Courses from "./view/AfterLogin/Courses";
import CourseCard from "./model/CourseCard";
import SelectCourse from "./view/AfterLogin/SelectCourse";
import CourseTopic from "./view/AfterLogin/CourseTopic";
import PlacementPrep from "./view/AfterLogin/PlacementPrep";
import Profile from "./view/AfterLogin/Profile";
import SubscriptionStatus from "./Controller/SubscriptionStatus";
import SubscriptionPaymentPage from "./view/AfterLogin/SubscriptionPaymentPage";
import EmailVerify from "./view/BeforeLogin/EmailVerify";
function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>UnGraduation</title>
        <meta
          name="UnGraduation"
          content="First platform to offer both Academics & placement preparation at affordable cost"
        />
      </Helmet>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/PricingPage" element={<PricingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path='/SelectCourse' element={<SelectCourse/>}/>
          <Route path='/CourseTopic' element={<CourseTopic/>}/>
          <Route path='/PlacementPrep' element={<PlacementPrep/>}/>
          <Route path='/Profile' element={<Profile/>}/>
          <Route
            path="/Subject"
            element={
              <ProtectedRoute>
                {" "}
                <Subject />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Semester"
            element={
              <ProtectedRoute>
                {" "}
                <Semester />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Chapter"
            element={
              <ProtectedRoute>
                {" "}
                <Chapter />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Topic"
            element={
              <ProtectedRoute>
                {" "}
                <Topic />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Courses"
            element={
              <ProtectedRoute>
                {" "}
                <Courses />
              </ProtectedRoute>
            }
          />
          <Route
            path="/HomePage"
            element={
              <ProtectedRoute>
                {" "}
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/SubscriptionPaymentPage"
            element={
              <ProtectedRoute>
                <SubscriptionPaymentPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
    // <EmailVerify/>
  );
}

export default App;
