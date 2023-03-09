import React, { Component, useEffect, useState } from "react";
import Artist_Navbar from "./Artist_Navbar";
import { Link, useParams } from "react-router-dom";
import "./stylesheet.css";

export default function Artist_profile() {
  const [userDetails, setUserDetails] = useState("");
  useEffect(() => {
    async function fetchData() {
      let user = await fetch(
        `http://localhost:4000/api/userdetail/${localStorage.getItem("_id")}`
      );
      user = await user.json();
      setUserDetails(user);
      console.log(user);
    }
    fetchData();
  }, []);
  return (
    <div>
      <nav
        className="navbar bg-light fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <div className="left-components">
            <Artist_Navbar className="nav_artist" />
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
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search Opportunities
                    "
                aria-label="Search"
              />
              <button
                className="btn btn-outline-danger btn-search "
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="patron-view-application">
        <div className="patron-view-application-heading text-center">
          Profile View
        </div>
        <div className="container patron-view-application-body-container">
          <div className="horizontal-design container">
            <div className="patron-view-application-artist-name-profession">
              <div className="patron-view-application-artist-name">
                {userDetails.name} {userDetails.middlename}{" "}
                {userDetails.lastname}
              </div>
              <div className="patron-view-application-artist-profession">
                {userDetails?.artist?.category}
              </div>
            </div>
          </div>
          <div className="vertical-design">
            <img
              src="assets/images/abt1.jpg"
              className="patron-view-application-artist-image"
            />
          </div>
          <div className="patron-view-application-artist-details">
            <div className="patron-view-application-artist-details-arrow-head">
              <img
                src="assets/images/rightArrowBlack.png"
                alt
                className="patron-view-application-artist-details-arrow"
              />
              <span className="patron-view-application-artist-details-head">
                EDUCATION
              </span>
            </div>
            <div className="patron-view-application-artist-details-body">
              {userDetails?.artist?.education} University
            </div>
            <div className="patron-view-application-artist-details-arrow-head">
              <img
                src="assets/images/rightArrowBlack.png"
                alt
                className="patron-view-application-artist-details-arrow"
              />
              <span className="patron-view-application-artist-details-head">
                SKILLS &amp; EXPERIENCE
              </span>
            </div>
            <div className="patron-view-application-artist-details-body">
              {userDetails?.artist?.skills.map((each) => {
                return (
                  <>
                    <li>{each}</li>
                  </>
                );
              })}
            </div>
            <div className="patron-view-application-artist-details-body">
              {userDetails?.artist?.experince} Years
            </div>
            <div className="patron-view-application-artist-details-arrow-head">
              <img
                src="assets/images/rightArrowBlack.png"
                alt
                className="patron-view-application-artist-details-arrow"
              />
              <span className="patron-view-application-artist-details-head">
                {" "}
                PERSONAL DETAILS
              </span>
            </div>
            <div className="patron-view-application-artist-details-body">
              Religion : {userDetails?.artist?.religion}
            </div>
            <div className="patron-view-application-artist-details-body">
              Caste : {userDetails?.artist?.caste}
            </div>
            <div className="patron-view-application-artist-details-body">
              Height : {userDetails?.artist?.height}
            </div>
            <div className="patron-view-application-artist-details-body">
              Weight : {userDetails?.artist?.weight}
            </div>
            <div className="patron-view-application-artist-details-body">
              Language : {userDetails?.artist?.language}
            </div>
            <div className="patron-view-application-artist-details-arrow-head">
              <img
                src="assets/images/rightArrowBlack.png"
                alt
                className="patron-view-application-artist-details-arrow"
              />
              <span className="patron-view-application-artist-details-head">
                {" "}
                SOCIAL MEDIA LINKS
              </span>
            </div>
            <div className="patron-view-application-artist-details-body">
              link1 :{" "}
              <a href={userDetails?.artist?.url}>{userDetails?.artist?.url}</a>
            </div>
            <div className="patron-view-application-artist-details-body">
              link2
            </div>
            <div className="patron-view-application-artist-details-arrow-head">
              <img
                src="assets/images/rightArrowBlack.png"
                alt
                className="patron-view-application-artist-details-arrow"
              />
              <span className="patron-view-application-artist-details-head">
                Phone no
              </span>
            </div>
            <div className="patron-view-application-artist-details-body">
              {userDetails?.phoneno}
            </div>
            <div className="patron-view-application-artist-details-body">
              {userDetails?.email}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
