import React, { Component } from 'react'
import Artist_Navbar from './Artist_Navbar'
import { Link } from 'react-router-dom'
import './stylesheet.css'
export class Artist_application extends Component {
  render() {
    return (
      <div>
         <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist"/>
                <a className="navbar-brand "  href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component" >
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search Opportunities
                    " aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search " type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div className="patron-view-application">
        <div className="patron-view-application-heading text-center">
            Application
        </div>
        <div className="container patron-view-application-body-container">
            <div style={{marginLeft:"-13px",backgroundColor:"lightblue"}} className="horizontal-design container">
                <div className="patron-view-application-artist-name-profession">
                    <div className="patron-view-application-artist-name">
                        NAME
                    </div>
                    <div className="patron-view-application-artist-profession">
                        Profession
                    </div>
                </div>
            </div>

            <div className="vertical-design" style={{backgroundColor:"#CC9767"}}>
                <img src="assets/images/linkb11.jpeg" className="patron-view-application-artist-image"/>
            </div>
            <div className="patron-view-application-artist-details">
                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head">EDUCATION</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Abc University
                </div>
                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head">SKILLS & EXPERIENCE</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Dancer
                </div>
                <div className="patron-view-application-artist-details-body">
                    5 years in x academy
                </div>

                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head"> PERSONAL DETAILS</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Religion
                </div>
                <div className="patron-view-application-artist-details-body">
                    Caste
                </div>
                <div className="patron-view-application-artist-details-body">
                    Height
                </div>
                <div className="patron-view-application-artist-details-body">
                    Weight
                </div>
                <div className="patron-view-application-artist-details-body">
                    Language
                </div>

                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head"> SOCIAL MEDIA LINKS</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    Link1
                </div>
                <div className="patron-view-application-artist-details-body">
                    Link2
                </div>

                <div className="patron-view-application-artist-details-arrow-head">
                    <img src="assets/images/rightArrowBlack.png" alt=""
                        className="patron-view-application-artist-details-arrow"/>
                    <span className="patron-view-application-artist-details-head">CONTACT DETAILS</span>
                </div>
                <div className="patron-view-application-artist-details-body">
                    9876352789
                </div>
                <div className="patron-view-application-artist-details-body">
                    name@email.com
                </div>
            </div>
        </div>
        <div className="container patron-view-application-footer-container">
            <div style={{display: "flex", justifyContent:"center", alignItems: "center"}}>
                <Link to="/Artist_edit_profile" className="btn btn-lg btn-danger mx-5 btn-new">Edit Profile</Link>
          
                <Link to="/Artist_Application2"className="btn btn-lg btn-danger btn-new " >Apply</Link>
            </div>


        </div>
    </div>
      </div>
    )
  }
}

export default Artist_application
