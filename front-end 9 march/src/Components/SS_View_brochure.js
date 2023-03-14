import React, { Component } from "react";
import SS_View_brochure2 from "./SS_View_brochure2";
import SS_upload_brochure from "./SS_upload_brochure";

export default class SS_View_brochure extends Component {
  render() {
    return (
      <>
        <div className="text-center p-5 ">
          <h3><strong>Previous Brochure</strong></h3>
        </div>

        <div
          className="container border border-dark center-block rounded overflow-hidden"
          style={{ maxWidth: "1200px", maxHeight: "230px" }}
        >
          <div className="overflow-hiddens">
            <img
              className="img-fluid mx-auto d-block"
              src="https://www.shutterstock.com/image-vector/baby-daycare-service-online-banner-260nw-2120369006.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="container    ">
        <a href="./SS_View_brochure2" className="  col-2   float-right  fw-bolder mr-5 "><button
            type="button"
            class="btn btn-link fs-4 "
            style={{ color: "red", textDecoration: "none" }}
          >
            View Brochure <i class="fas fa-arrow-right"></i>{" "}
          </button>
          </a>
          <br />
        </div>





        <div
          className="container border   mt-5 border-dark center-block rounded overflow-hidden"
          style={{ maxWidth: "1200px", maxHeight: "230px" }}
        >
          <div className="overflow-hiddens">
            <img
              className="img-fluid mx-auto d-block"
              src="https://www.shutterstock.com/image-vector/baby-daycare-service-online-banner-260nw-2120369006.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="container    ">
          <a href="./SS_View_brochure2" className="  col-2   float-right  fw-bolder mr-5 "><button
            type="button"
            class="btn btn-link fs-4 "
            style={{ color: "red", textDecoration: "none" }}
          >
            View Brochure <i class="fas fa-arrow-right"></i>{" "}
          </button>
          </a>
          <br />
        </div>
      </>
    );
  }
}
