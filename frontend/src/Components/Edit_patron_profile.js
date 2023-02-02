import React, { Component } from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import './Patron.css'
import { Link } from 'react-router-dom'

export class Edit_patron_profile extends Component {
  render() {
    return (
      <div>
       <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               
                <Navbar className="nav_artist" />
                <a className="navbar-brand " href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component">
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
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
                                        className="form-label edit-patron-profile-input-lable">First name</label>
                                    <input type="text" className="form-control" id="firstname"/>
                                </div>
                                <div className="col space">
                                    <label for="validationCustom02"
                                        className="form-label edit-patron-profile-input-lable">Last name</label>
                                    <input type="text" className="form-control" id="lastname"/>
                                </div>
                            </div>
                            <div className="row container edit-patron-profile-input-rows" style={{marginBottom: "10px"}}>
                                <div className="col space">
                                    <label for="validationCustom02"
                                        className="form-label edit-patron-profile-input-lable">Phone number</label>
                                    <input type="tel" className="form-control" id="phone"/>
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
                                        className="form-label edit-patron-profile-input-lable">Hired employee</label>
                                    <input type="text" className="form-control" id="hired-employee"/>
                                </div>
                                <div className="col space">
                                    <label for="validationCustomUsername"
                                        className="form-label edit-patron-profile-input-lable">Mostly Hire For</label>
                                    <div className="input-group has-validation">

                                        <input type="text" className="form-control" id="mostyle-hired-for"
                                            aria-describedby="inputGroupPrepend"/>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative edit-patron-profile-save-changes" style={{marginTop:"40px"}}>
                                <div className="position-absolute bottom-0">
                                    
                                        <Link to="/" className="btn btn-danger btn-new" type="submit" value="Submit">
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

export default Edit_patron_profile
