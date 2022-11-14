import React, { useState, useEffect } from "react";
import "../../Style/LandingPage.css";
import OutNavBar from "../../model/NavBarBefore";
import { Link } from "react-router-dom";
import Loading from "../../model/Loading";
// import Login from './Login';

export default function LandingPage() {
  const [flag1, setflag1] = useState(false);
  const [width, setwidth] = useState();

  useEffect(() => {
    setwidth(window.screen.width);
  }, []);
  console.log(window.screen.width);

  function Loader() {
    setflag1(true);
  }
  if (flag1) {
    return <Loading type={"spinningBubbles"} color={"red"} />;
  }

  return (
    <div>
      <OutNavBar />

      <div className="MainContent">
        <div className="SubContent">
          <h1 className="text1">First platform to offer both</h1>
          <h1 className="text2">Academic notes & </h1>
          <h1 className="text2">Individually curated </h1>
          <h1 className="text2">placement Preparation</h1>
        </div>
        <div>
          <img className="image" alt="cover pic" src="./pic1.png"></img>
        </div>
      </div>

      <div className="Trail">
        <h1 className="StartLearning">Start Learning Now</h1>
        <Link to="/SignUp" style={{ textDecoration: "none" }}>
          <p className="button2">1 Day Free Trail</p>
        </Link>
      </div>

      {width <= 500 ? (
        <div className="CenterPart">
          <p className="CenterQuestion">
            What you will get from Academic notes ?
          </p>
          <h2 className="MiniHeading">
            Curated notes of their <br></br>current semester
          </h2>
          <p className="Answers">
            Students will get their current semester <br></br> notes unit wise
            for all subjects
          </p>
          <h2 className="MiniHeading">Curated Q/A from each unit</h2>
          <div style={{ lineHeight: "5px", fontFamily: "Sans-serif" }}>
            <p className="Answers">
              We care about last benchers too, that's <br></br> why We provide
              Q/A's from each and <br></br>every unit for all subjects, which
              helps <br></br>them to prepare well for exams, which <br></br>
              every engineering student miss after their 12th class.{" "}
            </p>
          </div>
        </div>
      ) : (
        <div className="CenterPart">
          <p className="CenterQuestion">
            What you will get from Academic notes ?
          </p>
          <h2 className="MiniHeading">
            Curated notes of their current semester
          </h2>
          <p className="Answers">
            Students will get their current semester notes unit wise for all
            subjects
          </p>
          <h2 className="MiniHeading">Curated Q/A from each unit</h2>
          <div style={{ lineHeight: "5px" }}>
            <p className="Answers">
              We care about last benchers too, that's why We provide Q/A's from
              each
            </p>
            <p className="Answers">
              {" "}
              and every unit for all subjects, which helps them to prepare well
              for exams,
            </p>
            <p className="Answers">
              {" "}
              which every engineering student miss after their 12th class.{" "}
            </p>
          </div>
        </div>
      )}

      <div
        style={{ display: "flex", justifyContent: "space-around" }}
        className="MainBottomLeft"
      >
        {width <= 500 ? (
          <div>
            <p className="LetsTalk">
              Lets talk <br></br>
              <span style={{ color: "rgba(23,70,162,255)" }}>
                about placement preparation
              </span>
            </p>
          </div>
        ) : (
          <div>
            <p className="LetsTalk">
              Lets talk{" "}
              <span style={{ color: "rgba(23,70,162,255)" }}>
                about <br></br> placement preparation
              </span>
            </p>
          </div>
        )}

        {width <= 500 ? (
          <div className="BottomRight1">
            <p className="BottomRightLine1">Following learn and test method</p>

            <p className="BottomRightContent1">
              In placement preparation, Students <br></br> must attend test
              after completing each <br></br>topic & if he/she manages to pass
              the <br></br>test then he/she will be forwarded to <br></br>
              another topic and if he/she fail in the <br></br>test then he/she
              must re-attendthe test <br></br>until he/she pass the test.{" "}
            </p>

            <p className="BottomRightLine1">
              We are providing individually <br></br> curated program to achieve{" "}
              <br></br> campus placement easily.
            </p>

            <p className="BottomRightContent1">
              For example if we take a student is in <br></br> 1st year, he/she
              will be offered with <br></br> normal program And if we take a{" "}
              <br></br> student is in 3rd year he/she will be <br></br>allotted
              with intensive program.
            </p>

            <p className="BottomRightContent11">
              <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                Beginner friendly
              </span>{" "}
              <br></br>
            </p>
            <p className="BottomRightContent1">
              {" "}
              because some students don't even have <br></br>prior knowledge on
              basics of programming.<br></br>
              So we will start from scratch in both normal <br></br> &intensive
              programs. So their will be no <br></br> worries on whether they
              are starting in <br></br>1st year or before placements season.
            </p>
          </div>
        ) : (
          <div className="BottomRight1">
            <p className="BottomRightLine1">Following learn and test method</p>

            <p className="BottomRightContent1">
              In placement preparation, Students must attend test after
              completing each
            </p>
            <p className="BottomRightContent1">
              topic & if he/she manages to pass the test then he/she will be
              forwarded to
            </p>
            <p className="BottomRightContent1">
              {" "}
              another topic and if he/she fail in the test then he/she must
              re-attend{" "}
            </p>
            <p className="BottomRightContent1">
              the test until he/she pass the test.{" "}
            </p>

            <p className="BottomRightLine1">
              We are providing individually curated program to achieve campus{" "}
            </p>
            <p className="BottomRightLine1">placement easily.</p>

            <p className="BottomRightContent1">
              For example if we take a student is in 1st year, he/she will be
              offered with
            </p>
            <p className="BottomRightContent1">normal program</p>
            <p className="BottomRightContent1">
              And if we take a student is in 3rd year he/she will be allotted
              with{" "}
            </p>
            <p className="BottomRightContent1">intensive program.</p>

            <p className="BottomRightContent11">
              <span style={{ fontSize: "25px", fontWeight: "bold" }}>
                Beginner friendly
              </span>{" "}
              - because some students don't even have{" "}
            </p>
            <p className="BottomRightContent1">
              prior knowledge on basics of programming.
            </p>
            <p className="BottomRightContent1">
              So we will start from scratch in both normal & intensive programs.
            </p>
            <p className="BottomRightContent1">
              So their will be no worries on whether they are starting in 1st
              year{" "}
            </p>
            <p className="BottomRightContent1"> or before placements season.</p>
          </div>
        )}
      </div>

      <div className="MainBottom2">
        <div className="BottomLeft2">
          <p className="why">WHY UnGraduation ?</p>
        </div>
        {width <= 500 ? (
          <div>
            <p className="BottomRightContent2">
              Tired of searching for notes during<br></br> exams and don’t know
              where to get <br></br>perfect placement preparation ? you{" "}
              <br></br>will get both at{" "}
              <span style={{ color: "yellow" }}>affordable</span> price. You{" "}
              <br></br>need UnGraduation if you are craving -
            </p>
          </div>
        ) : (
          <div className="BottomRight2">
            <p className="BottomRightContent2">
              Tired of searching for notes during exams and don’t
            </p>
            <p className="BottomRightContent2">
              know where to get perfect placement preparation ?
            </p>
            <p className="BottomRightContent2">
              you will get both at{" "}
              <span style={{ color: "yellow" }}>affordable</span> price.
            </p>
            <p className="BottomRightContent2">
              You need UnGraduation if you are craving -
            </p>
          </div>
        )}
      </div>

      <p className="CopyRight">Copyright @ 2022 Ungraduation</p>
    </div>
  );
}
