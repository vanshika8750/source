import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

export default class SS_View_brochure2 extends Component {
  render() {
    return (
      <>
        <div className="text-center p-5">
          <h3>
            <strong>View Brochure</strong>{" "}
          </h3>
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-lg-6 col-12"
              style={{ maxWidth: "630px", maxHeight: "870px" }}
            >
              <div className="p-3 border bg-light border border-dark  rounded">
                <img
                  src="https://www.slideteam.net/media/catalog/product/cache/1280x720/i/t/it_services_company_four_page_brochure_template_slide01.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="p-3 border bg-light border border-dark  rounded">
                {" "}
                <img
                  src="https://www.slideteam.net/media/catalog/product/cache/1280x720/i/t/it_services_company_four_page_brochure_template_slide01.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>{" "}
        <section className="brochurebox mt-5">
          <h1 className="headingcompany"> Company Name</h1>
          <Container>
            <Row>
              <Col>
                <picture>
                  <img
                    className="imgbb mt-5"
                    src="https://www.slideteam.net/media/catalog/product/cache/1280x720/i/t/it_services_company_four_page_brochure_template_slide01.jpg"
                    alt=""
                  />
                </picture>
              </Col>
              <Col xs={6}>
                <div className="textsec mt-5 ms-5 p-3">
                  The selector for the ruleset is already defined for you, and
                  targets the paragraph to its right. Once you've tried those
                  declarations, try changing some of the values yourself. For
                  example, try changing the "solid" value in your border
                  declaration to "dashed" or "dotted," or try changing the width
                  v
                </div>
              </Col>
            </Row>
          </Container>

          <Container>
            <Row>
              <Col xs={6}>
                <div className="textsec mt-5 ms-5 p-3">
                  The selector for the ruleset is already defined for you, and
                  targets the paragraph to its right. Once you've tried those
                  declarations, try changing some of the values yourself. For
                  example, try changing the "solid" value in your border
                  declaration to "dashed" or "dotted," or try changing the width
                  v
                </div>
              </Col>
              <Col>
                <picture>
                  <img
                    className="imgbb mt-5"
                    src="https://www.slideteam.net/media/catalog/product/cache/1280x720/i/t/it_services_company_four_page_brochure_template_slide01.jpg"
                    alt=""
                  />
                </picture>
              </Col>
            </Row>
          </Container>

          <h1 className="subtopic mt-5 mb-5">Anthing sub topic </h1>

          <Container>
            <Row>
              <Col xs={6}>
                <div className="textsec mt-5 ms-5 p-3">
                  The selector for the ruleset is already defined for you, and
                  targets the paragraph to its right. Once you've tried those
                  declarations, try changing some of the values yourself. For
                  example, try changing the "solid" value in your border
                  declaration to "dashed" or "dotted," or try changing the width
                  v
                </div>
              </Col>
              <Col>
                <picture>
                  <img
                    className="imgbb mt-5"
                    src="https://www.slideteam.net/media/catalog/product/cache/1280x720/i/t/it_services_company_four_page_brochure_template_slide01.jpg"
                    alt=""
                  />
                </picture>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    );
  }
}
