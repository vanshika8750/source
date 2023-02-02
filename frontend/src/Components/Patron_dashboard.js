import React, { Component } from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import { Link } from 'react-router-dom'
import './Patron.css'


export class Patron_dashboard extends Component {
    
  render() {
    return (
      <div>
        {/* <div className="offcanvas offcanvas-start left-side-menu-bar" data-bs-scroll="true" data-bs-backdrop="true"
        tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                <a className="navbar-brand" style={{marginLeft: '17px'}} href="index.html">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </Link>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body container">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <a className="accordion-button collapsed menu-bar-options" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Profile
                    </Link>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{marginLeft: '30px'}}>
                            <div style={{marginBottom: '10px'}}>
                                <Link to="#" className="menu-bar-options" style={{marginBottom: '5px'}}> View profile</Link>
                            </div>
                            <div>
                                <Link to="edit-patron-profile.html" className="menu-bar-options">Edit profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link to="patron-search-artist.html" className="menu-bar-options">Search artists</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="patron-view-applications.html" className="menu-bar-options">View applications</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="uploaded-opportunities.html" className="menu-bar-options">View uploaded opportunities</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="view-shortlisted-artist.html" className="menu-bar-options">Shortlisted artists</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="view-contacted-artist.html" className="menu-bar-options">Contacted artists</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/Previously_hired_artist" className="menu-bar-options">Previously hired artists</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="chat.html" className="menu-bar-options">Chat</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div> */}

    <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
                
                <Navbar className="nav_artist" />
                <a className="navbar-brand "  href="/">
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

    <div className="patron-dashboard">
        <div className="patron-dashboard-header">
            <div className="patron-dashboard-header-parent">
                <img className="patron-dashboard-header-background-img" src="assets/images/patron-dashboard-bg.png"/>
                <div className="row container">
                    <div className="col" style={{margin:"20px"}}>
                        {/* <!-- <img className="patron-dashboard-header-patron-img" src="assets/images/Linkb11.jpg"> --> */}
                        <div className="row">
                            <div className="col">
                                <img className="patron-dashboard-header-patron-img" src="assets/images/Linkb11.jpeg"/>
                            </div>
                            <div className="w-100"></div>
                            <div className="col patron-dashboard-header-patron-name-category" style={{marginLeft:"10px",marginTop:"-8px"}}>
                                <div className="patron-dashboard-header-patron-name">Patron name</div>
                                <div className="patron-dashboard-header-patron-category">Hiring manager</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto patron-dashboard-header-company-name-col">
                        <div className="patron-dashboard-header-company-name">
                            <img src="assets/images/verified.png" className="patron-dashboard-header-company-verified-icon"/>
                            Company/Organization Name
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div style={{marginTop:"45px"}} className="patron-dashboard-body container">
            <div className="row">
                <div className="col container patron-dashboard-body-col">
                    <div style={{borderWidth:"1px"}} className="card patron-dashboard-patron-account-info patron-dashboard-body-components-width">
                        <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                            Your Information
                        </div>
                        <div className="card-body">
                            <div className="progress" style={{height:' 24px'}}>
                                <div className="progress-bar bg-danger" role="progressbar" aria-label="Danger example"
                                    style={{width: '25%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
                                </div>
                            </div>
                            <div className="row container patron-dashboard-patron-account-info-input-rows" id="inputs"
                                style={{marginBottom:' 10px'}}>
                                <div className="col-12 text-end" style={{margin:'2%'}}>
                                    <Link to="#" style={{color: 'black', textDecoration: 'none'}}>
                                    <i className="bi bi-pen-fill "></i>
                                    </Link>
                                </div>

                                <div className="col space">
                                    <label for="validationCustom01"
                                        className="form-label patron-dashboard-patron-account-info-input-lable">First
                                        name</label>
                                    <input type="text" className="form-control" name="firstname" value="First Name"
                                        disabled/>
                                </div>
                                <div className="col space">
                                    <label for="validationCustom02"
                                        className="form-label patron-dashboard-patron-account-info-input-lable">Last
                                        name</label>
                                    <input type="text" className="form-control" name="lastname" value="Last Name" disabled/>
                                </div>
                            </div>
                            <div className="row container patron-dashboard-patron-account-info-input-rows"
                                style={{marginBottom:' 10px'}}>
                                <div className="col space">
                                    <label for="validationCustom02"
                                        className="form-label patron-dashboard-patron-account-info-input-lable">Phone
                                        number</label>
                                    <input type="tel" className="form-control" name="phone" value="9876543937" disabled/>
                                </div>
                                <div className="col space">
                                    <label for="validationCustomUsername"
                                        className="form-label patron-dashboard-patron-account-info-input-lable">Email id</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text" id="inputGroupPrepend">@</span>
                                        <input type="text" className="form-control" name="email"
                                            aria-describedby="inputGroupPrepend" value="patron@email.com" disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className="row container patron-dashboard-patron-account-info-input-rows"
                                style={{marginBottom:' 10px'}}>
                                <div className="col">
                                    <label for="validationCustom02"
                                        className="form-label patron-dashboard-patron-account-info-input-lable">Hired
                                        employee</label>
                                    <input type="text" className="form-control" name="hiredemployee" value="20" disabled/>
                                </div>
                                <div className="col space">
                                    <label for="validationCustomUsername"
                                        className="form-label patron-dashboard-patron-account-info-input-lable">Mostly hire
                                        for</label>
                                    <div className="input-group has-validation">

                                        <input type="text" className="form-control" name="text"
                                            aria-describedby="inputGroupPrepend" value="Dancer" disabled/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                            Last changed 2 days ago
                        </div>
                    </div>
                    <div className="position-relative patron-dashboard-patron-account-info-edit-profile">
                        <div className="position-absolute bottom-0">
                            <Link to="/Edit_patron_profile" className="btn btn-danger btn-new btn_art_reg">
                                Edit Profile
                            </Link>
                            <Link to="/Patron_Registration" className="btn btn-danger mx-4 btn-new btn_art_reg">
                                Patron Registration
                            </Link>
                        </div>
                       
                    </div>
                </div>
                <div style={{marginLeft:"8px"}}className="col  container">
                    <div style={{borderWidth:"1px"}} className="card patron-dashboard-patron-relevant-kalakaars">
                        <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                            Relevant Kalakaars
                        </div>
                        <div style={{marginLeft:"15px"}} className="card-body">
                            <div className="row" style={{marginBottom: '13px'}}>
                                <div className="col">
                                    <img className="patron-dashboard-patron-relevant-kalakaars-img"
                                        src="assets/images/Linkb11.jpeg"/>
                                </div>
                                <div className="col-8 patron-dashboard-patron-relevant-kalakaars-name-detials">
                                    <div className="patron-dashboard-patron-relevant-kalakaars-name">
                                        Artist Name
                                    </div>
                                    <div className="patron-dashboard-patron-relevant-kalakaars-view-details-message-img">
                                        <button
                                            className="btn btn-new btn-danger btn-sm patron-dashboard-patron-relevant-kalakaars-view-details">
                                            View Details
                                        </button>
                                        <Link to="View_shortlisted_artist">
                                            <img className="patron-dashboard-patron-relevant-kalakaars-message"
                                                src="assets/images/messagebox.jpg" alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: '13px'}}>
                                <div className="col">
                                    <img className="patron-dashboard-patron-relevant-kalakaars-img"
                                        src="assets/images/Linkb11.jpeg"/>
                                </div>
                                <div className="col-8 patron-dashboard-patron-relevant-kalakaars-name-detials">
                                    <div className="patron-dashboard-patron-relevant-kalakaars-name">
                                        Artist Name
                                    </div>
                                    <div className="patron-dashboard-patron-relevant-kalakaars-view-details-message-img">
                                        <button
                                            className="btn btn-new btn-danger btn-sm patron-dashboard-patron-relevant-kalakaars-view-details">
                                            View Details
                                        </button>
                                        <Link to="View_shortlisted_artist">
                                            <img className="patron-dashboard-patron-relevant-kalakaars-message"
                                                src="assets/images/messagebox.jpg" alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative patron-dashboard-patron-relevant-kalakaars-view-more">
                                <div className="position-absolute bottom-0 end-0">
                                    <Link to="View_shortlisted_artist">
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100"></div>
                <div className="col container patron-dashboard-body-col">
                    <div style={{borderWidth:"1px"}} className="card patron-dashboard-opportunities-status patron-dashboard-body-components-width">
                        <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                            Opportunities Status
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col patron-dashboard-opportunities-status-card-col">
                                    <div style={{marginLeft:"20px",height:'120px'}} className="card patron-dashboard-opportunities-status-card">
                                        <div style={{marginLeft:"10px"}} className="card-body">
                                            <div className="row patron-dashboard-opportunities-status-body-header">
                                                <div className="col patron-dashboard-opportunities-status-opportunity-name">
                                                    Opportunity 1
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col patron-dashboard-opportunities-status-no-of-position">
                                                    2 filled
                                                </div>
                                            </div>
                                            <div
                                                className="position-relative patron-dashboard-opportunities-status-body-footer">
                                                <div
                                                    className="patron-dashboard-opportunities-status-opportunity-details position-absolute end-0">
                                                    <Link to="Uploaded_Opportunities">
                                                        View details
                                                        <img src="assets/images/rightArrow.png"
                                                            style={{width: '10px', height:' 11px'}}/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col patron-dashboard-opportunities-status-card-col">
                                    <div style={{marginLeft:"20px",height:'120px'}} className="card patron-dashboard-opportunities-status-card">
                                        <div style={{marginLeft:"10px"}} className="card-body">
                                            <div className="row patron-dashboard-opportunities-status-body-header">
                                                <div className="col patron-dashboard-opportunities-status-opportunity-name">
                                                    Opportunity 1
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col patron-dashboard-opportunities-status-no-of-position">
                                                    2 filled
                                                </div>
                                            </div>
                                            <div
                                                className="position-relative patron-dashboard-opportunities-status-body-footer">
                                                <div
                                                    className="patron-dashboard-opportunities-status-opportunity-details position-absolute end-0">
                                                    <Link to="Uploaded_Opportunities">
                                                        View details
                                                        <img src="assets/images/rightArrow.png"
                                                            style={{width: '10px', height: '11px'}}/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative patron-dashboard-opportunities-status-view-more">
                                <div className="position-absolute bottom-0 end-0">
                                    <Link to="uploaded-opportunities.html">
                                        View more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative patron-dashboard-patron-upload-opportunities">
                        <div className="position-absolute bottom-0">
                            <Link to="/Upload_Opportunity" className="btn btn-new btn-danger">
                                Upload Opportunities
                            </Link>
                        </div>
                    </div>
                </div>
                <div style={{marginLeft:"8px"}} className="col  container">
                    <div style={{borderWidth:"1px"}} className="card patron-dashboard-hired-candidates">
                        <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                            Hired Candidates
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div style={{marginLeft:"20px",height:'130px'}} className="card patron-dashboard-hired-candidates-card">
                                        <div style={{marginLeft:"10px"}} className="card-body">
                                            <div className="row patron-dashboard-hired-candidates-body-header">
                                                <div className="col patron-dashboard-hired-candidates-category">
                                                    Dancer
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col patron-dashboard-hired-candidates-salary-status">
                                                    <span>Salary: <span>Paid</span></span>
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col patron-dashboard-hired-candidates-status">
                                                    <span>Status: <span>Duration Completed</span></span>
                                                </div>
                                            </div>
                                            <div
                                                className="position-relative patron-dashboard-hired-candidates-body-footer">
                                                <div
                                                    className="patron-dashboard-hired-candidates-details position-absolute end-0">
                                                    <Link to="/Previously_hired_artist">
                                                        View details
                                                        <img src="assets/images/rightArrow.png"
                                                            style={{width: '10px', height: '11px'}}/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative patron-dashboard-hired-candidates-view-more">
                                <div className="position-absolute bottom-0 end-0">
                                    <Link to="/Previously_hired_artist">
                                        View more
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Patron_dashboard
