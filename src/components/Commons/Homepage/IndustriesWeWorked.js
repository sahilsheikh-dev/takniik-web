import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import IndustruesWorkData from "../../../assets/data/IndustriesWorkData.json";

const IndustriesWeWorked = () => {
  const industriesJson = IndustruesWorkData;
  const [currentSlide, setCurrentSlide] = useState(0);
  const [indexX, setIndexX] = useState(0);

  const slideHandler = (indexY) => {
    setCurrentSlide(indexY);
    setIndexX(indexY);
  };

  return (
    <Container>
      <div className="achievement">
        <h1 className="achievement-heading">Industries We Work</h1>

        <Carousel
          controls={false}
          indicators={false}
          activeIndex={currentSlide}
        >
          {industriesJson.map((carouselItem, index) => (
            <Carousel.Item key={index}>
              <div className="row mt-5">
                <div className="col-md-6 col-lg-6 col-xl-6 my-3 d-flex align-items-center">
                  <div className="text-center text-md-start text-lg-start text-xl-start">
                    <h className="hero-title mb-3">{carouselItem.title}</h>
                    <h3 className="my-3">{carouselItem.subtitle}</h3>
                    <Button className="hero-btn">
                      <Link
                        to={carouselItem.url}
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        Find out more <i className="bi bi-caret-right"></i>
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 my-3">
                  <img
                    className="img-fluid w-100"
                    src={carouselItem.imgUrl}
                    alt="logo"
                  />
                </div>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>

        <ul className="project-filter px-0 mx-0">
          {industriesJson.map((carouselItem, indexY) => (
            <li
              className={
                indexX === indexY
                  ? "fw-bold ms-0 me-4 hero-title-gradient"
                  : "ms-0 me-4"
              }
              key={indexY}
              style={{ fontSize: "16px", cursor: "pointer" }}
              onClick={() => slideHandler(indexY)}
            >
              {carouselItem.buttonTitle}
            </li>
          ))}
        </ul>

        {/* <div className="my-3 d-none d-md-inline-flex d-lg-inline-flex d-xl-inline-flex">
          {industriesJson.map((carouselItem, indexY) => (
            <p
              className={
                indexX === indexY ? "fw-bold me-4 hero-title-gradient" : "me-4"
              }
              key={indexY}
              style={{ fontSize: "16px", cursor: "pointer" }}
              onClick={() => slideHandler(indexY)}
            >
              {carouselItem.buttonTitle}
            </p>
          ))}
        </div> */}
      </div>
    </Container>
  );
};

export default IndustriesWeWorked;
