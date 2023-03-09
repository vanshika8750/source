import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./reset.css";
let Reset = () => {
  let [email, setEmail] = useState("");
  let navigate = useNavigate();
  let handleSubmit = async(e) => {
    e.preventDefault();
    console.log(email);
    console.log("submitted");
    const obj={
      email,
    }
    console.log(obj);
    let result = await fetch(`http://localhost:4000/api/user/forgotpassword`,{
      method : 'POST',
      body : JSON.stringify(obj),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    result =await result.json();
    console.log(result);
    navigate(`/Password_change/${email}`);
  };

  return (
    <>
      <form className="forgot_page" onSubmit={handleSubmit}>
        <i className="fa-solid fa-key"></i>
        <h1 className="forgot_header">Forgot Password</h1>
        <h3 className="forgot_subheader">
          No worries, we'll send you reset instruction
        </h3>
        <div className="input_field">
          <label htmlFor="email">Email</label>
          <br />
          <div>
            <input
              type={"email"}
              name={"email"}
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>
        <br />
     <button><input
          type="submit"
          value="Reset Password"
          className="forget_submit"
        /></button>
        
        <Link to={'/login'} className='back_login'><i class="fa-solid fa-arrow-left"></i>Back to log in</Link>
      </form>
    </>
  );
};
export default Reset;
