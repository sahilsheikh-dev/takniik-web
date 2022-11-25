import React from "react";
import { Link } from "react-router-dom";
import GreenTickCircle from "../../../../assets/svg/green-tick-circle.svg";

const Cta = () => {
  return (
    <div className="about-us about-cta-bg mt-5">
      <div className="about-cta-section w-100 text-center">
        <h1 className="about-us-heading text-white">Order Your First Blog</h1>
        <p className="about-us-subheading w-75 mx-auto">
          We are transforming the content ecosystem as{" "}
          <br className="d-none d-md-block d-lg-block d-xl-block" /> you know it
          today.
        </p>
        <div className="about-contact-btn text-center">
          <Link
            to={"/contact"}
            className="hero-btn"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign Up Free
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </div>
        <div
          className="row mx-md-5 mx-lg-5 mx-xl-5 px-md-5 px-lg-5 px-xl-5 mt-5"
          style={{ maxWidth: "100vw" }}
        >
          <div className="col-md-4 col-lg-4 col-xl-4 px-md-4 px-lg-4 px-xl-4">
            <p className="text-center">
              <img
                className="social-icon"
                style={{ maxWidth: "24px", marginTop: "-5px" }}
                src={GreenTickCircle}
                alt="greentick"
              />{" "}
              &nbsp; Multiple revisions included
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 px-md-4 px-lg-4 px-xl-4">
            <p className="text-center">
              <img
                className="social-icon"
                style={{ maxWidth: "24px", marginTop: "-5px" }}
                src={GreenTickCircle}
                alt="greentick"
              />{" "}
              &nbsp; On-demand projects
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 px-md-4 px-lg-4 px-xl-4">
            <p className="text-center">
              <img
                className="social-icon"
                style={{ maxWidth: "24px", marginTop: "-5px" }}
                src={GreenTickCircle}
                alt="greentick"
              />{" "}
              &nbsp; Easy & fast collaboration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cta;
