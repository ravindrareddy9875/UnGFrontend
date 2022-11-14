import React, { useEffect, useState } from "react";
import "../../Style/Chapter.css";
import NavbarAfter from "../../model/NavbarAfter";

import { Link, useLocation } from "react-router-dom";

export default function Chapter() {
  const name = useLocation().state?.name;
  const sub = useLocation().state?.sub;
  const name1 = useLocation().state?.semNumber;
  const [subjectName, setsubjectName] = useState(sub);
  const [semNumber, setsemNumber] = useState(name1);

  let count = 0;

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
        <h1 style={{ color: "#8685EF" }}>{subjectName}</h1>
      </div>
      <div className="AllChapters">
        {name.map((e) => {
          count = count + 1;
          return (
            <div id="ChapterBox">
              <div className="ChapterBox">
                <img src="pageIcon.png" className="pageIcon"></img>
                <Link
                  to="/Topic"
                  state={{
                    TopicName: e,
                    count: count,
                    subjectName: subjectName,
                    semNumber: semNumber,
                  }}
                  style={{ textDecoration: "none" }}
                >
                  <p
                    style={{
                      color: "white",
                      textAlign: "center",
                      paddingTop: "50px",
                      fontSize: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    <span style={{ color: "#8685EF" }}>0{count}</span> {e}
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
