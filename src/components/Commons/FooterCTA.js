import React from "react";
import { Link } from "react-router-dom";
import GreenTickCircle from "../../assets/svg/green-tick-circle.svg";

const FooterCTA = ({
  Heading,
  Subheading,
  BtnText,
  URL,
  Point1,
  Point2,
  Point3,
}) => {
  return (
    <div className="about-us about-cta-bg mt-5">
      <div className="about-cta-section w-100 text-center">
        <h1 className="about-us-heading text-white">{Heading}</h1>
        <p className="about-us-subheading w-75 mx-auto">{Subheading}</p>
        <div className="about-contact-btn text-center">
          <Link
            to={URL}
            className="hero-btn"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{BtnText}
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
              &nbsp; {Point1}
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
              &nbsp; {Point2}
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
              &nbsp; {Point3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterCTA;
