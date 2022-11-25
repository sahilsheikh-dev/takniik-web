import React from "react";
import { Container } from "react-bootstrap";
import ServiceImg1 from "../../../../assets/img/services/contentwriting/service-img-1.png";
import ServiceImg2 from "../../../../assets/img/services/contentwriting/service-img-2.png";
import ServiceImg3 from "../../../../assets/img/services/contentwriting/service-img-3.png";
import ServiceImg4 from "../../../../assets/img/services/contentwriting/service-img-4.png";
import ServiceImg5 from "../../../../assets/img/services/contentwriting/service-img-5.png";
import ServiceImg6 from "../../../../assets/img/services/contentwriting/service-img-6.png";
import ServiceImg7 from "../../../../assets/img/services/contentwriting/service-img-7.png";
import ServiceImg8 from "../../../../assets/img/services/contentwriting/service-img-8.png";

const ContentWritingServices = () => {
  return (
    <Container>
      <div className="content-writing-services pb-5 mb-5">
        <div className="row p-md-5 p-lg-5 p-xl-5">
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={ServiceImg1} alt="logo" />
              <h3 className="fw-bold">Blogs & Articles</h3>
              <p className="hero-title-gradient fw-bold">
                1000+ Subject Matter Experts
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={ServiceImg2} alt="logo" />
              <h3 className="fw-bold">Website Content</h3>
              <p className="hero-title-gradient fw-bold">1200+ Writers</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={ServiceImg3} alt="logo" />
              <h3 className="fw-bold">Product Descriprions</h3>
              <p className="hero-title-gradient fw-bold">
                1000+ Subject Matter Experts
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={ServiceImg4} alt="logo" />
              <h3 className="fw-bold">Social Media Content</h3>
              <p className="hero-title-gradient fw-bold">
                1000+ Subject Matter Experts
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={ServiceImg5} alt="logo" />
              <h3 className="fw-bold">Copywriting</h3>
              <p className="hero-title-gradient fw-bold">1200+ Writers</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={ServiceImg6} alt="logo" />
              <h3 className="fw-bold">Book Writing</h3>
              <p className="hero-title-gradient fw-bold">
                1000+ Subject Matter Experts
              </p>
            </div>
          </div>
          <div className="offset-md-2 offset-lg-2 offset-xl-2 col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={ServiceImg7} alt="logo" />
              <h3 className="fw-bold">Press Releases</h3>
              <p className="hero-title-gradient fw-bold">1200+ Writers</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={ServiceImg8} alt="logo" />
              <h3 className="fw-bold">Branded Content</h3>
              <p className="hero-title-gradient fw-bold">
                1000+ Subject Matter Experts
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContentWritingServices;
