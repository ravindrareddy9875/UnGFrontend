import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import { signOut } from "firebase/auth";
import NavbarAfter from "../../model/NavbarAfter";
import Semester from "./Semester";
import Subject from "./Subject";

import "../../Style/HomePage.css";

export default function HomePage() {
  const auth = getAuth();
  const [width, setwidth] = useState();

  const logout = () => {
    return signOut(auth);
  };
  useEffect(() => {
    setwidth(window.screen.width);
  }, []);

  const sub1 = ["Java", "Python", "DBMS"];
  const sub2 = ["DAA", "Software", "Operting"];
  const sub3 = ["DSA", "C++", "English", "FLAT", "calculus and algebra"];
  const sub4 = ["jsjah", "lhdjiaj"];

  return (
    <div className="Full_Page">
      <NavbarAfter />

      <div
        style={{
          position: "fixed",
          textAlign: "center",
          top: "0",
          marginTop: "60px",
          backgroundColor: "#12181C",
          width: "100%",
          paddingTop: "50px",
        }}
      >
        <h1 style={{ color: "#F0CD0A" }}>CSE , GVPCE(A) College Academics</h1>
      </div>
      <div style={{ marginTop: "190px", paddingTop: "50px" }}>
        <Semester number="1" name={sub1} />
        <Semester number="2" name={sub2} />
        <Semester number="3" name={sub3} />
        <Semester number="4" name={sub4} />
        {/* <Subject/> */}
      </div>
    </div>
  );
}
