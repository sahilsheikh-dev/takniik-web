import React from "react";
import { Link } from "react-router-dom";

const AboutCta = () => {
  return (
    <div className="about-us about-cta-bg">
      <div className="about-cta-section w-100 text-center">
        <h1 className="about-us-heading text-white">Join Us</h1>
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
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; View Positions
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutCta;
