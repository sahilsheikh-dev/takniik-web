import React from "react";
import { Container } from "react-bootstrap";
import SeoImage1 from "../../../../assets/img/services/seo/seo-img-1.png";
import SeoImage2 from "../../../../assets/img/services/seo/seo-img-2.png";
import SeoImage3 from "../../../../assets/img/services/seo/seo-img-3.png";
import Circle1 from "../../../../assets/svg/circlebg-1.svg";
import Circle2 from "../../../../assets/svg/circlebg-2.svg";
import Circle3 from "../../../../assets/svg/circlebg-3.svg";

const TextImage = () => {
  return (
    <div className="seo-service">
      <h1 className="fw-bold mb-5 pb-5 text-center">
        Getting the perfect product description is simple
      </h1>
      <div className="row ms-0" style={{ maxWidth: "100vw" }}>
        <div className="col-md-6 col-lg-6 col-xl-6 d-none d-md-block d-lg-block d-xl-block ms-md-5 ms-lg-5 ms-xl-5 me-0 pe-0 d-flex justify-content-between align-items-center">
          <div className="container ms-0 ms-md-5 ms-lg-5 ms-xl-5 ps-md-5 ps-lg-5 ps-xl-5">
            <div className="row">
              <div className="col-2">
                <img
                  className="social-icon mt-3"
                  src={Circle1}
                  alt="greentick"
                />{" "}
              </div>
              <div className="col-10">
                <h1 className="fw-bold">Share your requirements</h1>
                <p className="about-out-description">
                  Fill in the order form and, in a few clicks, watch us craft
                  great content that grows your sales
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-5 col-xl-5 ms-auto pb-3 pe-0">
          <img
            className="about-our-img about-img-right"
            src={SeoImage1}
            alt="img"
          />
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 d-block d-md-none d-lg-none d-xl-none">
          <div className="row">
            <div className="col-2">
              <img className="social-icon mt-3" src={Circle1} alt="greentick" />{" "}
            </div>
            <div className="col-10">
              <h1 className="fw-bold">Share your requirements</h1>
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
          <div className="col-md-7 col-lg-7 col-xl-7 pb-3">
            <img className="about-our-img" src={SeoImage2} alt="img" />
          </div>
          <div className="col-md-5 col-lg-5 col-xl-5">
            <div className="row">
              <div className="col-2">
                <img
                  className="social-icon mt-3"
                  src={Circle2}
                  alt="greentick"
                />{" "}
              </div>
              <div className="col-10">
                <h1 className="fw-bold">
                  Start seeing your content flourish
                </h1>
                <p className="about-out-description">
                  Fill in the order form and, in a few clicks, watch us craft
                  great content that grows your sales
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="row mt-5 ms-0" style={{ maxWidth: "100vw" }}>
        <div className="col-md-6 col-lg-6 col-xl-6 d-none d-md-block d-lg-block d-xl-block ms-md-5 ms-lg-5 ms-xl-5 me-0 pe-0 d-flex justify-content-between align-items-center">
          <div className="container ms-0 ms-md-5 ms-lg-5 ms-xl-5 ps-md-5 ps-lg-5 ps-xl-5">
            <div className="row">
              <div className="col-2">
                <img
                  className="social-icon mt-3"
                  src={Circle3}
                  alt="greentick"
                />{" "}
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
        <div className="col-md-5 col-lg-5 col-xl-5 ms-auto pb-3 pe-0">
          <img
            className="about-our-img about-img-right"
            src={SeoImage3}
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