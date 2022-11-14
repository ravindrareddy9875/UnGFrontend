import React, { useEffect, useState } from "react";
import "../../Style/Semester.css";

import { Link } from "react-router-dom";
import NavbarAfter from "../../model/NavbarAfter";
import "../../Style/Courses.css";
import CourseCard from "../../model/CourseCard";
export default function Courses() {
  const AllChapters={
    sub1:["Chapter1","Chapter2","Chapter3","Chapter4","Chapter5"],
    sub2:["Chapter7","Chapter8","Chapter3","Chapter4","Chapter5"]
  }
  return (
    <div>
      <NavbarAfter />
      <div className="MainCourse">
        <div className="videoPart">
          <p className="StartLine">Watch this video before you scroll</p>
          <video
            src="video.mp4"
            className="video"
            width={750}
            height={450}
            controls
            loop
          />
        </div>
        <img className="Endline" src="line.png"></img>

        <h1
          style={{
            color: "white",
            textAlign: "center",
            paddingTop: "90px",
          }}
        >
          Courses
        </h1>

        <div className="CourseCards">
          <div style={{display:"flex",flexDirection:"row"}}>
          <CourseCard
            video="Q85LBtBdi0U"
            techStack="react,java"
            build="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R b"
            image="pic1.png"
            heading="COURSE HEADING FRF RFR  FRFRFR"
            content="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R"
            chapters={AllChapters.sub1}
          />
          <CourseCard
           video="Q85LBtBdi0U"
           techStack="react,java"
           build="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R b"
            image="pic2.png"
            heading="COURSE HEADING FRF RFR  FRFRFR"
            content="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R"
            chapters={AllChapters.sub1}
           
          />
          <CourseCard
           video="Q85LBtBdi0U"
           techStack="react,java"
           build="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R b"
            image="profile.png"
            heading="COURSE HEADING FRF RFR  FRFRFR"
            content="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R"
            chapters={AllChapters.sub1}
          />
          </div>

          <div style={{display:"flex",flexDirection:"row"}}>
          <CourseCard
           video="Q85LBtBdi0U"
           techStack="react,java"
           build="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R b"
            image="featured.png"
            heading="COURSE HEADING FRF RFR  FRFRFR"
            content="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R"
            chapters={AllChapters.sub1}
          />
          <CourseCard
           video="Q85LBtBdi0U"
           techStack="react,java"
           build="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R b"
            image="featured.png"
            heading="COURSE HEADING FRF RFR  FRFRFR"
            content="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R"
            chapters={AllChapters.sub1}
          />
          <CourseCard
           video="Q85LBtBdi0U"
           techStack="react,java"
           build="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R b"
            image="featured.png"
            heading="COURSE HEADING FRF RFR  FRFRFR"
            content="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R"
            chapters={AllChapters.sub1}
          />
          </div>

          <div style={{display:"flex",flexDirection:"row"}}>
          <CourseCard
           video="Q85LBtBdi0U"
           techStack="react,java"
           build="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R b"
            image="featured.png"
            heading="COURSE HEADING FRF RFR  FRFRFR"
            content="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R"
            chapters={AllChapters.sub1}
          />
           <CourseCard
           video="Q85LBtBdi0U"
           techStack="react,java"
           build="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R b"
            image="featured.png"
            heading="COURSE HEADING FRF RFR  FRFRFR"
            content="FROM WHAT IS THAT TO WHAT IS THIS FVV VFVF FRFR FRFR FR FR F R FR F R F RFRFR RFRFRF RFRF RFR FRFR FR F R"
            chapters={AllChapters.sub1}
          />
          </div>

        </div>
      </div>
    </div>
  );
}
