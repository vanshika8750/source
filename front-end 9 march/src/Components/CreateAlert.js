import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "./Patron.css";

export default function CreateAlert() {
  return (
    <div>
      <nav
        className="navbar bg-light fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <div className="left-components">
            <Navbar className="nav_artist" />
            <Link className="navbar-brand " to="index.html">
              <span className="text-danger text">
                {" "}
                <strong>ekala</strong>
              </span>
              kaar
            </Link>
          </div>
          <div className="right-component">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search artist"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-danger btn-search"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className=" create-alerts-header container ">
        <h2>Create Alert</h2>
      </div>

      <div className="box-body">
        <div className="row filter-popup-header-text">
          <div className="col filter-text mb-1 ">FILTERS</div>
          <div
            type="reset"
            className="col clear-text text-danger mb-1"
            onclick="clearForm()"
          >
            CLEAR ALL
          </div>
        </div>
        <hr className="hr"></hr>
        <div className="modal-body ms-1">
          <div className="mb-3">
            <div
              className="col-2"
              id="patron-view-artist-filter-LocationInputLabel"
            >
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label patron-view-artist-filter-InputHeader"
              >
                Location
              </label>
            </div>
            <div
              className="col-4 patron-view-artist-filter-inputbox"
              id="patron-view-artist-filter-inputBoxLocation"
            >
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Mumbai, India</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
          </div>
          <div className="mb-3">
            <div className="row ">
              <div
                className="col-2"
                id="patron-view-artist-filter-ArtInputLabelSelect"
              >
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label patron-view-artist-filter-InputHeader"
                >
                  Art
                </label>
              </div>
              <div className="col" id="patron-view-artist-filter-inputBoxArt">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    defaultValue="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    Dance
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Music
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Singing
                  </label>
                </div>
              </div>
              <div className="col">
                <select
                  className="form-select see-more-text"
                  aria-label="Default select example"
                >
                  <option selected className="text-danger">
                    See more
                  </option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="row">
              <div
                className="col-2"
                id="patron-view-artist-filter-LanguageInputLabelSelect"
              >
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label patron-view-artist-filter-InputHeader"
                >
                  Language
                </label>
              </div>
              <div
                className="col"
                id="patron-view-artist-filter-inputBoxLanguage"
              >
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    defaultValue="option1"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio1">
                    English
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Hindi
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    defaultValue="option2"
                  />
                  <label className="form-check-label" htmlFor="inlineRadio2">
                    Kannada
                  </label>
                </div>
              </div>
              <div className="col">
                <select
                  className="form-select see-more-text"
                  aria-label="Default select example"
                >
                  <option selected>See more</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="row">
              <div className="col">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label patron-view-artist-filter-InputHeader ms-3"
                >
                  Requirements
                </label>
              </div>
            </div>
            <div className="row justify-content-start">
              <div
                className="col-2"
                id="patron-view-artist-filter-ExperienceInputLabelSelect"
              >
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label patron-view-artist-filter-InputHeader"
                >
                  {" "}
                  Experience
                </label>
              </div>
              <div
                className="col-4 patron-view-artist-filter-inputbox"
                id="patron-view-artist-filter-inputBoxExperience"
              >
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>1 yr, above</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="row justify-content-start">
              <div
                className="col-2"
                id="patron-view-artist-filter-AgeInputLabelSelect"
              >
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label patron-view-artist-filter-InputHeader"
                >
                  Age
                </label>
              </div>
              <div
                className="col-4 patron-view-artist-filter-inputbox"
                id="patron-view-artist-filter-inputBoxAge"
              >
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  <option selected>&gt;35 years</option>
                  <option value={1}>One</option>
                  <option value={2}>Two</option>
                  <option value={3}>Three</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        {/* 
       <div div className="position-absolute bottom-0">
                                    <Link to="/Artist_edit_profile" className="btn btn-danger btn-new btn_art_reg">
                                        Edit Profile
                                    </Link>

                                </div> */}
        <div className="modal-footer  btnalert">
          <button type="button" className="btn btn-danger">
            Create Alert
          </button>
        </div>
      </div>
    </div>
  );
}
