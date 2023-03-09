import React, { Component } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default class SS_edit_opportunities extends Component {
  render() {
    return (
      <div>
        <div className="patron-upload-opportunity container">
          <div className="patron-upload-opportunity-heading text-center fs-1">
            Edit Course
          </div>
          <div style={{ borderWidth: "1px" }} className="card">
            <div className="card-body">
              <form
                action="uploaded-opportunities.html"
                onsubmit="return(validateEditOpportunity());"
              >
                <div className="mb-3 row">
                  <label
                    for="position"
                    className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box fs-4 "
                  >
                    Course:
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control patron-upload-opportunity-inputPosition   mt-2 align-left "
                      id="position"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="Requirements"
                      className="form-label patron-upload-opportunity-form-label fs-4"
                    >
                      About Course :
                    </label>
                    <textarea
                      className="form-control"
                      id="requirements"
                      rows="3"
                    ></textarea>
                  </div>
                </div>
                <div className="mb-3">
                  <label
                    for="aboutCompany"
                    className="form-label patron-upload-opportunity-form-label fs-4"
                  >
                    About Agency :
                  </label>
                  <textarea
                    className="form-control"
                    id="aboutCompany"
                    rows="3"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    for="Requirements"
                    className="form-label patron-upload-opportunity-form-label fs-4"
                  >
                    Requirements :
                  </label>
                  <textarea
                    className="form-control"
                    id="requirements"
                    rows="3"
                  ></textarea>
                </div>

                {/* <div className="mb-3 row">
                      <label for="position"
                          className="col-sm-2 col-form-label patron-upload-opportunity-form-label-small-input-box">Number</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control patron-upload-opportunity-inputNumber" id="number"/>
                      </div>
                  </div>
                  <div className="mb-3">
                      <label for="link-to-document"
                          className="col-sm-2 col-form-label patron-upload-opportunity-form-label">Link
                          to
                          document</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="link-to-document"/>
                      </div>
                  </div> */}

                {/* <button type="button" class=" btn btn-danger float-right m-3 " style={{maxWidth:"200px"}}> */}
                <Link
                  to="/SS_View_uploaded_opportunities"
                  className="btn btn-danger me-md-1 btn-new float-right"
                  type="submit"
                  value="Submit"
                >
                  Save changes
                </Link>
                {/* </button> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
