import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/style.css";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div
      style={{
        background: `linear-gradient(180deg, #0A0A0D 0%, #19191D 95.51%)`,
      }}
    >
      <div className="pt-3" style={{ background: "#E8E8E6" }}>
        <Container>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-xl-4 mt-3">
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
            <div className="col-md-8 col-lg-8 col-xl-8 my-3">
              <p className="me-3 ms-md-auto ms-lg-auto ms-xl-auto text-dark text-start text-md-end text-lg-end text-xl-end">
                &copy; Takniik, all rights reserved
              </p>
              <div
                className="ms-3 ms-md-auto ms-lg-auto ms-xl-auto d-block d-md-inline-flex d-lg-inline-flex d-xl-inline-flex mx-0 w-100"
                style={{
                  maxWidth: "100%",
                }}
              >
                <p className="me-3  ms-md-auto ms-lg-auto ms-xl-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Privacy and Security Policy
                  </a>
                </p>
                <p className="me-3  ms-md-auto ms-lg-auto ms-xl-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Terms of Use
                  </a>
                </p>
                <p className="me-3  ms-md-auto ms-lg-auto ms-xl-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Payer Terms & Conditions
                  </a>
                </p>
                <p className="me-3  ms-md-auto ms-lg-auto ms-xl-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Sitemap
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-3 pb-4" style={{ background: "#F1F1F1" }}>
        <Container>
          <div className="row">
            <div className="col-md-9 col-lg-9 col-xl-9 my-3">
              <div className="mb-3 row">
                <h4 className="hero-title-gradient mb-3 fw-bold">Industries</h4>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none text-dark" href="/">
                    Automotive
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Banking
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Capital Markets
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Communications, Media & Technology
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Consumer Goods
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Education
                  </a>{" "}
                  <br />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none text-dark" href="/">
                    Healthcare
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Information Services
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Insurance
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Life Sciences
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Manufacturing
                  </a>{" "}
                  <br />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none text-dark" href="/">
                    Oil & Gas
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Retail
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Transportation & Logistics
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Travel & Hospitality
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Utilities
                  </a>{" "}
                  <br />
                </div>
              </div>
              <div className="mb-3 row">
                <h4 className="hero-title-gradient my-3 fw-bold">Services</h4>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none text-dark" href="/">
                    Application Services & Modernization
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Artificial Intelligence
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Business Process Services
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Cloud Solutions
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Core Modernization
                  </a>{" "}
                  <br />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none text-dark" href="/">
                    Digital Experience
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Digital Strategy
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Enterprise Application Services
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Infrastructure Services
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Intelligent Process Automation
                  </a>{" "}
                  <br />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <a className="text-decoration-none text-dark" href="/">
                    Internet of Things
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Quality Engineering & Assurance
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Security
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Software Product Engineering
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
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
                <a className="text-decoration-none text-dark" href="/">
                  2023 in Focus
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Be.Takniik
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Board of Directors
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Client Briefing Program
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Contact Us
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Corporate Governance
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Culure & Values
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Diversity & Invclusion
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  ESG
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Leadership Team
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  News & Press Releases
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Partnerships
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Public Policy
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
                  Sponsorships
                </a>{" "}
                <br />
                <a className="text-decoration-none text-dark" href="/">
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
