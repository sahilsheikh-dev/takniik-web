import React from "react";
import { Container } from "react-bootstrap";
import SmoImage1 from "../../../../assets/img/services/smo/smo-img-1.png";
import SmoImage2 from "../../../../assets/img/services/smo/smo-img-2.png";
import SmoImage3 from "../../../../assets/img/services/smo/smo-img-3.png";
import Circle1 from "../../../../assets/svg/circlebg-1.svg";
import Circle2 from "../../../../assets/svg/circlebg-2.svg";
import Circle3 from "../../../../assets/svg/circlebg-3.svg";

const TextImage = () => {
  return (
    <div className="seo-service">
      <h1 className="fw-bold mb-3 mb-md-5 mb-lg-5 mb-xl-5 pb-3 pb-md-5 pb-lg-5 pb-xl-5 text-center">
        Getting the perfect product description is simple
      </h1>
      <div className="row ms-0" style={{ maxWidth: "100vw" }}>
        <div className="col-md-6 col-lg-6 col-xl-6 ms-md-5 ms-lg-5 ms-xl-5 me-0 pe-0 d-flex justify-content-between align-items-center">
          <div className="container ms-0 ms-md-5 ms-lg-5 ms-xl-5 ps-md-5 ps-lg-5 ps-xl-5 d-none d-md-block d-lg-block d-xl-block">
            <div className="row">
              <div className="col-2">
                <img
                  className="social-icon mt-3"
                  src={Circle1}
                  alt="greentick"
                />{" "}
              </div>
              <div className="col-10">
                <h1 className="fw-bold">You create a brief</h1>
                <p className="about-out-description">
                  Create a blog brief using our hassle-free, guided flow. Get a
                  preliminary quote and estimated delivery time in under a
                  minute.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-5 col-xl-5 ms-auto pb-3 pe-0">
          <img
            className="about-our-img about-img-right"
            src={SmoImage1}
            alt="img"
          />
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 d-block d-md-none d-lg-none d-xl-none">
          <div className="row">
            <div className="col-2">
              <img className="social-icon mt-3" src={Circle1} alt="greentick" />{" "}
            </div>
            <div className="col-10">
              <h1 className="fw-bold">You create a brief</h1>
              <p className="about-out-description">
                Fill in the order form and, in a few clicks, watch us craft
                great content that grows your sales
              </p>
            </div>
          </div>
        </div>
      </div>
      <Container>
        <div className="row mt-5 ms-0" style={{ maxWidth: "100vw" }}>
          <div className="col-md-5 col-lg-5 col-xl-5 me-auto pb-3 ps-0">
            <img className="about-our-img" src={SmoImage2} alt="img" />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 ms-md-5 ms-lg-5 ms-xl-5 me-0 pe-0 d-flex justify-content-between align-items-center">
            <div className="row">
              <div className="col-2">
                <img
                  className="social-icon mt-3"
                  src={Circle2}
                  alt="greentick"
                />{" "}
              </div>
              <div className="col-10">
                <h1 className="fw-bold">We assemble the best team</h1>
                <p className="about-out-description">
                  Our algorithms ensure the best-fit writers are briefed,
                  readied, and launched into your project
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="row mt-5 ms-0" style={{ maxWidth: "100vw" }}>
        <div className="col-md-6 col-lg-6 col-xl-6 ms-md-5 ms-lg-5 ms-xl-5 me-0 pe-0 d-flex justify-content-between align-items-center">
          <div className="container ms-0 ms-md-5 ms-lg-5 ms-xl-5 ps-md-5 ps-lg-5 ps-xl-5 d-none d-md-block d-lg-block d-xl-block">
            <div className="row">
              <div className="col-2">
                <img
                  className="social-icon mt-3"
                  src={Circle3}
                  alt="greentick"
                />{" "}
              </div>
              <div className="col-10">
                <h1 className="fw-bold">Track progress on your dashboard</h1>
                <p className="about-out-description">
                  From commissioning to writing to delivery, we keep you in the
                  loop at every stage
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-5 col-xl-5 ms-auto pb-3 pe-0">
          <img
            className="about-our-img about-img-right"
            src={SmoImage3}
            alt="img"
          />
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 d-block d-md-none d-lg-none d-xl-none">
          <div className="row">
            <div className="col-2">
              <img className="social-icon mt-3" src={Circle3} alt="greentick" />{" "}
            </div>
            <div className="col-10">
              <h1 className="fw-bold">Track the project</h1>
              <p className="about-out-description">
                Fill in the order form and, in a few clicks, watch us craft
                great content that grows your sales
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImage;
