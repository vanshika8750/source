import React, { useEffect, useState } from "react";
import { Component } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

import "./Navbar.css";
import { Link } from "react-router-dom";
import "./Patron.css";

export default function Patron_dashboard() {
  const [artistname, setArtistName] = useState("");
  const [artistlname, setArtistlame] = useState("");
  const [artist_email, setArtistEmail] = useState("");
  const [artist_phone, setArtistPhone] = useState("");
  const [patronnmaeofcompany, setPatronnmaeofcompany] = useState("");
  const [rtistexperience, setArtistExp] = useState("");
  const [hiredEmplayee, setHiredEmployee] = useState("");
  const [mostlyhiredfor, setMostHiredFor] = useState("");
  const [totaldata, setTotalData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let artistinitialpage = await fetch(
        `http://localhost:4000/api/patron/${localStorage.getItem("_id")}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      artistinitialpage = await artistinitialpage.json();
      console.log(artistinitialpage);
      setTotalData(artistinitialpage);

      console.log(totaldata);
    };
    fetchData().then((d) => {
      setArtistName(totaldata.name);
      setArtistlame(totaldata.lastname);
      setArtistPhone(totaldata.phoneno);
      setArtistEmail(totaldata.email);
      setPatronnmaeofcompany(totaldata.patron.name_of_company);
    });
  }, [artist_email]);

  let [recent, setRecent] = useState([]);

  useEffect(() => {
    let getLatestOpp = async () => {
      let data = await fetch(
        `http://localhost:4000/api/users/opportunity/recentlyPostedOpportunities/${localStorage.getItem(
          "_id"
        )}`
      );
      let json = await data.json();
      json = json.data;
      setRecent(json);
    };

    getLatestOpp();
  }, []);

  let [recentArtist, setRecentArtist] = useState([]);

  useEffect(() => {
    let recentApplied = async () => {
      let data = await fetch(
        "http://localhost:4000/api/users/opportunity/recentlyAppliedArtist"
      );
      let json = await data.json();
      setRecentArtist(json.data);
    };
    recentApplied();
  }, []);

  let [recentHire, setRecentHire] = useState({});

  useEffect(() => {
    let recentHired = async () => {
      let data = await fetch(
        "http://localhost:4000/api/users/opportunity/recentlyHiredArtist"
      );
      let json = await data.json();
      setRecentHire(json.data[0]);
      console.log(json.data[0]);
    };
    recentHired();
  }, []);

  const navigate = useNavigate();
  const handleLogout = async () => {
    console.log("Logging out");

    localStorage.clear();
    navigate("/Login");
  };

  let [size, setSize] = useState(window.screen.width);
  window.onresize = () => {
    setSize(window.innerWidth);
  };
  console.log(size);

  return (
    <div>
      <nav
        className="navbar bg-light fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <div className="left-components">
            <Navbar className="nav_artist" />
            <a className="navbar-brand " href="/">
              <span className="text-danger text">
                {" "}
                <strong>ekala</strong>
              </span>
              kaar
            </a>
          </div>
          <div className="right-component">
            <form className="d-flex" role="search">
              <button
                className="btn btn-outline-danger btn-search"
                onClick={handleLogout}
                type="submit"
              >
                Log Out
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="patron-top-image">
        <img src="assets/images/patron-dashboard-bg.png"></img>
      </div>
      <div className="patron-profile">
        <div className="patron-profile-image">
          <img src="assets/images/Linkb11.jpeg" />
        </div>
        <h2 className="patron-name">
          {artistname} {artistlname}
        </h2>
        <p>Hiring manager</p>
      </div>
      <div className="dashboard-top">
        <div className="patron-profile-details">
          <h1>Your Information</h1>
          <table className="patron-detail-table">
            {size > 996 ? (
              <tr>
                <td>Firstname: </td>
                <td>
                  <input disabled value={artistname} />
                </td>
                <td style={{ columnGap: "1rem" }}>Lastname: </td>
                <td>
                  <input disabled value={artistlname} />
                </td>
              </tr>
            ) : (
              <>
                <tr>
                  <td>Firstname: </td>
                  <td>
                    <input disabled value={artistname} />
                  </td>
                </tr>
                <tr>
                  <td>Lastname: </td>
                  <td>
                    <input disabled value={artistlname} />
                  </td>
                </tr>
              </>
            )}
            {size > 996 ? (
              <tr>
                <td>Phone Number: </td>
                <td>
                  <input disabled value={artist_phone} />
                </td>
                <td>Email: </td>
                <td>
                  <input disabled value={artist_email} />
                </td>
              </tr>
            ) : (
              <>
                <tr>
                  <td>Phone Number: </td>
                  <td>
                    <input disabled value={artist_phone} />
                  </td>
                </tr>
                <tr>
                  <td>Email: </td>
                  <td>
                    <input disabled value={artist_email} />
                  </td>
                </tr>
              </>
            )}
            <tr>
              <td>Company: </td>
              <td>
                <input disabled value={patronnmaeofcompany} />
              </td>
            </tr>
          </table>
          <div className="table-btns">
            <Link to="/Patron_Registration">Patron Registration</Link>
            <Link to="/Edit_patron_profile">Edit Profie</Link>
          </div>
        </div>
        <div className="relevant-artist">
          <h2>Relevant Artist</h2>
          <div className="rel-artist-details">
            {recentArtist.map((each) => {
              return (
                <>
                  <div className="artist-detail">
                    <h3>
                      {each?.name} {each?.middlename} {each?.lastname}
                    </h3>
                    <p className="rel-artist-name">{each?.email}</p>
                    <p>{each?.phoneno}</p>
                  </div>
                </>
              );
            })}
          </div>
          <Link to="/View_contacted_artist">View More</Link>
        </div>
      </div>
      <div className="artist-detail-wrap">
        <div className="opp-status">
          <h2>Opportunities Status</h2>
          <div className="opp-details">
            {recent.map((each) => {
              return (
                <>
                  <div className="opp-detail">
                    <h2>{each?.position}</h2>
                    <p className="opp-name">{each?.location}</p>
                    <p>{each?.type}</p>
                  </div>
                </>
              );
            })}
          </div>
          <Link to="/Uploaded_Opportunities">View More</Link>
        </div>
        <div className="hired-artist">
          <h2>Hired Artist </h2>
          <p className="opp-name">{recentHire?.artist?.pno}</p>
          <p className="artist-location">{recentHire?.email}</p>
          <Link to="/Previously_hired_artist">View more</Link>
        </div>
      </div>
      {/* <div className="patron-dashboard">
        <div className="patron-dashboard-header">
          <div className="patron-dashboard-header-parent">
            <img
              className="patron-dashboard-header-background-img"
              src="assets/images/patron-dashboard-bg.png"
            />
            <div className="row container">
              <div className="col" style={{ margin: "20px" }}>
                <div className="row">
                  <div className="col">
                    <img
                      className="patron-dashboard-header-patron-img"
                      src="assets/images/Linkb11.jpeg"
                    />
                  </div>
                  <div className="w-100"></div>
                  <div
                    className="col patron-dashboard-header-patron-name-category"
                    style={{ marginLeft: "10px", marginTop: "-8px" }}
                  >
                    <div className="patron-dashboard-header-patron-name">
                      {artistname} {artistlname}
                    </div>
                    <div className="patron-dashboard-header-patron-category">
                      Hiring manager
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto patron-dashboard-header-company-name-col">
                <div className="patron-dashboard-header-company-name">
                  {patronnmaeofcompany ? (
                    <>
                      <img
                        src="assets/images/verified.png"
                        className="patron-dashboard-header-company-verified-icon"
                      />
                      {patronnmaeofcompany}
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ marginTop: "45px" }}
          className="patron-dashboard-body container"
        >
          <span className="text-danger ">Complete</span> Your profile
          <div className="row">
            <div className="col container patron-dashboard-body-col">
              <div
                style={{ borderWidth: "1px" }}
                className="card patron-dashboard-patron-account-info patron-dashboard-body-components-width"
              >
                <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                  Your Information
                </div>
                <div className="card-body">
                  <div className="progress" style={{ height: " 24px" }}>
                    <div
                      className="progress-bar bg-danger"
                      role="progressbar"
                      aria-label="Danger example"
                      style={{ width: "25%" }}
                      aria-valuenow="25"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      25%
                    </div>
                  </div>
                  <div
                    className="row container patron-dashboard-patron-account-info-input-rows"
                    id="inputs"
                    style={{ marginBottom: " 10px" }}
                  >
                    <div className="col-12 text-end" style={{ margin: "2%" }}>
                      <Link
                        to="#"
                        style={{ color: "black", textDecoration: "none" }}
                      >
                        <i className="bi bi-pen-fill "></i>
                      </Link>
                    </div>

                    <div className="col space">
                      <label
                        for="validationCustom01"
                        className="form-label patron-dashboard-patron-account-info-input-lable"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        value={artistname}
                        disabled
                      />
                    </div>
                    <div className="col space">
                      <label
                        for="validationCustom02"
                        className="form-label patron-dashboard-patron-account-info-input-lable"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastname"
                        value={artistlname}
                        disabled
                      />
                    </div>
                  </div>
                  <div
                    className="row container patron-dashboard-patron-account-info-input-rows"
                    style={{ marginBottom: " 10px" }}
                  >
                    <div className="col space">
                      <label
                        for="validationCustom02"
                        className="form-label patron-dashboard-patron-account-info-input-lable"
                      >
                        Phone number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={artist_phone}
                        disabled
                      />
                    </div>
                    <div className="col space">
                      <label
                        for="validationCustomUsername"
                        className="form-label patron-dashboard-patron-account-info-input-lable"
                      >
                        Email id
                      </label>
                      <div className="input-group has-validation">
                        <span
                          className="input-group-text"
                          id="inputGroupPrepend"
                        >
                          @
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          name="email"
                          aria-describedby="inputGroupPrepend"
                          value={artist_email}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="row container patron-dashboard-patron-account-info-input-rows"
                    style={{ marginBottom: " 10px" }}
                  >
                    <div className="col space">
                      <label
                        for="validationCustomUsername"
                        className="form-label patron-dashboard-patron-account-info-input-lable"
                      >
                        Company name
                      </label>
                      <div className="input-group has-validation">
                        <input
                          type="text"
                          className="form-control"
                          name="text"
                          value={patronnmaeofcompany}
                          aria-describedby="inputGroupPrepend"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative patron-dashboard-patron-account-info-edit-profile">
                <div className="position-absolute bottom-0">
                  <Link
                    to="/Edit_patron_profile"
                    className="btn btn-danger btn-new btn_art_reg"
                  >
                    Edit Profile
                  </Link>
                  <Link
                    to="/Patron_Registration"
                    className="btn btn-danger mx-4 btn-new btn_art_reg"
                  >
                    Patron Registration
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "8px" }} className="col  container">
              <div
                style={{ borderWidth: "1px" }}
                className="card patron-dashboard-patron-relevant-kalakaars"
              >
                <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                  Relevant Kalakaars
                </div>
                <div style={{ marginLeft: "15px" }} className="card-body">
                  
                  {recentArtist.map((each) => {
                    return (
                      <>
                        <div className="row">
                          <div
                            className="col"
                            style={{
                              border: "1px solid black",
                              margin: "0.5rem",
                              padding: "0.5rem",
                              borderRadius: "8px",
                            }}
                          >
                            <div>
                              {each?.name} {each?.middlename} {each?.lastname}
                            </div>
                            <div>{each?.email}</div>
                            <span>{each?.phoneno}</span>
                          </div>
                        </div>
                      </>
                    );
                  })}
                  <div className="position-relative patron-dashboard-patron-relevant-kalakaars-view-more">
                    <div className="position-absolute bottom-0 end-0">
                      <Link to="View_shortlisted_artist">View More</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col container patron-dashboard-body-col">
              <div
                style={{ borderWidth: "1px" }}
                className="card patron-dashboard-opportunities-status patron-dashboard-body-components-width"
              >
                <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                  Opportunities Status
                </div>
                <div className="card-body">
                  
                  <div className="row" style={{ padding: "1rem" }}>
                    {recent?.map((each) => {
                      return (
                        <>
                          <div
                            className="col"
                            style={{
                              border: "1px solid black",
                              margin: "0.5rem",
                              padding: "0.5rem",
                              borderRadius: "8px",
                            }}
                          >
                            <h2>{each?.position}</h2>
                            <div>{each?.location}</div>
                            <div>{each?.type}</div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                  <div className="position-relative patron-dashboard-opportunities-status-view-more">
                    <div className="position-absolute bottom-0 end-0">
                      <Link to="Uploaded_Opportunities">View more</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative patron-dashboard-patron-upload-opportunities">
                <div className="position-absolute bottom-0">
                  <Link
                    to="/Upload_Opportunity"
                    className="btn btn-new btn-danger"
                  >
                    Upload Opportunities
                  </Link>
                </div>
              </div>
            </div>
            <div style={{ marginLeft: "8px" }} className="col  container">
              <div
                style={{ borderWidth: "1px" }}
                className="card patron-dashboard-hired-candidates"
              >
                <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                  Hired Candidates
                </div>
                <div className="card-body">
                  <div className="row">
                    <div>{recentHire?.email}</div>
                    <div>{recentHire?.artist?.pno}</div>
                  </div>
                  <div className="position-relative patron-dashboard-hired-candidates-view-more">
                    <div className="position-absolute bottom-0 end-0">
                      <Link to="/Previously_hired_artist">View more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
         
    </div>
  );
}
