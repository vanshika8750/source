import React, { Component, useState } from 'react'
import Navbar_frontpage from './Navbar_frontpage'
import { Link, useParams } from 'react-router-dom'

export default function Password_change() {
  const email = useParams().email;
  console.log(email);
  const [otp , setOtp] = useState();
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmPassword] = useState('');
  const [counter, setCounter] = React.useState(59);
  React.useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [counter]);
  
  const handlesavechanges = async()=>{
   const obj = {
    otp,
    email,
    newPassword,
    confirmNewPassword
   }
   let result = await fetch(`http://localhost:4000/api/user/resetpassword`,{
    method: 'POST',
    body : JSON.stringify(obj),
    headers: {
      "Content-Type": "application/json",
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
   });
   result = await result.json();
   console.log(result);
  }
  return <>
    <div>
        <Navbar_frontpage/>
        <div className="container">
            <div className="password_body">
                <div className="forgot_head">
                    Password change
                </div><br />
                <div className="forgot_cont">
                  <input type="number" value={otp} onChange={(e)=>setOtp(e.target.value)} required></input>
                  </div>
                  <div className="timer">
            <div className="written">Resend OTP in 00 : {counter}</div>
            <button className="forgot_resend">
              <u>Resend OTP </u>
            </button>
          </div>{" "}
                <div className="pswrd">
                    <label htmlFor="newpss">Enter new password
                    </label>
                    <br />
                        <input type="password" value={newPassword} onChange={(e)=>setNewPassword(e.target.value)} name="newpss" id="newpss" className='input_pss_chnge'/>
                </div>
                <br />
                <div className="pswrd">
                    <label htmlFor="newpss">Re-enter new password
                    </label>
                    <br />
                        <input type="password" value={confirmNewPassword} onChange={(e)=>setConfirmPassword(e.target.value)} name="newpss" id="newpss" className='input_pss_chnge'/>
                </div>
                <div className='btn_psswrd_change'>
                    <Link to="/Login"><button onClick={handlesavechanges} className="btn-new btn_pss">Save changes</button></Link>
                </div>
            </div>
        </div>
      </div>
  </> 
}


