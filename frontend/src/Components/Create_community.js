import React from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import { Link } from 'react-router-dom'
import './Patron.css'
export default function Create_community() {
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
                    Create your own community
                </div>
                
            </div>
        </div>
        <div className="view-artist-body">
            <div className="card artist-card mx-auto">
                    <div style={{marginLeft:"10px"}} className="card-body">
                        <div className="card-body-content">
                            <div className="row">
                           <label htmlFor="name_comm">
                            Name (upto 40 characters):
                           </label>
                           <input type="text" name="name_comm" id="name_comm" style={{border:"2px solid grey",width:"50%",marginLeft:"20px"}}/>
                           </div>
                    </div>
               
            </div>
        </div>
    
</div></div>
    </div>
  )
}
