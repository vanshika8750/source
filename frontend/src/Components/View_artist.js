import React from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import { Link } from 'react-router-dom'
import './Patron.css'
export default function View_artist() {
  return (
    <div>
<nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               
                <Navbar className="nav_artist" />
                <Link className="navbar-brand "  to="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </Link>
            </div>
            <div className="right-component" >
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div className="view-artist">
        <div className="view-artist-header">
            <div className="text-center">
                <div className="view-artist-top-text">
                    Name, Dancer at
                </div>
                <div className="view-artist-bottom-text">
                    Location
                </div>
            </div>
        </div>
        <div className="view-artist-body">
            <div className="card artist-card mx-auto">
                <div className="card-body">
                    <div className="row patron-view-artist-body-header">
                        <div className="col-auto me-auto ">
                            <p><span className="artist-name">Name</span><span className="artist-category">Dancer</span></p>
                        </div>
                        <div className="col-auto artist-name">
                            <img className="view-artist-image" src="assets/images/Linkbt1.jpg" width="50px" height="50px"/>
                        </div>
                    </div>
                </div>

                <div style={{borderWidth:"1px"}} className="card artist-details-card">
                    <div style={{marginLeft:"10px"}} className="card-body">
                        <div className="card-body-content">
                            <div className="row view-artist-body-header">
                                <div className="col-auto me-auto artist-location">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                                        <path
                                            d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                    </svg>
                                    Location
                                </div>
                                <div className="col-auto">
                                    <span className="view-artist-body-header-left-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" className="bi bi-bookmark" viewBox="0 0 16 16">
                                            <path
                                                d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
                                        </svg>
                                    </span>
                                    <span className="view-artist-body-header-left-button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            fill="currentColor" className="bi bi-send" viewBox="0 0 16 16">
                                            <path
                                                d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                        </svg>
                                    </span>

                                </div>

                            </div>

                            {/* <!-- About artist --> */}
                            <div className="row">
                                <div className="col view-artist-info-title">
                                    About artist
                                </div>
                                <div className="w-100"></div>
                                <div className="col view-artist-info-body">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloremque
                                    praesentium
                                    sed culpa ipsum perferendis nemo doloribus illum beatae nostrum.
                                </div>
                            </div>
                            {/* <!-- Artist skills--> */}
                            <div className="row">
                                <div className="col view-artist-info-title">
                                    Skils
                                </div>
                                <div className="w-100"></div>
                                <div className="col view-artist-info-body">
                                    <div className="row">
                                        <div className="col">
                                            1. Lorem ipsum dolor sit amet.
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col">
                                            2. Lorem ipsum dolor sit.
                                        </div>
                                        <div className="w-100"></div>
                                        <div className="col">
                                            3. Cumque sint dolore eius delectus reiciendis repellat molestiae!
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Artist resume--> */}
                            <div className="row">
                                <div className="col view-artist-info-title">
                                    Resume
                                </div>
                                <div className="w-100"></div>
                                <div className="col view-artist-info-body">
                                    (link to resume)
                                </div>
                            </div>
                            {/* <!-- Artist skills--> */}
                            <div className="row">
                                <div className="col view-artist-info-title">
                                    Visiting card
                                </div>
                                <div className="w-100"></div>
                                <div className="col view-artist-info-body">
                                    (link to visiting card)
                                </div>
                            </div>
                        </div>
                        <div className="d-grid gap-1 d-md-flex justify-content-center edit-patron-profile-save-changes">
                            <button className="btn_hire" >
                                Hire Kalakaar
                            </button>
                            <button className="btn_remove">
                                Remove Kalakaar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}
