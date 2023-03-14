import React from "react";
import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "./Patron.css";

export default function Recentupdate() {
  return (
    <div>
      <nav
        className="navbar bg-light fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <div className="left-components">
            <Navbar className="nav_artist" />
            <Link to className="navbar-brand " href="index.html">
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

      <div className="alerts container">
        <div className="alerts-header container">
          <div className="row">
            <div className="col">
              <div className="search-data-text text-center">Recent updates</div>
            </div>
          </div>
        </div>
        <div className="view-contacted-alerts-body container">
          <div className="card alerts-card">
            <div className="card-body">
              <div
                style={{ marginLeft: "7px" }}
                className="row view-contacted-alerts-body-header"
              >
                <div className="col artist-name">Performance 1</div>

                <div className="w-100" />
                <div className="col alerts-status">
                  <span>
                    Event name <span className="alerts-status-in-touch"></span>{" "}
                  </span>
                </div>
                <div className="w-100" />
                <div className="col alerts-status mt-1">
                  <span>
                    Patron name <span className="alerts-status-in-touch"></span>{" "}
                  </span>
                </div>
              </div>
              <div className="row view-contacted-alerts-body-footer">
                <div className="col-auto me-auto alerts-location"></div>
                <div className="col-auto alerts-details"></div>
              </div>
            </div>
          </div>

          <div className="card alerts-card ">
            <div className="card-body">
              <div
                style={{ marginLeft: "7px" }}
                className="row view-contacted-alerts-body-header"
              >
                <div className="col artist-name">Performance 2</div>

                <div className="w-100" />
                <div className="col alerts-status">
                  <span>Event name </span>
                </div>
                <div className="w-100" />
                <div className="col alerts-status mt-1">
                  <span>Date </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
