import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Courses from "../view/AfterLogin/Courses";

export default function NavbarAfter() {
  const [source, setsource] = useState("profile.png");

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        width: "100.5%",
        backgroundColor: "#12181C",
        marginLeft: "0px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "0px",
          marginTop: "-10px",
        }}
      >
        <p
          style={{
            color: "#8685EF",
            fontWeight: "bold",
            paddingLeft: "20px",
            fontSize: "23px",
            paddingTop: "10px",
          }}
        >
          UnG.
        </p>
        <div
          style={{ display: "flex", flexDirection: "row", paddingTop: "15px" }}
        >
          <Link
            style={{
              color: "white",
              marginLeft: "80px",
              fontSize: "20px",
              textDecoration: "none",
              marginTop: "20px",
            }}
            to="/HomePage"
          >
            Academics
          </Link>
          <Link
            style={{
              color: "white",
              marginLeft: "80px",
              fontSize: "20px",
              textDecoration: "none",
              marginTop: "20px",
            }}
            to="/Courses"
          >
            Courses
          </Link>
          <Link
            style={{
              color: "white",
              marginLeft: "80px",
              fontSize: "20px",
              textDecoration: "none",
              marginTop: "20px",
            }}
            to="/PlacementPrep"
          >
            placementPrep
          </Link>
        </div>
<Link to='/Profile' style={{textDecoration:"none"}}>
        <img
          src={source}
          width="30px"
          height="23.96px"
          style={{
            marginRight: "20px",
            paddingTop: "33.61px",
            cursor: "pointer",
          }}
          onMouseOver={() => {
            setsource("21-avatar-flat.gif");
          }}
          onMouseLeave={() => setsource("profile.png")}
        ></img>
        </Link>
      </div>
    </div>
  );
}
