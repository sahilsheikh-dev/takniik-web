import React from "react";
import { Link } from "react-router-dom";

const Cta = () => {
  return (
    <div className="about-us about-cta-bg mt-5">
      <div className="about-cta-section w-100 text-center">
        <h1 className="about-us-heading text-white">
          We’re redefining the role of
          <br className="d-none d-md-block d-lg-block d-xl-block" />a video
          production company
        </h1>
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
      </div>
    </div>
  );
};

export default Cta;
