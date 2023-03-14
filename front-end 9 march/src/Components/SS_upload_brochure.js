import React, { Component } from "react";
import { Link } from 'react-router-dom'

export default class SS_upload_brochure extends Component {
  render() {
    return (
      <>
        <div className="text-center pt-5 mb-5">
          <h3 className=" fw-bolder ">Upload Brochure</h3>
        </div>

        <div className="container border border-dark d-flex justify-content-center text-center rounded">
          <label for="img" class="btn " style={{ fontSize: "3rem" }}>
            <i class="fa-solid fa-upload"></i>
            <span className="d-block text-wrap">
              Upload a File in .png .jpg .pdf form{" "}
            </span>
          </label>
          <input type="file" id="img" style={{ display: "none" }} />
        </div>
        <div className="container  mt-5 ml-4 ">
    {/* <button
            type="button"
            class="btn btn-link    
      col-2 fs-4 float-right  fw-bolder  "
            style={{ color: "red", textDecoration: "none" }}
          >
            View Previous Brochure <i class="fas fa-arrow-right"></i>{" "}
          </button> */}
        
 
         
  
       
      
       </div>
       <div className="mr-5"><Link to="/SS_View_brochure" className=" lg-col-3 fs-4  mr-5  text-wrap  order text-right float-right"  style={{ color: "red", textDecoration: "none" }}>
       View Previous Brochure <i class="fas fa-arrow-right"></i>
        
   </Link></div>
    
        <div></div>
      </>
    );
  }
}
