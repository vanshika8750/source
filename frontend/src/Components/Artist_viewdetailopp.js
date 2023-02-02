
  import React from 'react'
  import {Link } from 'react-router-dom'
  import './Artist.css'
  import Artist_Navbar from './Artist_Navbar'
  export default function Artist_viewdetailopp() {
  return (
  <div>
   
   <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist" />
                <a className="navbar-brand " href="/">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component">
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search artist" aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search " type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>

    <div className="container" style={{marginTop: '90px'}}>
      <div style={{textAlign: 'center'}} className="m-3 ">
        <h1 style={{fontWeight: '800 !important'}}>Background Dancer at Company Name , Location</h1>
      </div>
      <div style={{backgroundColor: 'white'}} className="p-4">
        <div>
          {/* Company Name  */}
          {/* Background Dancer */}
          <div style={{display: 'flex', justifyContent: 'space-between', margin: '0 2rem'}}>
            <h4>BackGround Dancer</h4>
            <p>Company Name</p>
          </div>
          {/* image */}
          <div>
            <img src alt />
          </div> 
        </div>
        <div className="card p-3 m-2">
          <div className="card-header " style={{display: 'flex'}}>
            <div style={{width: '50%'}}>
              <h2>
                <i className="bi bi-geo-alt-fill" style={{color: 'red'}} /> Location
              </h2>
            </div>
            <div style={{display: 'flex', width: '50%', justifyContent: 'right'}}>
              <Link to id="cardheaderimg" style={{fontSize: '1.5rem', marginRight: '1rem', color: 'black'}}>
                <i className="bi bi-bookmark h-25" />
              </Link>
              <Link to id="cardheaderimg" style={{fontSize: '1.5rem', color: 'black'}}>
                <i className="bi bi-send" />
              </Link>
            </div>
          </div>
          <div className="p-3">
            {/* location */}
            <div>
              <h4 style={{fontWeight: '700 !important'}}> About Company</h4>
              <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptatem, tempora beatae dignissimos suscipit sequi necessitatibus velit dolor et doloribus! </p>
            </div>
            {/* About Company */}
            <div>
              <h4 style={{fontWeight: '700 !important'}}> About the job </h4>  
              {/* list-Items */}
              <div>
                <ol type={1}>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem, ipsum.</li>
                  <li>Lorem ipsum dolor sit.</li>
                </ol>
              </div>
              <div>
                <h4>Duration</h4>
                <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo obcaecati incidunt praesentium repellendus eaque temporibus minus porro officia. Autem aut architecto voluptate similique hic dolore exercitationem reprehenderit ex voluptatum nemo?</p>
              </div>
              <div>
                <h4>Number</h4>
                <p>4</p>
              </div>
              <div>
                <h4>Further details Link to Documents</h4>
                <input id="inputTag" type="text" placeholder="Link to Document" style={{width: '40%', height: 50, fontSize: 20, backgroundColor: 'rgba(154, 150, 150, 0.297)', padding: 5}} />
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center'}}>
            <Link to="/Artist_application" className="btn btn-danger btn-lg"> Apply Now</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
  }
