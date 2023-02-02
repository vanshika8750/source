import React, { Component } from 'react'
import Artist_Navbar from './Artist_Navbar'
import { Link } from 'react-router-dom'
import './css_new.css'
export class Artist_dashboard extends Component {
    state={
        artist_name:'',
        artist_last_name:'',
        artist_phone:'',
        artist_skill:'',
        artist_experience:'',
        
    }
   
   /* componentDidMount(){
        async function fetchData(){
            let artistinitialpage = await fetch(`http://localhost:4000/api/user/info/${localStorage.getItem('email')}`,{
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                }
            });
            artistinitialpage = await artistinitialpage.json();
            console.log(artistinitialpage)
        }
        fetchData();
    }*/
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
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search " type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div className="patron-dashboard">
        <div className="patron-dashboard-header">
            <div className="patron-dashboard-header-parent">
                <img className="patron-dashboard-header-background-img" src="assets/images/patron-dashboard-bg.png" />
                <div className="row container">
                    <div className="col">
                        {/* <!-- <img className="patron-dashboard-header-patron-img" src="assets/images/Linkb11.jpg"> --> */}
                        <div style={{marginLeft:"30px"}} className="row">
                            <div className="col">
                                <img className="patron-dashboard-header-patron-img" src="assets/images/Linkb11.jpeg"/>
                            </div>
                            <div className="w-100"></div>
                            <div className="col patron-dashboard-header-patron-name-category">
                                <div className="patron-dashboard-header-patron-name">Artist name</div>
                                <div className="patron-dashboard-header-patron-category">Art name</div>
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


        <div className="patron-dashboard-body container">
            <div className="row">
                <div className="col container patron-dashboard-body-col">
                    <div className="card patron-dashboard-patron-account-info patron-dashboard-body-components-width">
                        <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                            Your Information
                        </div>
                        <div className="card-body">
                            <div className="progress" style={{height:" 24px"}}>
                                <div className="progress-bar bg-danger" role="progressbar" aria-label="Danger example"
                                    style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%
                                </div>
                            </div>
                            <div className="row container patron-dashboard-patron-account-info-input-rows" id="inputs"
                                style={{marginBottom: "10px"}}>
                                <div className="col-12 text-end" style={{margin:"2%"}}>
                                    <Link to="#" style={{color: "black", textDecoration: "none"}}><i
                                            className="bi bi-pen-fill "></i>
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
                                style={{marginBottom: "10px"}}>
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
                                            aria-describedby="inputGroupPrepend" value="Artist@email.com" disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className="row container patron-dashboard-patron-account-info-input-rows"
                                style={{marginBottom: "10px"}}>
                                
                                <div className="col space">
                                    <label for="validationCustomUsername"
                                        className="form-label patron-dashboard-patron-account-info-input-lable">Types of artist
                                    </label>
                                    <div className="input-group has-validation">

                                        <input type="text" className="form-control" name="text"
                                            aria-describedby="inputGroupPrepend" value="Singer" disabled/>
                                    </div>
                                    <label for="validationCustomUsername"
                                        className="form-label patron-dashboard-patron-account-info-input-lable">Years Of experience
                                    </label>
                                    <div className="input-group has-validation">

                                        <input type="text" className="form-control" name="text"
                                            aria-describedby="inputGroupPrepend" value="10" disabled/>
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
                            <Link to="/Artist_edit_profile" className="btn btn-danger btn-new btn_art_reg">
                                Edit Profile
                            </Link>
                            <Link to="/Artist_registration" className="btn btn-danger btn-new mx-2 btn_art_reg">
                                Artist Registration
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="col  container">
                    <div className="card patron-dashboard-patron-relevant-kalakaars">
                        <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                            Collab with Artists
                        </div>
                        <div style={{marginLeft:"15px"}} className="card-body">
                            <div className="row" style={{marginBottom:" 13px"}}>
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
                                            className="btn btn-danger btn-sm patron-dashboard-patron-relevant-kalakaars-view-details">
                                            View Details
                                        </button>
                                        <Link to="">
                                            <img className="patron-dashboard-patron-relevant-kalakaars-message"
                                                src="assets/images/messagebox.jpg" alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="row" style={{marginBottom: "13px"}}>
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
                                            className="btn btn-danger btn-sm patron-dashboard-patron-relevant-kalakaars-view-details">
                                            View Details
                                        </button>
                                        <Link to="">
                                            <img className="patron-dashboard-patron-relevant-kalakaars-message"
                                                src="assets/images/messagebox.jpg" alt=""/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative patron-dashboard-patron-relevant-kalakaars-view-more">
                                <div className="position-absolute bottom-0 end-0">
                                    <Link to="">
                                        View More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-100"></div>
                <div className="col container patron-dashboard-body-col">
                    <div className="card patron-dashboard-opportunities-status patron-dashboard-body-components-width">
                        <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                            Opportunities Status
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col patron-dashboard-opportunities-status-card-col">
                                    <div style={{marginLeft:"20px",height:"120px"}} className="card patron-dashboard-opportunities-status-card">
                                        <div style={{marginLeft:"20px"}} className="card-body">
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
                                                className="position-relative patron-dashboard-opportunities-status-body-footer" >
                                                <div
                                                    className="patron-dashboard-opportunities-status-opportunity-details position-absolute end-0">
                                                    <Link to="/Artist_search_opportunity">
                                                        View details
                                                        <img src="assets/images/rightArrow.png"
                                                            style={{width: "10px", height: "11px"}}/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col patron-dashboard-opportunities-status-card-col">
                                    <div style={{marginLeft:"10px",height:"120px"}} className="card patron-dashboard-opportunities-status-card">
                                        <div style={{marginLeft:"20px"}} className="card-body">
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
                                                    <Link to="/Artist_search_opportunity">
                                                        View details
                                                        <img src="assets/images/rightArrow.png"
                                                            style={{width: "10px", height: "11px"}}/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="position-relative patron-dashboard-opportunities-status-view-more">
                                <div className="position-absolute bottom-0 end-0">
                                    <Link to="/Artist_search_opportunity">
                                        View more
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="position-relative patron-dashboard-patron-upload-opportunities">
                        <div className="position-absolute bottom-0">
                            <Link to="/Artist_search_opportunity" className="btn btn-danger btn-new">
                                Apply for Opportunities
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col  container">
                    <div className="card patron-dashboard-hired-candidates">
                        <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                            Relevant Skills Training
                        </div>
                        <div  className="card-body">
                            <div className="row">
                                <div className="col">
                                    <div style={{marginLeft:"30px", height:"140px"}} className="card patron-dashboard-hired-candidates-card">
                                        <div style={{marginLeft:"10px"}} className="card-body">
                                            <div className="row patron-dashboard-hired-candidates-body-header">
                                                <div className="col patron-dashboard-hired-candidates-category">
                                                    Training 1
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col patron-dashboard-hired-candidates-salary-status">
                                                    <span>Company Name:<span>XYZ</span></span>
                                                </div>
                                                <div className="w-100"></div>
                                                <div className="col patron-dashboard-hired-candidates-status">
                                                    <span>Location: <span>Delhi</span></span>
                                                </div>
                                            </div>
                                            <div
                                                className="position-relative patron-dashboard-hired-candidates-body-footer">
                                                <div
                                                    className="patron-dashboard-hired-candidates-details position-absolute end-0">
                                                    <Link to="/Artist_relevantskill">
                                                        View details
                                                        <img src="assets/images/rightArrow.png"
                                                            style={{width:" 10px", height: "11px"}}/>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- <div className="position-relative patron-dashboard-hired-candidates-view-more">
                                <div className="position-absolute bottom-0 end-0">
                                    <Link to="relevantskill.html">
                                        View more
                                    </Link>
                                </div>
                            </div> --> */}
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

export default Artist_dashboard
