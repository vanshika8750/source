import React, { Component } from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import './Patron.css'
// import './SS_files_Css.css'
import { Link } from 'react-router-dom'

export class SS_Edit_Profile extends Component {
  render() {
    return (
      <div>
    <div className="edit-patron-profile">
        <div className="text-center text-danger edit-patron-profile-text">
            EDIT YOUR PROFILE
        </div>
        <div className="container patron-center">

            <div style={{borderWidth:"1px"}} className="card">
                <div className="card-body ">
                    <form  style={{marginLeft:"20px"}} action="edit-patron-profile.html" onsubmit="return(validateEditPatronProfile());">
                        <div className="row justify-content-start patron-profile-photo-container">
                            <div className="col">
                                <img className="patron-profile-photo" id="chosen-img" src="assets/images/Linkb11.jpeg"/>

                                {/* <input type="file" id="upload-button" accept="image/*" style={{display: "none"}}
                                    value="img"/> */}

                                <label className=" text-danger patron-change-profile-photo-text" for="upload-button"
                                    style={{cursor: "pointer"}}>
                                    Change profile photo
                                </label>

                            </div>
                        </div>
                       
                        <div className="row">
                            <div className="row container edit-patron-profile-input-rows" id="inputs"
                                style={{marginBottom:" 10px"}}>
                                <div className="col-12 text-end" style={{margin:"2%"}}>
                                    <Link to="" style={{color: "black",textDecoration: "none"}}><i
                                            className="bi bi-pen-fill "></i>
                                    </Link>
                                </div>

                                <div className="col space">
                                    <label for="validationCustom01"
                                        className="form-label edit-patron-profile-input-lable">Agency Name</label>
                                    <input type="text" className="form-control" id="firstname"/>
                                </div>
                                <div className="col space">
                                    <label for="validationCustom02"
                                        className="form-label edit-patron-profile-input-lable">Location</label>
                                    <input type="text" className="form-control" id="lastname"/>
                                </div>
                            </div>
                            <div className="row container edit-patron-profile-input-rows" style={{marginBottom: "10px"}}>
                                <div className="col space">
                                    <label for="validationCustom02"
                                        className="form-label edit-patron-profile-input-lable">Phone number</label>
                                    <input type="tel" className="form-control " id="phone"/>
                                </div>
                                <div className="col space">
                                    <label for="validationCustomUsername"
                                        className="form-label edit-patron-profile-input-lable">Email</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" className="form-control" id="email"
                                            aria-describedby="inputGroupPrepend"/>
                                    </div>
                                </div>
                            </div>
                            <div className="row container edit-patron-profile-input-rows" style={{marginBottom: "10px"}}>
                                <div className="col">
                                    <label for="validationCustom02"
                                        className="form-label edit-patron-profile-input-lable">No of Candidates </label>
                                    <input type="text" className="form-control" id="hired-employee"/>
                                </div>
                                <div className="col space">
                                    <label for="validationCustomUsername"
                                        className="form-label edit-patron-profile-input-lable">Number of Courses Offered</label>
                                    <div className="input-group has-validation">

                                        <input type="text" className="form-control" id="mostyle-hired-for"
                                            aria-describedby="inputGroupPrepend"/>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative edit-patron-profile-save-changes " style={{marginTop:"40px"}}>
                                <div className="float-right mr-5">
                                    
                                        <Link to="/Special_services_dashboard" className="btn btn-danger btn-new pull-right" type="submit" value="Submit">
                                       Save Changes
                                     </Link>
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default SS_Edit_Profile
