import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/style.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="pt-3">
        <Container>
          <div className="row">
            <div className="col-auto mt-3">
              <div className="mx-3" style={{ display: "inline-flex" }}>
                <h4 className="me-3">
                  <a
                    className="text-decoration-none hero-title-gradient"
                    href="https://linkedin.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </h4>
                <h4 className="me-3">
                  <a
                    className="text-decoration-none hero-title-gradient"
                    href="https://twitter.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="bi bi-twitter"></i>
                  </a>
                </h4>
                <h4 className="me-3">
                  <a
                    className="text-decoration-none hero-title-gradient"
                    href="https://facebook.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="bi bi-facebook"></i>
                  </a>
                </h4>
                <h4 className="me-3">
                  <a
                    className="text-decoration-none hero-title-gradient"
                    href="https://instagram.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="bi bi-instagram"></i>
                  </a>
                </h4>
                <h4 className="me-3">
                  <a
                    className="text-decoration-none hero-title-gradient"
                    href="https://youtube.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i className="bi bi-youtube"></i>
                  </a>
                </h4>
              </div>
            </div>
            <div className="col-auto my-3 mx-0 ms-0 ms-md-auto ms-lg-auto ms-xl-auto">
              <div className="ms-2 ms-md-auto ms-lg-auto ms-xl-auto d-block d-md-inline-flex d-lg-inline-flex d-xl-inline-flex mx-0 w-100">
                <p className="mx-0 mx-md-3 mx-lg-3 mx-xl-3">
                  <a
                    className="text-decoration-none "
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Privacy and Security Policy
                  </a>
                </p>
                <p className="mx-0 mx-md-3 mx-lg-3 mx-xl-3">
                  <a
                    className="text-decoration-none "
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Terms of Use
                  </a>
                </p>
                <p className="mx-0 mx-md-3 mx-lg-3 mx-xl-3">
                  <a
                    className="text-decoration-none "
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Payer Terms & Conditions
                  </a>
                </p>
                <p className="mx-0 mx-md-3 mx-lg-3 mx-xl-3">
                  <a
                    className="text-decoration-none "
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Sitemap
                  </a>
                </p>
                <p className="mx-0 ">&copy; Takniik, all rights reserved</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-3 pb-4">
        <Container>
          <div className="row">
            <div className="col-md-9 col-lg-9 col-xl-9 my-3">
              <div className="mb-3 row">
                <h4 className="hero-title-gradient mb-3 fw-bold">Industries</h4>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none " href="/">
                    Automotive
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Banking
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Capital Markets
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Communications, Media & Technology
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Consumer Goods
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Education
                  </a>{" "}
                  <br />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none " href="/">
                    Healthcare
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Information Services
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Insurance
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Life Sciences
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Manufacturing
                  </a>{" "}
                  <br />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none " href="/">
                    Oil & Gas
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Retail
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Transportation & Logistics
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Travel & Hospitality
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Utilities
                  </a>{" "}
                  <br />
                </div>
              </div>
              <div className="mb-3 row">
                <h4 className="hero-title-gradient my-3 fw-bold">Services</h4>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none " href="/">
                    Application Services & Modernization
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Artificial Intelligence
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Business Process Services
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Cloud Solutions
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Core Modernization
                  </a>{" "}
                  <br />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none " href="/">
                    Digital Experience
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Digital Strategy
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Enterprise Application Services
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Infrastructure Services
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Intelligent Process Automation
                  </a>{" "}
                  <br />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none " href="/">
                    Internet of Things
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Quality Engineering & Assurance
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Security
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Software Product Engineering
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none " href="/">
                    Sustainability Services
                  </a>{" "}
                  <br />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 my-3">
              <div className="mb-3">
                <h4 className="hero-title-gradient mb-3 fw-bold">
                  About Takniik
                </h4>
                <a className="text-decoration-none " href="/">
                  2023 in Focus
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Be.Takniik
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Board of Directors
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Client Briefing Program
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Contact Us
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Corporate Governance
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Culure & Values
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Diversity & Invclusion
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  ESG
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Leadership Team
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  News & Press Releases
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Partnerships
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Public Policy
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Sponsorships
                </a>{" "}
                <br />
                <a className="text-decoration-none " href="/">
                  Talent Worldwide
                </a>{" "}
                <br />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
