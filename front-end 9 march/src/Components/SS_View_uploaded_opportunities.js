import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import './Patron.css'
import Navbar from './Navbar'


export default class SS_View_uploaded_opportunities extends Component {
  render() {
    return (
      <div>


    {/* <nav className="navbar bg-light fixed-top" style={{backgroundColor:" white"}}>
        <div className="container-fluid">
            <a className="navbar-brand " style={{marginLeft:" 70px"}} href="index.html">
                <span className="text-danger text"> <strong>ekala</strong></span>kaar
            </a>
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search artist" aria-label="Search"/>
                <button className="btn btn-outline-danger" type="submit">Search</button>
            </form>

        </div>
    </nav> */}

    <div className="patron-view-applications container">
        <div className="patron-view-applications-header container">
            <div className="row">
                <div className="col">
                    

                    <div className="patron-view-applications-search-data-text text-center">
                       Uploaded Courses
                    </div>
                </div>
            </div>

        </div>


        <div className="patron-view-applications-body container">
            <div className="row opportunity-name">
               
            </div>

            <div className="card patron-view-applications-artist-card">
                <div className="card-body">
                    <div className="row patron-view-applications-body-header">
                        <div className="col artist-name ml-2">
                            Name
                        </div>
                        <div className="w-100" >
                        <span className='d-block ml-2 fw-bold'>2 filled</span>
                        <span className='d-block ml-2 fw-bold'>40 Days</span>
                        </div>
                        
                    </div>
                    <div className="row patron-view-applications-body-footer">
                        <div className="col-auto me-auto artist-location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            <strong>
                              Location
                            </strong>
                        </div>
                        <div className="col-auto artist-details mr-4">
                            <Link to="/Linkpplication">
                                Edit
                                <img src="assets/images/rightArrow.png" style={{width: "10px", height:" 11px"}}/>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
          
            <div className="row opportunity-name">
               
            </div>

            <div className="card patron-view-applications-artist-card">
                <div className="card-body">
                    <div className="row patron-view-applications-body-header">
                        <div className="col artist-name ml-2">
                            Name
                        </div>
                        <div className="w-100" >
                        <span className='d-block ml-2 fw-bold'>2 filled</span>
                        <span className='d-block ml-2 fw-bold'>40 Days</span>
                        </div>
                        
                    </div>
                    <div className="row patron-view-applications-body-footer">
                        <div className="col-auto me-auto artist-location">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                <path
                                    d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                            </svg>
                            <strong>
                              Location
                            </strong>
                        </div>
                        <div className="col-auto artist-details mr-4">
                            <Link to="/Linkpplication">
                                Edit
                                <img src="assets/images/rightArrow.png" style={{width: "10px", height:" 11px"}}/>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
          
            <button type="button" className="btn btn-danger float-end mr-5" style={{maxWidth:"200px"}}>Add New</button>

        </div>
    </div>

        
      </div>
    )
  }
}
