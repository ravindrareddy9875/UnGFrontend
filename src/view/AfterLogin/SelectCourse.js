import React, { useEffect, useState } from "react";
import "../../Style/SelectCourse.css";

import { Link, useLocation } from "react-router-dom";
import NavbarAfter from "../../model/NavbarAfter";


export default function SelectCourse() {
  const chapters = useLocation().state?.chapters;
  const video = useLocation().state?.video;
  const heading = useLocation().state?.heading;
  const content = useLocation().state?.content;
  const techStack = useLocation().state?.techStack;
  const build = useLocation().state?.build;
  let count = 0;


  return (
    <div>
      <NavbarAfter />
      <div>
        <p className="Heading1">{heading}</p>
        <p className="Content1">{content}</p>

        <img src="line.png" className="line1"></img>
        <div>

          <iframe width="560" height="315"
            src={`https://www.youtube.com/embed/${video}`}
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen className="video1">

          </iframe>
        </div>

        <img src="line.png" className="line1"></img>
      </div>
      <div>
        <p className="TechStack">TECH STACK</p>
        <p className="TechStacks">{techStack}</p>
        <p className="whatBuild">🦄 What will I build?</p>
        <p className="whatBuild1">{build}</p>

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
                    ChapterName: e,
                    count: count,
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
