import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import GreenTick from "../../assets/svg/green-tick.svg";

const ColumnHero = ({ HeroImg, Heading, DescriptionPoints, BtnText, URL }) => {
  return (
    <div className="column-hero">
      <div
        className="row mt-md-5 mt-lg-5 mt-xl-5 ms-0"
        style={{ maxWidth: "100vw" }}
      >
        <div
          className="col-md-6 col-lg-6 col-xl-6 ms-md-5 ms-lg-5 ms-xl-5 me-0 pe-0 d-flex align-items-center"
          style={{ maxWidth: "600px" }}
        >
          <div className="container ms-0 ms-md-5 ms-lg-5 ms-xl-5 ps-md-5 ps-lg-5 ps-xl-5">
            <h1 className="hero-title text-start pt-0 mt-0">{Heading}</h1>

            {DescriptionPoints.map((descriptionItem, index) => (
              <p key={index} className="hero-subtitle text-start">
                <img
                  className="social-icon"
                  style={{ maxWidth: "24px", marginTop: "-5px" }}
                  src={GreenTick}
                  alt="greentick"
                />{" "}
                &nbsp; {descriptionItem}
              </p>
            ))}

            <div className="text-start">
              <Button className="hero-btn">
                <Link
                  to={URL}
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  {BtnText} &nbsp; <i class="bi bi-arrow-right"></i>{" "}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-5 col-xl-5 ms-auto my-5 pe-0">
          <img className="img-fluid" src={HeroImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default ColumnHero;
