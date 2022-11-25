import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import SeoHeroImg from "../../../../assets/img/services/seo/seo-hero.png";
import GreenTick from "../../../../assets/svg/green-tick.svg";

const SeoHero = () => {
  return (
    <div className="seo-service">
      <div
        className="row mt-md-5 mt-lg-5 mt-xl-5 ms-0"
        style={{ maxWidth: "100vw" }}
      >
        <div className="col-md-6 col-lg-6 col-xl-6 ms-md-5 ms-lg-5 ms-xl-5 me-0 pe-0">
          <div className="container ms-0 ms-md-5 ms-lg-5 ms-xl-5 ps-md-5 ps-lg-5 ps-xl-5">
            <h1 className="hero-title text-start">
              Well-crafted product{" "}
              <br className="d-none d-md-block d-lg-block d-xl-block" />
              descriptions
            </h1>

            <p className="hero-subtitle text-start">
              <img
                className="social-icon"
                style={{ maxWidth: "24px", marginTop: "-5px" }}
                src={GreenTick}
                alt="greentick"
              />{" "}
              &nbsp; 100% original, SEO-optimized content
            </p>
            <p className="hero-subtitle text-start">
              <img
                className="social-icon"
                style={{ maxWidth: "24px", marginTop: "-5px" }}
                src={GreenTick}
                alt="greentick"
              />{" "}
              &nbsp; Experienced subject matter experts
            </p>
            <p className="hero-subtitle text-start">
              <img
                className="social-icon"
                style={{ maxWidth: "24px", marginTop: "-5px" }}
                src={GreenTick}
                alt="greentick"
              />{" "}
              &nbsp; Phased delivery for bulk content
            </p>
            <div className="text-start">
              <Button className="hero-btn">
                <Link
                  to={"/contact"}
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Create a Project &nbsp; <i class="bi bi-arrow-right"></i>{" "}
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-5 col-xl-5 ms-auto my-5 pe-0">
          <img className="img-fluid" src={SeoHeroImg} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default SeoHero;
