import React, { Component } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import './Navbar.css'
import './Patron.css'
export class Edit_Opportunity extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               
                <Navbar className="nav_artist" />
                <a className="navbar-brand "  href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component" >
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div className="patron-upload-opportunity container">
        <div className="patron-upload-opportunity-heading text-center">
            Edit opportunity
        </div>
        <div style={{borderWidth:"1px"}} className="card">
            <div className="card-body">
                <form action="uploaded-opportunities.html" onsubmit="return(validateEditOpportunity());">
                    <div className="mb-3 row">
                        <label for="position"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Position</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control patron-upload-opportunity-inputPosition"
                                id="position"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="aboutCompany" className="form-label patron-upload-opportunity-form-label">About
                            Company</label>
                        <textarea className="form-control" id="aboutCompany" rows="3"></textarea>
                    </div>
                    <div className="mb-3">
                        <label for="Requirements"
                            className="form-label patron-upload-opportunity-form-label">Requirements</label>
                        <textarea className="form-control" id="requirements" rows="3"></textarea>
                    </div>
                    <div className="mb-3 row">
                        <label for="position"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Duration</label>
                        {/* <div className="col-sm-10">
                            <div className="input-group mb-3 patron-upload-opportunity-inputDuration">
                                <input type="text" className="form-control patron-upload-opportunity-inputDuration-num"
                                    id="duration" aria-describedby="basic-addon2"/>
                                <select className="form-select patron-upload-opportunity-inputDuration-text" required>
                                    <option selected disabled value="choose">Choose</option>
                                    <option>Days</option>
                                    <option>Months</option>
                                    <option>Year</option>
                                </select>
                            </div>
                        </div> */}
                        <div className="col-sm-10">
                        <label for="StartDate"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Start Date
                        <input  type="date" name="startdate" id="startdate" style={{border:"1px solid 	#B2BEB5"}} /></label>
                        <label for="EndDate"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">End Date
                        <input type="date" name="enddate" id="enddate"  style={{border:"1px solid 	#B2BEB5"}} /></label>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label for="position"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Number</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control patron-upload-opportunity-inputNumber" id="number"/>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="link-to-document"
                            className="col-sm-2 col-form-label patron-upload-opportunity-form-label">Link
                            to
                            document</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="link-to-document"/>
                        </div>
                    </div>
                    <div className="d-grid gap-1 d-md-flex justify-content-center patron-upload-opportunity-upload-button">
                        
                        <Link to="/Uploaded_Opportunities" className="btn btn-danger me-md-2 btn-new" type="submit" value="Submit">
                            Save changes
                         </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Edit_Opportunity
