import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import './Frontpage.css'
import './Dashboard.css'
import './Desc.css'
import './css_new.css'
import Navbar_frontpage from "./Navbar_frontpage";



export const Register = (props) => {
   const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [middlename, setMiddlename] = useState('');
    const [lastname, setLname] = useState('');
    const [phoneno, setPhone] = useState('');
    const [role, setRole] = useState(0);
    const [errorflag, setErrorflag] = useState(1);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
             name: name,
             middlename:middlename,
            lastname:lastname,
            phoneno:phoneno,
            email: email,
            password:pass,
            role:role,
          };
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
                 if(result.err)
                {
                  setErrorflag(0);
                  console.log(result.err);
                }
                else{
                navigate("/login")
                }
    }
    const popup_btn_open=()=>{
      document.getElementById("open-popup-btn").style.display = "none";
       document.getElementsByClassName("popup")[0].classList.add("active");
  }
  const popup_btn_dismiss=()=>{
      document.getElementById("open-popup-btn").style.display = "block";
      document.getElementsByClassName("popup")[0].classList.remove("active");
  }
    return (

      <div className="bg_register_login">

  {/* header */}
  <Navbar_frontpage/>
  {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
      <a href="#" className="navbar-brand">
          <img src="assets/images/logo1.jpg"  height="58" width="88" alt="logo"/>
          <span className="text-danger text"><strong>e</strong>kala</span>kaar
        </a>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link">Home</Link>
              <Link to="/Patrondesc" className="nav-item nav-link">Patron</Link>
              <Link to="/Artistdesc" className="nav-item nav-link">Artist</Link>
              <Link to="/Partnerdesc" className="nav-item nav-link">Partners</Link>
              <Link to="/Artloversdesc" className="nav-item nav-link">Art Lovers</Link>
              <Link to="/Clients" className="nav-item nav-link">Clients</Link>
              <Link to="/Contact" className="nav-item nav-link">Contact</Link>
              
          </div>
          <div className="navbar-nav ms-auto">
              <a href="/Login" className="nav-item nav-link ">Login/Join</a>
          
          </div>
      </div>
  </div>
</nav> */}

      <div className="App1 my-2">
        <div className="auth-form-container">
            <h1><b>Join Us</b> </h1>
             {errorflag === 0? <p style={{"color" : "red"}}>Email Already Exists</p>:''}
        <form className="register-form" onSubmit={handleSubmit}>

            <label htmlFor="name">Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="First Name" />

            <label htmlFor="mname">Middle Name</label>
            <input value={middlename} name="mname" onChange={(e) => setMiddlename(e.target.value)} id="mname" placeholder="Middle Name" />

            <label htmlFor="lname">Last Name</label>
            <input value={lastname} name="lname" onChange={(e) => setLname(e.target.value)} id="lname" placeholder="Last Name" />

            <label htmlFor="phone">Phone Number</label>
            <input value={phoneno} name="phone" onChange={(e) => setPhone(e.target.value)} id="phone" placeholder="Phone Number" />

            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />

            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
             

               <div className="form-check d-flex justify-content mx-0  my-2" style={{ "textAlign":"left" , "Padding-left":"0px" }}>
                        <label htmlFor="role" style={{  "Padding":"0px" }}>Choose a Role</label>
                        <select  style={{height:"39px"}}aria-label="Default select example" onChange={(e)=>setRole(e.target.value)}>
                            <option>Choose your role</option>
                            <option value="2">Artist</option>
                            <option value="1">Patron</option>

                        </select>
                      <div className="d-flex mx-2">
                        <details>
                            <summary><strong>i</strong></summary>
                            <p>
                                <ul>
                               <li> Patron -An individual, institutions like Hostels, Event Management, Wedding Planner, Large clubs etc, who promotes art by organising art events and pay for the same.  </li>
                             <li>   Artist- An individual/ group/ institution knows about an art, performs professionally for financial gain and fame. They would be mostly sellers (selling art)</li>
                               </ul>
                            </p>
                        </details>
                        </div>
             </div>

            <div className="form-check d-flex-inline justify-content  my-2" style={{  "textAlign":"left" }}>
                        <input class="form-check-input me-2" type="checkbox" value="rendered-checked" checked id="form2Example3c" />
                        <label class="form-check-label" for="form2Example3">I agree all statements in <Link to="/Terms_and_conditions"> Terms of service</Link>
                        </label>
                    </div>

          <div className="popup center">
            <div className="icon">
                <i className="fa fa-check"></i>
            </div>
            <div className="title">
            Success!!    
            </div>
            <div className="description">
                Thankyou for signing in to ekalakaar.com
            </div>
            <div className="dismiss-btn">
                <button id="dismiss-popup-btn" onClick={popup_btn_dismiss}>
                    Click to continue
                </button>
            </div>
        </div>
        <div className="center">
            <button id="open-popup-btn" onClick={popup_btn_open}>
                Sign In
            </button>
        </div>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}> <Link to="/Login">Already have an account? Login here.</Link></button>
        
    </div>
    </div>
    </div>
    )
}