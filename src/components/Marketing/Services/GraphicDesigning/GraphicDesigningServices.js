import React from "react";
import { Container } from "react-bootstrap";
import GDImg1 from "../../../../assets/img/services/graphicsdesigning/gd-service-img-1.png";
import GDImg2 from "../../../../assets/img/services/graphicsdesigning/gd-service-img-2.png";
import GDImg3 from "../../../../assets/img/services/graphicsdesigning/gd-service-img-3.png";
import GDImg4 from "../../../../assets/img/services/graphicsdesigning/gd-service-img-4.png";
import GDImg5 from "../../../../assets/img/services/graphicsdesigning/gd-service-img-5.png";
import GDImg6 from "../../../../assets/img/services/graphicsdesigning/gd-service-img-6.png";

const GraphicDesigningServices = () => {
  return (
    <Container>
      <div className="content-writing-services pb-5 mb-5">
        <h1 className="fw-bold mb-3 mb-md-5 mb-lg-5 mb-xl-5 pb-3 pb-md-5 pb-lg-5 pb-xl-5 text-center">
          Pick a service to get started
        </h1>
        <div className="row px-md-5 px-lg-5 px-xl-5 pb-md-5 pb-lg-5 pb-xl-5">
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={GDImg1} alt="logo" />
              <h3 className="fw-bold">Emailer Design</h3>
              <p className="hero-title-gradient fw-bold">
                1000+ Subject Matter Experts
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={GDImg2} alt="logo" />
              <h3 className="fw-bold">Posters</h3>
              <p className="hero-title-gradient fw-bold">1200+ Writers</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={GDImg3} alt="logo" />
              <h3 className="fw-bold">Infographics</h3>
              <p className="hero-title-gradient fw-bold">
                1000+ Subject Matter Experts
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={GDImg4} alt="logo" />
              <h3 className="fw-bold">Website & App Banners</h3>
              <p className="hero-title-gradient fw-bold">
                1000+ Subject Matter Experts
              </p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={GDImg5} alt="logo" />
              <h3 className="fw-bold">Presentation Design</h3>
              <p className="hero-title-gradient fw-bold">1200+ Writers</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-3">
            <div className="content-writing-service-card p-4 p-md-5 p-lg-5 p-xl-5">
              <img className="img-fluid mb-3" src={GDImg6} alt="logo" />
              <h3 className="fw-bold">Ebook Design</h3>
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

export default GraphicDesigningServices;
