import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero">
      <h1 className="hero-title">
        Cobuild Products with <br className="d-block d-lg-none d-xl-none" />
        Higher <br className="d-none d-lg-block d-xl-block" /> Chances of{" "}
        <br className="d-block d-lg-none d-xl-none" />
        <span className="hero-title-gradient">&nbsp;Success!</span>
      </h1>

      <p className="hero-subtitle">
        we unlock your brand's potential to
        <br className="d-block d-lg-none d-xl-none" />
        scale <br className="d-none d-lg-block d-xl-block" /> using content &
        tech
      </p>
      <div className="text-center">
        <Button className="hero-btn">
          <Link
            to={"/contact"}
            style={{ textDecoration: "none", color: "#ffffff" }}
          >
            Let’s Build Your Product &nbsp; <i class="bi bi-arrow-right"></i>{" "}
          </Link>
        </Button>
      </div>
      <div className="row hero-info">
        <div className="col-4">
          <div className="row">
            <div className="col-8 offset-lg-2">
              <p className="hero-info-title">Lives Touched</p>
              <h3 className="hero-info-count hero-title-gradient fw-bold">
                2250+
              </h3>
            </div>
            <div className="col-2 vl"></div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-8 offset-lg-2">
              <p className="hero-info-title">Global Awards</p>
              <h3 className="hero-info-count hero-title-gradient fw-bold">
                50+
              </h3>
            </div>
            <div className="col-2 vl"></div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6 col-lg-8 offset-lg-2">
              <p className="hero-info-title">
                Our Clients &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <h3 className="hero-info-count hero-title-gradient fw-bold">
                250+
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
