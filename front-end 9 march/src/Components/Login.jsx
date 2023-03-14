import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Frontpage.css";
// import "./Desc.css";
import "./Logreg.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import Navbar_frontpage from "./Navbar_frontpage";
export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errorflag, setErrorflag] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email: email,
      password: pass,
    };
    console.log(formData);
    let result = await fetch("http://localhost:4000/api/signin", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.message === "User Email Does Not Exist") {
      setErrorflag(1);
    } else if (result.message === "Incorrect email or password!") {
      setErrorflag(2);
    }

    console.log(result.user._id);
    console.log(result);
    localStorage.setItem("email", result.user.email);

    localStorage.setItem("lastname", result.user.lastname);
    localStorage.setItem("name", result.user.name);
    localStorage.setItem("phoneno", result.user.phoneno);
    localStorage.setItem("role", result.user.role);
    localStorage.setItem("_id", result.user._id);
    localStorage.setItem("token", result.token);
    if (result.token) {
      if (result.user.role === 2) {
        setTimeout(() => {
          navigate("/Artist_dashboard");
        }, 1000);
      } else if (result.user.role === 1) {
        setTimeout(() => {
          navigate("/Patron_dashboard");
        }, 1000);
      } else {
        setTimeout(() => {
          navigate("/Special_services_dashboard");
        }, 1000);
      }
      notify();
    }
  };
  const notify = () =>
    toast("Login succesfull", {
      position: toast.POSITION.TOP_CENTER,
    });

  return (
    <div>
      <Navbar_frontpage />
      <div className="App1 my-2">
        <div className="auth-form-container">
          <h1>
            <b className="login_heading">Login</b>
          </h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email Id</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="kalakaar@gmail.com"
              id="email"
              name="email"
              required
            />
            <label htmlFor="password">Password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
              //pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
              required
            />
            <br />

            {errorflag === 1 ? (
              <p style={{ color: "red" }}>
                Email is incorrect! OR Email do not exist!
              </p>
            ) : (
              ""
            )}
            {errorflag === 2 ? (
              <p style={{ color: "red" }}>Email OrPassword is incorrect!</p>
            ) : (
              ""
            )}

            <button type="submit" className="log_in_button">
              Log In
            </button>
            <ToastContainer />
            <Link
              to="/Reset"
              className="login_forgot_pass"
              style={{ textAlign: "right" }}
            >
              Forgot Password ?{" "}
            </Link>

            {/* login by various methods */}
            <div className="log_or_part">
              <span id="login_or_line"></span>
              <span id="login_or">or</span>
              <span id="login_or_line"></span>
            </div>
            <div className="login_diff_btns">
              <button className="login_buttons">
                <i
                  class="fa-brands fa-google fa-2x login_b"
                  title="Login via Google"
                ></i>
              </button>
              <br />
              <button className="login_buttons">
                <i
                  class="fa-brands fa-facebook-f fa-2x login_b"
                  title="Login via Facebook"
                ></i>
              </button>
              <br />
              <button className="login_buttons">
                <i
                  class="fa-regular fa-message fa-2x login_b"
                  title="Login via OTP"
                ></i>
              </button>
            </div>
          </form>

          <button className="link-btn  mt-4">
            {" "}
            <Link to="/Register" className="login_need_acc">
              Need an account? Register here.
            </Link>
          </button>

          {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
        </div>
      </div>
    </div>
  );
};
