import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

// import './Navbar.css'
let Special_services_dashboard = () => {
  const [agencyName, setAgencyName] = useState("");
  const [location, setLocation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contacthere, setContactHere] = useState("");
  const [totaldata, setTotalData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      let artistinitialpage = await fetch(
        `http://localhost:4000/api/userdetail/${localStorage.getItem("_id")}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      artistinitialpage = await artistinitialpage.json();

      setTotalData(artistinitialpage);
      localStorage.setItem("isRegister", artistinitialpage.isRegistered);
      console.log(totaldata.special_services);
    };
    fetchData().then((d) => {
      setAgencyName(totaldata.special_services?.Agency_Name);
      setLocation(totaldata.special_services?.location);
      setContactNumber(totaldata.phoneno);
      setContactHere(totaldata.email);
    });
  }, [agencyName]);
  return (
    <div>
      {/* <div className="offcanvas offcanvas-start left-side-menu-bar" data-bs-scroll="true" data-bs-backdrop="true"
        tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                <a className="navbar-brand" style={{marginLeft: '17px'}} href="index.html">
                    <span className="text-danger text"> <strong>ekala</strong></span>kaar
                </Link>
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body container">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                <div className="accordion-item">
                    <a className="accordion-button collapsed menu-bar-options" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                        Profile
                    </Link>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                        data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={{marginLeft: '30px'}}>
                            <div style={{marginBottom: '10px'}}>
                                <Link to="#" className="menu-bar-options" style={{marginBottom: '5px'}}> View profile</Link>
                            </div>
                            <div>
                                <Link to="edit-patron-profile.html" className="menu-bar-options">Edit profile</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <Link to="patron-search-artist.html" className="menu-bar-options">Search artists</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="patron-view-applications.html" className="menu-bar-options">View applications</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="uploaded-opportunities.html" className="menu-bar-options">View uploaded opportunities</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="view-shortlisted-artist.html" className="menu-bar-options">Shortlisted artists</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="view-contacted-artist.html" className="menu-bar-options">Contacted artists</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="previously-hired-artist.html" className="menu-bar-options">Previously hired artists</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="chat.html" className="menu-bar-options">Chat</Link>
                    </li>
                </ul>
            </div>
        </div>
    </div> */}

      <nav
        className="navbar bg-light fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <div className="left-components">
            {/* <svg data-bs-toggle="offcanvas" aria-controls="offcanvasScrolling" data-bs-target="#offcanvasScrolling"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30" height="30" fill="currentColor" className="bi bi-list"
                    viewBox="0 0 16 16" style={{cursor: 'pointer'}}>
                    <path fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10 a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                </svg> */}
            <Navbar />
            <a
              className="navbar-brand "
              style={{ marginLeft: "57px", position: "fixed" }}
              href="index.html"
            >
              <span className="text-danger text">
                {" "}
                <strong>ekala</strong>
              </span>
              kaar
            </a>
          </div>
          <div
            className="right-component"
            style={{ right: "10px", top: "10px", position: "fixed" }}
          >
            <form className="d-flex" role="search">
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search artist"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger " type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="patron-dashboard">
        <div className="patron-dashboard-header">
          <div className="patron-dashboard-header-parent">
            <img
              className="patron-dashboard-header-background-img"
              src="assets/images/patron-dashboard-bg.png"
            />
            <div className="row container">
              <div className="col">
                {/* <!-- <img className="patron-dashboard-header-patron-img" src="assets/images/Linkb11.jpg"> --> */}
                <div className="row ml-5">
                  <div className="col text-center">
                    <img
                      className="patron-dashboard-header-patron-img "
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARsAAACyCAMAAABFl5uBAAAA+VBMVEX///8JGFlscJEWIV3e4OgMGlwAD1nm5uz/OwAAClWmqb3LAAAAFFiFiaVvdJX/tqn/MQAAAEv/6uT/2s7/YDUAAFMAAEgAAFD4+fuOkarv8PTQ0t0AEVcAB1Vma496fp2Ym7LExtPsq6v65+d+gZvY2uPZVVUuNmivssRRWIEAAEUlLmXTNzcSHVvljo7po6P42dk7Q3L87u4gKmS7vc1cYonUPT2eobZMU36prL//y77/e1j/oon/IAD/5d3jg4PdbGzRKSnzyMj/UiLgd3fvt7f/1Mf/aUL/r5v/l3v/vav/TxX/b0j/l304QXP/qpT/iGTZTk4AADztJNWvAAAJUElEQVR4nO2ca3ubRhaARx4EkSxU4wZx0Q02xkhWaKILldSkTdO02+226738/x+zc4YZGGTJsbP7CCqd94PDIILOvBrmxgAhCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCPKnYvFd1RHUl3dfVR1BbXn/Pbo5wHdXV8zN26rDqCM/vHgBbj78WHUg9WPxMnPzzeXtoupY6sa7K+nm8vWrqoOpF++ZGunm8iNWOgp/BzXczeKWybn8qeqA6sPXTMynT9wNIT+DnF+qDqkuLD4xN3/9Vbjhl9Xlm4pjqgusHr76G3kp3ZA3IOdDtTHVhN+Ymt+I4ob8AnJ+dCuNqhZAPfySlNyQn0AOdnSgHn5xTcpuyNuPl9jRuf4d6mHYKrkhi2+h6Jx3R+cPXg8DZTeE3J67nH9k9TCw64Z3dP5SQUw14Sum5lex/cCN+/qc3VxDf/haJNBNCXCTzxGjmxLg5muZQDcl0M1h0M1hDrnx+VAK3exzE92DHPcjuhEobjQ7BTlv0I1AddPUL+DfD+gmo+SGtrqwcXu+03+PuKG2yTYW5zup/pgb2vIqiqoePOqGtoJqoqoHj7lZssuqXVFcdeARN8lqmVB9UlFgNWDHzfdyTM7c6H6/mdBOWFFk1VN2c/VeboIbg4QJTVpnK6fk5tO7fH/mhqwGNKH9SiKrnpKbP4rbUcINmdg0mUVVRFY9JTfKnTrphqx1Jsc4fmA1oORGIXdDgiFtzPzjRlUPPu+GeDZtbM5RTtlNsTZAcUPGOtXHR46rDpTdpFu5pbohaaPRPXJcdaDkxrTzzkzJjdk5ezdb1l5T0V6jm5KbsMNG3kms8QS6Ud1oMzZASGhjzpskdKO4ce8btLUyh3SQQhLdKG7SAbUDQkaDbJ4Y3XA3v8MyCrNFdci/v+nwqVB0A26uYMpmq9POlPf8jDihQw3dMK6v/sn+hmxAGQsVUTPR0Q3ww7/YH421T818IiIcYLnhLBasjpk3qL0q9m0ddCNJO3QYqDu8CN1kQJ9mZ5jtohsOG0U1pg8eXEA3jLBJk+XDmSt0wxywoXeyZ64c3RCfjaIGqz0fnKMbLeznhC4Mn2AUtee4M3RjWkOJ4xhyFPWQc3TjDWiB2ZGjqAecrZuEAW6SYhS1y3m6aYxc3/fdyAY7A9lELV4VwO3Nc3XDNwxwUzRR/74sgNWPZ+9GWbJ2i25KblpKhtFNyU1nquxnbn5+C7xGN8RwSosjmJtv+Ma36IaVm9JyLHSjuikvAEU3ipsd0M2jbrAuPuzm7Ntwls0vdTPRjhZlJYRs5L3XzRPGDEF80ov+jFlSDC9LvPr8WHPtpCf8riB3CutInnToPjf6Ka+INHWqm087dJ+b1gk/bLayD07zPWCPG22ZUPtEHxmKhjR58gLzfW14BM9wnuRTMf49q4ef/EjL3v4NPBWzPMWnYkad5zxhuL/vt3Vocn96D354D1cEPMaBfnHQoo35qbXkITyw8YxMHRozjFt0MDotOdqS0mc9BWUcGk91G0/uB/w5cDcN2rzYtp/M1ktKbpKN+M/bYHlij413dUppo/UMBrTkhibKB/SUujlrp/EF2IUbe+ejjn4q3RxjdPEljPJ+4vbhCbqnVR8jCIIgCIIgyOnRX5s3QSh77m4Y3JjrfLryRh3u9MdwlHbD8VbFjLExzu/HrMz8TB4bR3rr/KB2fmvhJj+6P5Yn8c1A7oxu1LnoNZ9inNwIxkd8hU5/Yy2naWzNMwmreytO05k1F3Z0dc58Y0Gib01hjDR3Zrk305pJI0FPzgm6M7Y1ucvfvXAnjbjNlszg5E4OQydWS94JDu+UaZ3I4ndPx7oYiaXHm2XeMgssW26UOhCa10sjSDJj2eQBdYobSRPL4W56WXhG6og4fd1syrmGQLfEazrcGLI4lROfm1Sex10O5E3fiSXdbMaxNBI6w+KGeerwt5GO4/9Hbp9F2Mun4eCnnNwFMtnNDCT3tozTX85t1Q0hM5HdoOOOl0Ruj4SyzI3mZKcsLBA3GVHxP/O9oaVtHSEsHMYbeexqEAs3Rx+ux6XpbH9Z3P1353P4ZxCk8vf24olVdhN0eG7cmceKvrh2AtudZ3OmmRviOZDyaVH+3E4Q9rJk7maaEncQZNuhs3LE9efOgjS7po7uJror3dNe9ZSKbnIHCT3QelmuNTtc7bhpZ5NWkx7bPRVrRQOHaE2+Ldy4M/jhzVmRN7fjsYuXf7N0E0G1ZDazY0LLMIWKgLrTity07dKsuAyOYzhQb+iBDGs0JbtuzISXm3u4LkPhNXBcdhxYEW7YJyGrv5X2DtyQlF+r0s0FlF/NySot5sbNHon1rRWRbjSDczRFHi19VanC8xMIj7nxh9AOh05Edq4pw+aVVWjx9CyrucANa6wmhRuSxu78Qjkzd+PP4DUnwo2RWbngrw+HuodM+K92weod4aZl9YD/HO21pOtO6a72zVJJ+DooYW7IGipJyKjqxjUmM8ozJhqgLa9XMjesVESFG0PfDNTyyd2wotTN3XhN/kHf4hcauCHzkfimcrnRjraqKbwr9RbalpKFPu+ZgBsSj0lb93M3TgKT4I6V8qP7TqBFjH6Hq8jc+PHSzd2QdW+tfk3mhmx7Abv6soq6y0+hxVxzCDv7LLQNFMWq6htiq2WdGOqqmBH/Lbkb1nBQqHyEGysIV6tVKDx2B4kOdCjoE25I1BoVbqK7UmdWuCHmXT9zs3YoP4VO+TJuXm5Id7PlXYbK3Kyt/P4QfLfp5FXmpMevbO6GjFq8Qd9twwHNbvsZEW+DhRt2rDcv3JSKp3Tjbma8gWcdaHEK4x5+q8yN0bJ5aavMDRmJjgZpQ6fE3TiiUxv0sq5O5kbLmpl9bsxhHnQX2mnphoydxmfcEN+mQ3gNq5UXqzaMITI3xMuafenmf8zol+A5dne9NhMri3dsNW/W6+5QJMlQ/MT8L+/IiIpI4ItuLxD1toob1ts/5EaXl26/Bc1RnI8mWM0zhkZfU750k7lZbicZx1y1o3nTON6YcmQQmZs4nnoyGau16IqCm6iphNdW1w1AF3q9lG6MuVQQdcr1TRzIzfXSICFVXHtspBVStVUb8bGrGc8y6JGXF7juwWT5I1f5u+dzSCg7is2dukI9Zt9XuA8PdgsOZgNBEARBEARBEARBEARBEARBEARBEARBEAT5HP8FWDH7qNvqf1IAAAAASUVORK5CYII="
                    />
                  </div>
                  <div className="w-100"></div>
                  <div className="col patron-dashboard-header-patron-name-category">
                    <div className="patron-dashboard-header-patron-name">
                      {agencyName === "" ? "Please Register" : agencyName}
                    </div>
                    <div className="patron-dashboard-header-patron-category">
                      Position
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-auto patron-dashboard-header-company-name-col">
                <div className="patron-dashboard-header-company-name">
                  <img
                    src="assets/images/verified.png"
                    className="patron-dashboard-header-company-verified-icon"
                  />
                  {agencyName}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="patron-dashboard-body container ">
          <div className="row">
            <div className="col container patron-dashboard-body-col">
              <div className="card patron-dashboard-patron-account-info patron-dashboard-body-components-width">
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
                      {/* <Link to="#" style={{color: 'black', textDecoration: 'none'}}>
                                    <i className="bi bi-pen-fill "></i>
                                    </Link> */}
                    </div>

                    <div className="col space">
                      <label
                        for="validationCustom01"
                        className="form-label patron-dashboard-patron-account-info-input-lable"
                      >
                        Agency Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstname"
                        value={agencyName}
                        disabled
                      />
                    </div>
                    <div className="col space">
                      <label
                        for="validationCustom02"
                        className="form-label patron-dashboard-patron-account-info-input-lable"
                        placeholder="Location"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="Location"
                        value={location}
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
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={contactNumber}
                        disabled
                      />
                    </div>
                    <div className="col space">
                      <label
                        for="validationCustomUsername"
                        className="form-label patron-dashboard-patron-account-info-input-lable"
                      >
                        Contact Here
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
                          value={contacthere}
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  <div
                    className="row container patron-dashboard-patron-account-info-input-rows"
                    style={{ marginBottom: " 10px" }}
                  >
                    {/*<div className="col space">
                      <label
                        for="validationCustomUsername"
                        className="form-label patron-dashboard-patron-account-info-input-lable"
                      >
                        Mostly Hire For
                      </label>
                      <div className="input-group has-validation">
                        <input
                          type="text"
                          className="form-control"
                          name="text"
                          aria-describedby="inputGroupPrepend"
                          value="Dancer"
                          disabled
                        />
                      </div>
                                  </div>*/}
                  </div>
                </div>
                <div className="card-footer text-muted">
                  Last changed 2 days ago
                </div>
              </div>
              <div className="position-relative patron-dashboard-patron-account-info-edit-profile">
                <div className="position-absolute bottom-0">
                  <Link
                    to="edit-patron-profile.html"
                    className="btn btn-danger classbtn2"
                  >
                    Edit Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="col  container">
              <div className="card patron-dashboard-patron-relevant-kalakaars">
                <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                  Following Events
                </div>
                <div className="card-body">
                  <div className="row" style={{ marginBottom: "13px" }}>
                    <div className="col ml-2">
                      <img
                        className="patron-dashboard-patron-relevant-kalakaars-img"
                        src="data:image/jpeg;base64,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"
                        alt="event-image"
                      />
                    </div>
                    <div className="col-8 patron-dashboard-patron-relevant-kalakaars-name-detials">
                      <div className="patron-dashboard-patron-relevant-kalakaars-name fw-bold fs-5">
                        Event Name
                      </div>
                      <div>
                        <span>Location</span>
                      </div>
                      <div>
                        <span>Date</span>
                      </div>
                      <div className="patron-dashboard-patron-relevant-kalakaars-view-details-message-img">
                        <button
                          type="button"
                          class="btn btn-outline-danger"
                          style={{ fontSize: "14px" }}
                        >
                          Get Information
                        </button>
                        {/* <Link to="view-shortlisted-artist.html">
                                            <img className="patron-dashboard-patron-relevant-kalakaars-message"
                                                src="assets/images/messagebox.jpg" alt=""/>
                                        </Link> */}
                      </div>
                    </div>
                  </div>

                  <div className="row" style={{ marginBottom: "13px" }}>
                    <div className="col ml-2">
                      <img
                        className="patron-dashboard-patron-relevant-kalakaars-img"
                        src="data:image/jpeg;base64,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"
                        alt="event-image"
                      />
                    </div>
                    <div className="col-8 patron-dashboard-patron-relevant-kalakaars-name-detials">
                      <div className="patron-dashboard-patron-relevant-kalakaars-name fw-bold fs-5">
                        Event Name
                      </div>
                      <div>
                        <span>Location</span>
                      </div>
                      <div>
                        <span>Date</span>
                      </div>

                      <div className="patron-dashboard-patron-relevant-kalakaars-view-details-message-img">
                        <button
                          type="button"
                          class="btn btn-outline-danger"
                          style={{ fontSize: "14px" }}
                        >
                          Get Information
                        </button>
                        {/* <Link to="view-shortlisted-artist.html">
                                            <img className="patron-dashboard-patron-relevant-kalakaars-message"
                                                src="assets/images/messagebox.jpg" alt=""/>
                                        </Link> */}
                      </div>
                    </div>
                  </div>

                  <div className="position-relative patron-dashboard-patron-relevant-kalakaars-view-more">
                    <div className="position-absolute bottom-0 end-0">
                      {/* <Link to="view-shortlisted-artist.html">
                                        View More
                                    </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-100"></div>
            <div className="col container patron-dashboard-body-col">
              <div className="card patron-dashboard-opportunities-status patron-dashboard-body-components-width">
                <div className="card-header text-center patron-dashboard-body-all-card-header-text">
                  Opportunities Status
                </div>
                <div className="card-body ">
                  <div className="row ml-2">
                    <div className="col patron-dashboard-opportunities-status-card-col">
                      <div className="card patron-dashboard-opportunities-status-card">
                        <div className="card-body">
                          <div className="row patron-dashboard-opportunities-status-body-header">
                            <div className="col patron-dashboard-opportunities-status-opportunity-name ml-1">
                              Opportunity 1
                            </div>
                            <div className="w-100"></div>
                            <div className="col patron-dashboard-opportunities-status-no-of-position ml-1">
                              2 filled
                            </div>
                          </div>
                          <div className="position-relative patron-dashboard-opportunities-status-body-footer">
                            <div className="patron-dashboard-opportunities-status-opportunity-details position-absolute end-0">
                              {/* <Link to="uploaded-opportunities.html">
                                                        View details
                                                        <img src="assets/images/rightArrow.png"
                                                            style={{width: '10px', height:' 11px'}}/>
                                                    </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col patron-dashboard-opportunities-status-card-col">
                      <div className="card patron-dashboard-opportunities-status-card">
                        <div className="card-body">
                          <div className="row patron-dashboard-opportunities-status-body-header">
                            <div className="col patron-dashboard-opportunities-status-opportunity-name ml-1">
                              Opportunity 1
                            </div>
                            <div className="w-100"></div>
                            <div className="col patron-dashboard-opportunities-status-no-of-position ml-1">
                              2 filled
                            </div>
                          </div>
                          <div className="position-relative patron-dashboard-opportunities-status-body-footer">
                            <div className="patron-dashboard-opportunities-status-opportunity-details position-absolute end-0">
                              {/* <Link to="uploaded-opportunities.html">
                                                        View details
                                                        <img src="assets/images/rightArrow.png"
                                                            style={{width: '10px', height: '11px'}}/>
                                                    </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative patron-dashboard-opportunities-status-view-more">
                    <div className="position-absolute bottom-0 end-0">
                      <Link to="uploaded-opportunities.html">View more</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="position-relative patron-dashboard-patron-upload-opportunities">
                <div className="position-absolute bottom-0">
                  <Link
                    to="upload_opportunities.html"
                    className="classbtn btn btn-danger"
                  >
                    Upload Opportunities
                  </Link>
                </div>
              </div>
            </div>
            <div className="col  container">
              <div className="card patron-dashboard-hired-candidates">
                <div className="card-header text-center patron-dashboard-body-all-card-header-text fw-bold">
                  Course Detail
                </div>
                <div className="card-body ml-3">
                  <div className="row">
                    <div className="col">
                      <div className="card patron-dashboard-hired-candidates-card">
                        <div className="card-body">
                          <div className="row patron-dashboard-hired-candidates-body-header">
                            <div className="col patron-dashboard-hired-candidates-category ml-1 ">
                              Course Name
                            </div>
                            <div className="w-100"></div>
                            <div className="col patron-dashboard-hired-candidates-salary-status ml-1">
                              <span>Course Fees</span>
                            </div>
                            <div className="w-100"></div>
                            <div className="col patron-dashboard-hired-candidates-status ml-1">
                              <span>
                                Course Duration : <span>3 Months</span>
                              </span>
                            </div>
                          </div>
                          <div className="position-relative patron-dashboard-hired-candidates-body-footer">
                            <div className="patron-dashboard-hired-candidates-details position-absolute end-0 ">
                              {/* <Link to="previously-hired-artist.html">
                                                        View details
                                                        <img src="assets/images/rightArrow.png"
                                                            style={{width: '10px', height: '11px'}}/>
                                                    </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="position-relative patron-dashboard-hired-candidates-view-more">
                    <div className="position-absolute bottom-0 end-0">
                      {/* <Link to="previously-hired-artist.html">
                                        View more
                                    </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special_services_dashboard;
