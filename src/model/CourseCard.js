import React, { useEffect, useState } from "react";
import SelectCourse from "../view/AfterLogin/SelectCourse";
import { Link, useLocation } from "react-router-dom";


import "../Style/CourseCard.css";
export default function CourseCard({ video,techStack,build,image, heading, content,chapters }) {
  return (
    <Link  to="/SelectCourse"
    state={{ video: video,techStack:techStack,build:build, heading: heading, content: content,chapters:chapters }}
    style={{textDecoration:"none"}}
    >
     <div className="TotalCard">
      <div>
        <img src={image} width="330" height="180" className="CourseVideo"></img>
      </div>
      <p className="CourseHeading">{heading}</p>
      <p className="CourseOverview">{content}</p>
    </div>
    </Link>
   
  );
}
