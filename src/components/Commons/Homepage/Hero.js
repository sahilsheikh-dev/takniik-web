import React from "react";
import { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  const countLiveTouched = () => {
    let counts = setInterval(updated);
    let upto = 0;
    function updated() {
      var count = document.getElementById("live-touched-counter");
      count.innerHTML = ++upto;
      if (upto === 2250) {
        clearInterval(counts);
      }
    }
  };
  const countGlobalAward = () => {
    let counts = setInterval(updated);
    let upto = 0;
    function updated() {
      var count = document.getElementById("global-award-counter");
      count.innerHTML = ++upto;
      if (upto === 250) {
        clearInterval(counts);
      }
    }
  };
  const countOurClients = () => {
    let counts = setInterval(updated);
    let upto = 0;
    function updated() {
      var count = document.getElementById("our-clients-counter");
      count.innerHTML = ++upto;
      if (upto === 50) {
        clearInterval(counts);
      }
    }
  };

  useEffect(() => {
    countLiveTouched();
    countGlobalAward();
    countOurClients();
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
            Let’s Build Your Product &nbsp; <i class="bi bi-arrow-right"></i>{" "}
          </Link>
        </Button>
      </div>
      <div className="row hero-info">
        <div className="col-4">
          <div className="row">
            <div className="col-8 offset-lg-2">
              <p className="hero-info-title text-center">Lives Touched</p>
              <h3 className="hero-info-count hero-title-gradient fw-bold text-center">
                <span id="live-touched-counter"></span>+
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
