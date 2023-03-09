import { Link } from 'react-router-dom'
import { useState, useEffect } from'react'
  import React from 'react'
  import Artist_Navbar from './Artist_Navbar'
  import './stylesheet.css'
  import './css_new.css'
  export default function Artist_search_opportunity() {
    const posted_by_email = localStorage.getItem('email');
    const [opportunityCards, setOpportunityCards] = useState([]);
    const [patronUser , setPatronUser] = useState({});
    const [artistemailID , setArtistemailID] = useState('');
    useEffect(()=>{
        async function fetchData(){
           let opportunityAllData2 = await fetch("http://localhost:4000/api/getAllOpportunities");
            opportunityAllData2 = await opportunityAllData2.json(); 
           const arrayrev2 = opportunityAllData2.data;
            setOpportunityCards(arrayrev2.reverse());
            console.log(arrayrev2);




            let opportunityAllData = await fetch("http://localhost:4000/api/getAllUsers");
            opportunityAllData = await opportunityAllData.json(); 
           const arrayrev = opportunityAllData.data;
          const obj = {};
          const artistuser = {};
           arrayrev.map((singledata , index)=>{
            if(singledata.role === 1)
            {
              obj[singledata.email] = singledata.patron.name_of_company;
            }
            if(singledata.role === 2)
            {
              artistuser[singledata._id] = singledata.email;
            }
            
           })
           setPatronUser(obj);
         
         setArtistemailID(artistuser[localStorage.getItem('_id')]);
        console.log(obj);
        console.log(artistuser);

          

            
        }
        fetchData();
      },[])
     

  return (
  <div>
    {/* Modal */}
    
    {/* <div className="modal fade filter-popup" id="staticBackdrop" data-bs-backdrop="static"  data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true" >
      <div className="modal-dialog  modal-dialog-centered filter-popup-dialog ">
        <div className="modal-content">
          <form action="#" id="filter-form ">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <div className="row filter-popup-header-text">
                  <div className="col filter-text">
                    FILTERS
                  </div>
                  <div type="reset" className="col-1 clear-text text-danger" onclick="clearForm()">
                    CLEAR ALL
                  </div>
                </div>
              </h1>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <div className="row justify-content-start">
                  <div className="col-2" id="patron-view-artist-filter-LocationInputLabel">
                    <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader">Location</label>
                  </div>
                  <div className="col-4 patron-view-artist-filter-inputbox" id="patron-view-artist-filter-inputBoxLocation">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Mumbai, India</option>
                      <option value={1}>One</option>
                      <option value={2}>Two</option>
                      <option value={3}>Three</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row ">
                  <div className="col-2" id="patron-view-artist-filter-ArtInputLabelSelect">
                    <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader"> Mode:
                    </label>
                  </div>
                  <div className="col" id="patron-view-artist-filter-inputBoxArt">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                      <label className="form-check-label" htmlFor="inlineRadio1">Online</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">offline </label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Hybrid</label>
                    </div>
                  </div>
               
                </div>
              </div>
              <div className="mb-3">
                <div className="row ">
                  <div className="col-2" id="patron-view-artist-filter-ArtInputLabelSelect">
                    <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader">Art</label>
                  </div>
                  <div className="col" id="patron-view-artist-filter-inputBoxArt">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                      <label className="form-check-label" htmlFor="inlineRadio1">Dance</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Music</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Singing</label>
                    </div>
                  </div>
                   <div class="col">
                              <select class="form-select see-more-text" aria-label="Default select example">
                                  <option selected class="text-danger">See more</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                              </select>
                          </div> 
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-2" id="patron-view-artist-filter-LanguageInputLabelSelect">
                    <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader">Language</label>
                  </div>
                  <div className="col" id="patron-view-artist-filter-inputBoxLanguage">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                      <label className="form-check-label" htmlFor="inlineRadio1">English</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Hindi</label>
                    </div>
                  </div>
                  <div className="col">
                    <div className="form-check form-check-inline">
                      <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                      <label className="form-check-label" htmlFor="inlineRadio2">Kannada</label>
                    </div>
                  </div>
                 
                </div>
              </div>
            
              <div className="mb-3">
                <div className="row justify-content-start">
                  <div className="col-2" id="patron-view-artist-filter-AgeInputLabelSelect">
                    <label htmlFor="exampleFormControlInput1" className="form-label patron-view-artist-filter-InputHeader">Age</label>
                  </div>
                  <div className="col-4 patron-view-artist-filter-inputbox" id="patron-view-artist-filter-inputBoxAge">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>30 years above</option>
                      <option value={1}>20 years above</option>
                      
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-danger">Apply Filters</button>
            </div>
          </form>
        </div>
      </div>
    </div> */}

    
    <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist" />
                <a className="navbar-brand"  href="/">
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
    <div className="patron-search-artist">
      <div className="patron-search-artist-header container">
        <div className="row">
          <div className="col">
            <span className="filter" id="filter-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              Filter
              <img src="assets/images/filter.png" />
            </span>
            <div className="search-data-text text-center">
              {opportunityCards.length} search result 
              <strong className="search-data-text-category"></strong>
            </div>
          </div>
        </div>
      </div>
      <div className="patron-search-artist-body container">
        {opportunityCards.map((singleoppo , index)=>(
          <div className="card artist-card">
          <div className="card-body">
            <div className="row patron-search-artist-body-header">
              <div className="col artist-name">
                {singleoppo.position}
              </div>
              <div className="w-100" />
              <div className="col artist-category">
                {singleoppo.posted_by_email}
              </div>
            </div>
            <div className="row patron-search-artist-body-footer">
              <div className="col-auto me-auto artist-location">
                <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="currentColor" className="bi bi-geo-alt-fill text-danger" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                {singleoppo.location}
              </div>
              <div className="col-auto artist-details">
                <Link to={`/Artist_viewdetailopp/${singleoppo._id}`} >
                  View details
                  <img src="assets/images/rightArrow.png" style={{width: 10, height: 11}}  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    </div>
  </div>
  )
     }
