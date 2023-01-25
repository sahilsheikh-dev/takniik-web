import React from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  const liveCount = (uptoNumber, componentId) => {
    let counts = setInterval(updated);
    let upto = 0;
    function updated() {
      var count = document.getElementById(componentId);
      count.innerHTML = ++upto;
      if (upto === uptoNumber) {
        clearInterval(counts);
      }
    }
  };

  useEffect(() => {
    liveCount(250, "live-touched-counter");
    liveCount(250, "global-award-counter");
    liveCount(100, "our-clients-counter");
  }, []);

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
            Let’s Build Your Product &nbsp; <i className="bi bi-arrow-right"></i>{" "}
          </Link>
        </Button>
      </div>
      <div className="row hero-info">
        <div className="col-4">
          <div className="row">
            <div className="col-8 offset-lg-2">
              <p className="hero-info-title text-center">Lives Touched</p>
              <h3 className="hero-info-count hero-title-gradient fw-bold text-center">
                2<span id="live-touched-counter"></span>+
              </h3>
            </div>
            <div className="col-2 vl"></div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-8 offset-lg-2">
              <p className="hero-info-title text-center">Global Awards</p>
              <h3 className="hero-info-count hero-title-gradient fw-bold text-center">
                <span id="global-award-counter"></span>+
              </h3>
            </div>
            <div className="col-2 vl"></div>
          </div>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-6 col-lg-8 offset-lg-2">
              <p className="hero-info-title text-center">Our Clients</p>
              <h3 className="hero-info-count hero-title-gradient fw-bold text-center">
                <span id="our-clients-counter"></span>+
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
