import React, { useEffect, useState } from "react";
import "../../Style/SignUp.css";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../Controller/AuthContext";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import app, { db } from "../../Controller/fire";
import Loading from "../../model/Loading";
// import { useState } from "react";

function SignUp() {
  const [width, setwidth] = useState();
  const auth = getAuth(app);
  const navigate = useNavigate();
  const { OnlineChange } = UserAuth();
  const [email, setEmail] = useState("");
  const [Fname, setName] = useState("");
  const [College, setCollege] = useState("");
  const [Semester, setSemester] = useState("");
  const [Group, setBranch] = useState("");
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [error2, setError2] = useState(false);
  const [error3, setError3] = useState(false);

  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setwidth(window.screen.width);
    // setLoading(true)
    // setTimeout(() => {
    // setLoading(false)

    // }, 2000)
  }, []);

  if (loading) {
    return <Loading type={"bubbles"} color={"blue"} />;
  }

  const signUp = (e) => {
    e.preventDefault();
    if (
      email.length == 0 ||
      Fname.length == 0 ||
      College.length == 0 ||
      Semester.length == 0 ||
      Group.length == 0 ||
      password.length == 0 ||
      repassword.length == 0 ||
      repassword <= 7 ||
      password <= 7
    ) {
      setError(true);
    }
    if (!email.includes("@gmail.com")) {
      setError1(true);
    }

    if (email.includes("@gmail.com")) {
      setError1(false);
    }

    if (
      email.length > 10 &&
      Fname.length !== 0 &&
      College.length !== 0 &&
      Semester.length !== 0 &&
      Group.length !== 0 &&
      password.length >= 8 &&
      password === repassword &&
      email.includes("@gmail.com")
    ) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          const user = userCredential.user;
          try {
            const docRef = doc(db, "users", user.uid);
            await setDoc(docRef, {
              FullName: Fname,
              email: email,
              College: College,
              Group: Group,
              Semester: Semester,
              FreeTrail: true,
              SubscriptionStatus: true,
            });
          } catch (e) {
            setLoading(false);
            console.error("Error adding document: ", e);
          }
          setLoading(false);
          navigate("/HomePage");
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          alert(errorCode);
        });
    }
  };

  return (
    <div>
      <div className="FullPage">
        <Link
          to="/"
          style={{ textDecoration: "none", color: "rgba(0,0,0,255)" }}
        >
          <h1 className="UnGraduation2">
            <span style={{ color: "rgba(23,50,162,255)" }}>Un</span>
            Graduation
          </h1>
        </Link>

        <div className="MainPart">
          <div>
            {width >= 500 ? (
              <img
                src="./High School-bro 1.png"
                style={{ marginTop: "-20px" }}
              ></img>
            ) : null}
            {width <= 500 ? (
              <div>
                <p className="TipHeading">
                  <span style={{ color: "rgba(23,50,162,255)" }}>TIP</span> for
                  selecting your{" "}
                  <span style={{ color: "rgba(23,50,162,255)" }}>college</span>
                </p>

                <p className="ActualTip">
                  You will find your college name, if <br></br>your college is a
                  university (or) <br></br> Autonomous. And if your college is{" "}
                  <br></br>affiliated to some university (it shouldn’t <br></br>{" "}
                  be autonomous) you can select that<br></br> affiliated
                  university as your college <br></br> and can proceed further.
                  If you don't<br></br> find your college name or affiliated{" "}
                  <br></br> university name i.e we are not yet ;<br></br>
                  initialized our services in your college.<br></br> So please
                  be patient we will serve soon.
                </p>
              </div>
            ) : (
              <div>
                <p className="TipHeading">
                  <span style={{ color: "rgba(23,50,162,255)" }}>TIP</span> for
                  selecting your{" "}
                  <span style={{ color: "rgba(23,50,162,255)" }}>college</span>
                </p>

                <p className="ActualTip">
                  You will find your college name, if your college is a{" "}
                  <br></br>
                  university (or) Autonomous.<br></br>
                  And if your college is affiliated to some university <br></br>
                  (it shouldn’t be autonomous) you can select that <br></br>
                  affiliated university as your college and can<br></br> proceed
                  further.<br></br>
                  If you don’t find your college name or affiliated<br></br>{" "}
                  university name i.e; we are not yet initialized our <br></br>
                  services in your college, So please be patient we <br></br>
                  will serve soon.
                </p>
              </div>
            )}

            {width >= 500 ? (
              <p className="SignUpCopyRight">Copyright @ 2022 Ungraduation </p>
            ) : null}
          </div>

          <div className="SignUpPart">
            {width <= 500 ? (
              <div>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <h1 className="BackArrow">&larr;</h1>
                </Link>
                <p className="CreateAccount">Create Account</p>
              </div>
            ) : (
              <div className="SignUpHeader">
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  <h1 className="BackArrow">&larr;</h1>
                </Link>

                <p className="CreateAccount">Create Account</p>
              </div>
            )}

            <input
              placeholder="Full Name"
              className="inputs"
              style={{ borderBottomColor: "rgb(150,150,150)" }}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {error && Fname.length === 0 ? (
              <p className="ErrorMessage">*Invalid name</p>
            ) : null}

            <input
              type={"email"}
              placeholder="Email"
              className="inputs"
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderBottomColor: "rgb(150,150,150)" }}
            ></input>

            {(error && email.length === 0) || error1 ? (
              <p className="ErrorMessage">*Invalid email</p>
            ) : null}

            <div className="SelectCollege">
              <label for="colleges" className="CollegeLabel">
                Select college
              </label>
              <select
                name="colleges"
                id="colleges"
                onChange={(e) => setCollege(e.target.value)}
              >
                <option value="" selected></option>
                <option value="GVP">GVP</option>
                <option value="Gvp(Women)">Gvp(Women)</option>
              </select>
            </div>

            {(error && College.length === 0) || error1 ? (
              <p className="ErrorMessage">*please select the college</p>
            ) : null}

            {width >= 500 ? (
              <p className="note">
                NOTE : if you don’t find your college (or) affiliated university
                name don’t worry, comeback later
              </p>
            ) : null}

            <div className="SelectBranch">
              <label for="Branch" className="BranchLabel">
                Select Branch
              </label>
              <select
                name="semester"
                id="semester"
                onChange={(e) => setBranch(e.target.value)}
              >
                <option value="" selected></option>
                <option value="CSE">CSE</option>
                <option value="CSM">CSM</option>
                <option value="CSD">CSD</option>
                <option value="ECE">ECE</option>
                <option value="EEE">EEE</option>
                <option value="CIVIL">CIVIL</option>
                <option value="CHEMICAL">CHEMICAL</option>
                <option value="MECHANICAL">MECHANICAL</option>
              </select>
            </div>

            {(error && Group.length === 0) || error1 ? (
              <p className="ErrorMessage">*please select the Group</p>
            ) : null}

            <div className="SelectSemester">
              <label for="semester" className="SemesterLabel">
                Current semester
              </label>
              <select
                name="semester"
                id="semester"
                onChange={(e) => {
                  setSemester(e.target.value);
                  console.log(e.target.value);
                }}
              >
                <option value="" selected></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>

            {(error && Semester.length === 0) || error1 ? (
              <p className="ErrorMessage">*please select the Semester</p>
            ) : null}

            <input
              placeholder="Password"
              className="inputs"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderBottomColor: "rgb(150,150,150)" }}
            ></input>

            {error && password.length < 8 ? (
              <p className="ErrorMessage">*Password is too short </p>
            ) : null}

            <input
              placeholder="Re-enter Password"
              className="inputs"
              type="password"
              onChange={(e) => setRePassword(e.target.value)}
              style={{ borderBottomColor: "rgb(150,150,150)" }}
            ></input>

            {error && password !== repassword ? (
              <p className="ErrorMessage">
                *Re-entered password should be same as password{" "}
              </p>
            ) : null}

            {width <= 500 ? (
              <p className="note">
                NOTE : If you don’t find your college <br></br>(or) affiliated
                university name don’t <br></br> worry, comeback later
              </p>
            ) : null}
            {width <= 500 ? (
              <p className="terms">
                By starting, you will accept<br></br> our terms & conditions
              </p>
            ) : (
              <p className="terms">
                By starting, you will accept our terms & conditions
              </p>
            )}
            <p className="Day1FreeTrailButton" onClick={signUp}>
              Start 1 day free trail
            </p>
            <p className="HaveAnAccount">
              Already have an account?{" "}
              <Link to="/Login" style={{ textDecoration: "none" }}>
                <span
                  style={{
                    color: "rgba(23,70,162,255)",
                  }}
                >
                  Log In
                </span>
              </Link>
            </p>
          </div>
          {width <= 500 ? (
            <p className="SignUpCopyRight">Copyright @ 2022 Ungraduation </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
