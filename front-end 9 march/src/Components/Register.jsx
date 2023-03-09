import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Frontpage.css";
import "./Dashboard.css";
import "./Desc.css";
import "./css_new.css";
import "./Logreg.css";
import Navbar_frontpage from "./Navbar_frontpage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

console.log("Register page");

export const Register = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [middlename, setMiddlename] = useState("");
  const [lastname, setLname] = useState("");
  const [phoneno, setPhone] = useState("");
  const [role, setRole] = useState(0);
  const [errorflag, setErrorflag] = useState(1);

  const navigate = useNavigate();
  const notify = () =>
    toast("Register succesfully", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      middlename: middlename,
      lastname: lastname,
      phoneno: phoneno,
      email: email,
      password: pass,
      role: role,
    };
    if (formData.role == 0) {
      navigate("/Register");
      return;
    }
    console.log(formData);
    let result = await fetch("http://localhost:4000/api/signup", {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    if (result.err) {
      setErrorflag(0);
      console.log(result.err);
    } else {
      notify();
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  const popup_btn_open = () => {
    document.getElementById("open-popup-btn").style.display = "none";
    document.getElementsByClassName("popup")[0].classList.add("active");
  };
  const popup_btn_dismiss = () => {
    document.getElementById("open-popup-btn").style.display = "block";
    document.getElementsByClassName("popup")[0].classList.remove("active");
  };

  /* let [phoneError, setPhoneError] = useState(false)
  let checkPhone = (value)=> {
    let regExp = new RegExp(/[1-9]{1}[0-9]{9}/)
    let check = regExp.test(value)
    !check ? setPhoneError(true) : setPhoneError(false)   
  }
  let [mailError, setmailError] = useState(false)
  let checkEmail = (value)=> {
    let regExp = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
    let check = regExp.test(value)
    !check ? setmailError(true) : setmailError(false)
  }
  let [passError, setPassError] = useState(false)
  let checkPass =(value)=> {
    let regExp = new RegExp(/(?=.\d)(?=.[a-z])(?=.*[A-Z])/)
    let check = regExp.test(value)
    !check ? setPassError(true) : setPassError(false)
    value.length < 5 ? setPassError(true) : setPassError(false)
  } */

  return (
    <div className="bg_register_login">
      {/* header */}
      <Navbar_frontpage />
      <div className="App1 my-2">
        <div className="auth-form-container reg_inside">
          <h1>
            <b className="login_heading reg_head">Join Us</b>{" "}
          </h1>
          {errorflag === 0 ? (
            <p style={{ color: "red" }}>Email Already Exists</p>
          ) : (
            ""
          )}
          <form className="register-form" onSubmit={handleSubmit}>
            <div className="reg_row">
              <div className="reg_unit">
                <div className="reg_label">
                  <label htmlFor="name">Name</label>
                </div>

                <div className="reg_input">
                  <input
                    value={name}
                    name=" name"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="First Name"
                    pattern="[A-Za-z]+"
                    required
                    title="Name must have alphabet characters only"
                  />
                </div>
              </div>
              {/*  <span>{errors.nameError}</span> */}

              <div className="reg_unit">
                <div className="reg_label">
                  <label htmlFor="mname">Middle Name</label>
                </div>
                <div>
                  <div className="reg_input">
                    <input
                      value={middlename}
                      name="mname"
                      onChange={(e) => setMiddlename(e.target.value)}
                      id="mname"
                      placeholder="Middle Name"
                      pattern="[A-Za-z]+"
                      required
                      title="Name must have alphabet characters only"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <span>{errors.mname}</span> */}
            <div className="reg_row">
              <div className="reg_unit">
                <div className="reg_label">
                  <label htmlFor="lname">Last Name</label>
                </div>

                <div className="reg_input">
                  <input
                    value={lastname}
                    name="lname"
                    onChange={(e) => setLname(e.target.value)}
                    id="lname"
                    placeholder="Last Name"
                    pattern="[A-Za-z]+"
                    required
                  />
                </div>
              </div>
              {/* <span>{errors.lname}</span> */}

              <div className="reg_unit">
                <div className="reg_label">
                  <label htmlFor="phone">Phone Number</label>
                </div>
                <div className="reg_input">
                  <input
                    value={phoneno}
                    name="phone"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    //onBlur={(e)=> checkPhone(e.target.value)}
                    id="phone"
                    placeholder="Phone Number"
                    pattern="[1-9]{1}[0-9]{9}"
                    title="Enter 10 digits"
                    required
                  />
                </div>
              </div>
            </div>
            {/* <span>{errors.phoneError}</span> */}
            {/* {phoneError ? <span>Invalid phone number</span> : <></>} */}
            <div className="reg_row">
              <div className="reg_unit">
                <div className="reg_label">
                  <label htmlFor="email">Email</label>
                </div>

                <div className="reg_input">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    //onBlur={(e)=> checkEmail(e.target.value)}
                    type="email"
                    placeholder="youremail@gmail.com"
                    id="email"
                    name="email"
                    title="Please enter valid email address"
                    required
                  />
                </div>
              </div>
              {/* <span>{errors.emailError}</span> */}
              {/* {mailError ? <span>Invalid Email</span> : <></>} */}

              <div className="reg_unit">
                <div className="reg_label">
                  <label htmlFor="password">Password</label>
                </div>
                <div className="reg_input">
                  <input
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    //onBlur={(e)=> checkPass(e.target.value)}
                    type="password"
                    placeholder="********"
                    id="password"
                    name="password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
                    title="Must contain atleast one number and one uppercase and lowercase letter and atleast 8 or more character"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="regi_row">
              <div className="reg_unit">
                <div className="reg_label">
                  <label htmlFor="confirm_password">Confirm Password</label>
                </div>
                <div className="reg_input">
                  <input
                    // value={pass}
                    // onChange={(e) => setPass(e.target.value)}
                    //onBlur={(e)=> checkPass(e.target.value)}
                    type="password"
                    placeholder="Confirm Password "
                    id="confirm_password"
                    name="confirm_password"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
                    title="Must contain atleast one number and one uppercase and lowercase letter and atleast 8 or more character"
                    required
                    disabled
                  />
                </div>
              </div>
            </div>
            {/* <span>{errors.passError}</span> */}
            {/* {passError ? <span>Must contain atleast one number and one uppercase and lowercase letter and atleast 8 or more characte</span> : <></>} */}
            <div
              className="form-check d-flex justify-content mx-0  my-2"
              style={{ textAlign: "left", PaddingLeft: "0px" }}
            >
              <label htmlFor="role" style={{ Padding: "0px" }}>
                Choose a Role
              </label>
              <select
                style={{ height: "39px" }}
                aria-label="Default select example"
                onChange={(e) => setRole(e.target.value)}
                required
                title="Please choose a role"
              >
                <option value="0">Choose your role</option>
                <option value="2">Artist</option>
                <option value="1">Patron</option>
                <option value="3">Speacial Services</option>
              </select>
              <div className="d-flex mx-2">
                <details>
                  <summary>
                    <strong>i</strong>
                  </summary>
                  <div>
                    <ul>
                      <li>
                        {" "}
                        Patron -An individual, institutions like Hostels, Event
                        Management, Wedding Planner, Large clubs etc, who
                        promotes art by organising art events and pay for the
                        same.{" "}
                      </li>
                      <li>
                        {" "}
                        Artist- An individual/ group/ institution knows about an
                        art, performs professionally for financial gain and
                        fame. They would be mostly sellers (selling art)
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            </div>
            <div
              className="form-check d-flex-inline justify-content  my-2"
              style={{ textAlign: "left" }}
            >
              <input
                className="form-check-input me-2"
                type="checkbox"
                value="rendered-checked"
                checked
                id="form2Example3c"
              />
              <label className="form-check-label" htmlFor="form2Example3">
                I agree all statements in{" "}
                <Link to="/Terms_and_conditions"> Terms of service</Link>
              </label>
                
            </div>
            <div className="popup center">
              <div className="title">Success!!</div>

              <div className="dismiss-btn">
                <button id="dismiss-popup-btn" onClick={popup_btn_dismiss}>
                  Click to continue
                </button>
              </div>
            </div>{" "}
            :{" "}
            <>
              <div></div>
            </>
            <div className="center">
              {/* <button id="open-popup-btn" onClick={popup_btn_open}>
                Sign In
              </button> */}
              <input type={"submit"} value="submit" />
            </div>
            <ToastContainer />
          </form>

          <Link to="/Login">Already have an account? Login here.</Link>
        </div>
      </div>
    </div>
  );
};
