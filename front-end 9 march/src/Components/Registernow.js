import React from "react";
import Navbar from "./Navbar";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "./Patron.css";

export default function Registernow() {
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
      <div className="Registernow-heading ">
        <h3>
          Register <span className="your-self">Your self</span>
        </h3>
      </div>
      <div className="text1"> Opporutinutes for </div>
      <div className="text2">Artists in Hindi Feature Film</div>
      <div className="para">
        eKalakaar.com aims for mainstreaming the traditional performing art in
        the world focusing on India. We want to create a creative and business
        environment by bringing the artists and technicians as well as
        filmmakers, production houses as well as customers to a common platform
        for mutual benefit. We understand the artist and market can come
        together for creating powerful content, which is useful for a larger
        audience.
      </div>
      <div div className=" btnregisternow    mt-5">
        <Link to="/Arti" className="btn btn-danger   ">
          Register Now
        </Link>
      </div>{" "}
    </div>
  );
}
