import React, { useEffect, useState } from "react";
import "../../Style/Subject.css";
import NavbarAfter from "../../model/NavbarAfter";
import { Link, useLocation } from "react-router-dom";

export default function Subject() {
  const name1 = useLocation().state?.name;
  const name2 = useLocation().state?.semNumber;
  const [sub, setSub] = useState(name1);
  const [semNumber, setsemNumber] = useState(name2);

  const allChapters = {
    Java: ["cp1", "cp2", "cp3", "cp4", "cp5"],
    DBMS: ["cp6", "cp7", "cp8", "cp9", "cp10"],
  };

  return (
    <div>
      <NavbarAfter />
      <div
        style={{
          position: "fixed",
          top: "0",
          marginTop: "60px",
          paddingLeft: "50%",
          backgroundColor: "#12181C",
          width: "100%",
          marginLeft: "-10px",
          paddingTop: "50px",
        }}
      >
        <h1 style={{ color: "#F0CD0A" }}>{sub}</h1>
      </div>

      <div className="Main_Content">
        <Link
          to="/Chapter"
          state={{ name: allChapters[sub], sub: sub, semNumber: semNumber }}
          style={{ textDecoration: "none" }}
        >
          <div className="Sub_Content">
            <p className="TextHead">Notes with Reference video’s</p>
            <p className="TextTail">With Step-by-step guidence </p>
          </div>
        </Link>

        <Link>
          <div className="Sub_Content">
            <p className="TextHead">Curated Questions & Answers</p>
            <p className="TextTail">Prepared on basis of previous papers</p>
          </div>
        </Link>
      </div>

      <div className="Sub_Content2">
        <p className="LastText" style={{ paddingTop: "50px" }}>
          In{" "}
          <span style={{ color: "#EAB441" }}>
            "Notes with Reference video’s"
          </span>
          you will get notes topic wise with an explanation video (reference
          from <br></br>youtube & other resources) for each and every topic
          individually.{" "}
        </p>
        <p className="LastText" style={{ paddingBottom: "140px" }}>
          In{" "}
          <span style={{ color: "#EAB441" }}>
            "Curated Questions & Answers"{" "}
          </span>
          you will get Question and answers which were curated on the basis of{" "}
          <br></br>student outcomes & previous year question papers .{" "}
        </p>
      </div>
    </div>
  );
}
