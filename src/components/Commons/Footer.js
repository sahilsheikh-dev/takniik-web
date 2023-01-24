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
            <div className="col-md-6 col-lg-6 col-xl-6 mt-3">
              <div className="mx-3" style={{ display: "inline-flex" }}>
                <h4 className="me-3">
                  <a
                    className="text-decoration-none"
                    href="https://linkedin.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i class="bi bi-linkedin"></i>
                  </a>
                </h4>
                <h4 className="me-3">
                  <a
                    className="text-decoration-none"
                    href="https://twitter.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i class="bi bi-twitter"></i>
                  </a>
                </h4>
                <h4 className="me-3">
                  <a
                    className="text-decoration-none"
                    href="https://facebook.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i class="bi bi-facebook"></i>
                  </a>
                </h4>
                <h4 className="me-3">
                  <a
                    className="text-decoration-none"
                    href="https://instagram.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i class="bi bi-instagram"></i>
                  </a>
                </h4>
                <h4 className="me-3">
                  <a
                    className="text-decoration-none"
                    href="https://youtube.com"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <i class="bi bi-youtube"></i>
                  </a>
                </h4>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 my-3">
              <div
                className="ms-3 ms-md-auto ms-lg-auto ms-xl-auto d-block d-md-inline-flex d-lg-inline-flex d-xl-inline-flex"
                style={{
                  width: "100%",
                }}
              >
                <p className="me-3  ms-md-auto ms-lg-auto ms-xl-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Sitmap
                  </a>
                </p>
                <p className="me-3  ms-md-auto ms-lg-auto ms-xl-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Terms
                  </a>
                </p>
                <p className="me-3  ms-md-auto ms-lg-auto ms-xl-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Privacy Notice
                  </a>
                </p>
                <p className="me-3  ms-md-auto ms-lg-auto ms-xl-auto">
                  <a
                    className="text-decoration-none text-dark"
                    href="/"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    Cookie Notice
                  </a>
                </p>
                <p className="me-3 ms-md-auto ms-lg-auto ms-xl-auto text-dark">
                  &copy; Takniik, all rights reserved
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
                <h4 className="text-primary mb-3 fw-bold">Industries</h4>
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
                <h4 className="text-primary my-3 fw-bold">Services</h4>
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
              <div className="mb-3 row">
                <h4 className="text-primary my-3">
                  <a className="text-decoration-none fw-bold" href="/">
                    Consulting
                  </a>
                </h4>
              </div>
              <div className="mb-3 row">
                <h4 className="text-primary my-3 fw-bold">Insights</h4>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <p className="text-decoration-none text-dark fw-bold">
                    Themes
                  </p>
                  <a className="text-decoration-none text-dark" href="/">
                    Modern Business
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Sustainability and Resilience
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Tech to Watch
                  </a>{" "}
                  <br />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <p className="text-decoration-none text-dark fw-bold">
                    Research
                  </p>
                  <a className="text-decoration-none text-dark" href="/">
                    The Future of Us
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    The Future-Ready Business Benchmark
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    The Green Ruch
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    The Work Ahead
                  </a>{" "}
                  <br />
                </div>
                <div className="col-md-4 col-lg-4 col-xl-4">
                  <p className="text-decoration-none text-dark fw-bold">
                    Explore
                  </p>
                  <a className="text-decoration-none text-dark" href="/">
                    Blog
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Case Studies
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Insights
                  </a>{" "}
                  <br />
                  <a className="text-decoration-none text-dark" href="/">
                    Podcasts
                  </a>{" "}
                  <br />
                </div>
              </div>
            </div>
            <div className="col-md-3 col-lg-3 col-xl-3 my-3">
              <div className="mb-3">
                <h4 className="text-primary mb-3 fw-bold">About Takniik</h4>
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
              <div className="mb-3">
                <h4 className="text-primary my-3">
                  <a className="text-decoration-none fw-bold" href="/">
                    Glossary
                  </a>
                </h4>
              </div>
              <div className="mb-3">
                <h4 className="text-primary my-3">
                  <a className="text-decoration-none fw-bold" href="/">
                    Information of Suppliers
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Footer;
