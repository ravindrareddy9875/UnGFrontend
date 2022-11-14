import React, { useEffect, useState } from "react";
import "../../Style/SelectCourse.css";

import { Link, useLocation } from "react-router-dom";
import NavbarAfter from "../../model/NavbarAfter";


export default function PlacementPrep() {
   
    const chapters=["Chapter1","Chapter2","Chapter3","Chapter4","Chapter1"]
   
    let count = 0;


    return (
        <div>
            <NavbarAfter />
            <div>
                <p className="Heading1" style={{fontSize:"29px",fontWeight:"800",paddingTop:"30px",marginBottom:"-20px"}}> what is the process to get a job  ? watch this video....</p>
               

                <img src="line.png" className="line1"></img>
                <div>

                    <video src="video.mp4" style={{marginLeft:"27%"}} width="800"></video>
                </div>

                <img src="line.png" className="line1"></img>
            </div>
            <div>
                    <p className="TechStack" style={{marginLeft:"60px"}}>TECH STACK</p>
                    <p className="TechStacks" style={{marginLeft:"60px"}}>Java</p>
            
            </div>
            <img src="line.png" className="line1"></img>     
            <p className="Chapters">Chapters</p>

            <div className="AllChapters">
        {chapters.map((e) => {
          count = count + 1;
          return (
            <div id="ChapterBox">
              <div className="ChapterBox">
                <img src="pageIcon.png" className="pageIcon"></img>
                <Link
                  to="/CourseTopic"
                  state={{
                    // ChapterName: e,
                    // count: count,
                    // subjectName: e,
                    //  semNumber: ,
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
