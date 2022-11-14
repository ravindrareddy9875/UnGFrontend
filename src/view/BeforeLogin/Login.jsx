import "../../Style/Login.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../../Controller/fire";

import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../model/Loading";

export default function Login() {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [error1, setError1] = useState(false);
  const [width, setwidth] = useState();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setwidth(window.screen.width);
  }, []);
  if (loading) {
    return <Loading type={"bubbles"} color={"blue"} />;
  }
  const ForgotPass = () => {
    if (email.length == 0) {
      setError(true);
    }

    if (email.length !== 0) {
      setLoading(true);
      sendPasswordResetEmail(auth, email)
        .then(() => {
          setLoading(false);
          alert(
            "reset link send,Please check your inbox & spam folders also.. "
          );
        })
        .catch(() => {
          setLoading(false);
          const errorCode = error.code;
          alert(errorCode);
        });
    } else {
      setError(true);
    }
  };
  const Login = () => {
    if (email.length === 0 || password.length === 0) {
      setError(true);
    }
    if (email.length !== 0 && password.length >= 8) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false);
          navigate("/HomePage");
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;

          alert(errorCode);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div
      style={{ backgroundColor: "rgba(153,204,255,255)" }}
      className="FullLoginPage"
    >
      <div className="LoginPage">
        <div>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "rgba(0,0,0,255)" }}
          >
            <h1 className="UnGraduation4">
              <span style={{ color: "rgba(23,50,162,255)" }}>Un</span>
              Graduation
            </h1>
          </Link>
          {width >= 500 ? (
            <img
              src="./Mobile login-rafiki 1.png"
              style={{ marginTop: "-20px" }}
            ></img>
          ) : null}
        </div>

        <div className="LoginPart4">
          <div className="LoginHeader">
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              className="BackArrow1"
            >
              &larr;
            </Link>
            <p className="Login">Login</p>
          </div>

          <p className="LoginSubHeading">Login and start learning now</p>

          <input
            type={"email"}
            placeholder="Email"
            className="inputs4"
            onChange={(e) => setEmail(e.target.value)}
            style={{ borderBottomColor: "rgb(150,150,150)" }}
          ></input>

          {(error && email.length === 0) || error1 ? (
            <p className="ErrorMessage">*Invalid email</p>
          ) : null}

          <input
            placeholder="Password"
            className="inputs4"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            style={{ borderBottomColor: "rgb(150,150,150)" }}
          ></input>

          {error && password.length < 8 ? (
            <p className="ErrorMessage">*Password is not valid</p>
          ) : null}

          <p className="ForgotPass" onClick={ForgotPass}>
            Forgot password?
          </p>

          <p className="LoginButton" onClick={Login}>
            Login
          </p>

          <p className="LastLine">
            By going forward, you will accept our terms & conditions
          </p>
        </div>
      </div>
    </div>
  );
}
