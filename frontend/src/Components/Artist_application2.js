import React, { Component } from 'react'
import Artist_Navbar from './Artist_Navbar'
import { Link } from 'react-router-dom'

export class Artist_application2 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist"/>
                <a className="navbar-brand "  href="/">
                    <span className="text-danger text" > <strong>ekala</strong></span>kaar
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
        <div className="responsive"  style= {{ height: "90vh ", display: "flex", alignItems: "center",  justifyContent: "center"}} >
        
        <div className=" mt-4 " style={{width:" 100%"}}>
            <h4 style={{textAlign : "center"}}>Application </h4>
            <span style={{textAlign: "center", display: "block"}}>Step2</span>
            <form id="algin-form" className="p-4">
                <div className="form-group">
                    <h4>Why should you be hired ? </h4>
           
                    <textarea name="msg"  cols="40" rows="10" className="form-control"  style={{resize: "none", scrollBehavior:" smooth",backgroundColor: "white"}}></textarea>
                </div>
              
            </form>
            <div style={{width: "100%",textAlign: "center"}}>
          
                <Link to="/Artist_application_submit"><button type="button" className="btn btn-danger btn-lg btn-new"  >Submit</button></Link>
            </div>
        </div>
    </div>
      </div>
    )
  }
}

export default Artist_application2
