import React from "react";
import { Container } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
// import "swiper/css";
import CardSlid from "./CardSlid";
import cardBgImg1 from "../../../../assets/img/services/videoproduction/card-img-1.png";
import cardBgImg2 from "../../../../assets/img/services/videoproduction/card-img-2.png";
import cardBgImg3 from "../../../../assets/img/services/videoproduction/card-img-3.png";
import { useRef } from "react";
import Slider from "react-slick";

const CardSlider = ({ theme }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };
  const settingsSmallScreen = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const sliderRef = useRef();
  const sliderRefMobile = useRef();

  const slideData = [
    { url: cardBgImg1, text: "Beauty" },
    { url: cardBgImg2, text: "Education" },
    { url: cardBgImg3, text: "Food and Drinks" },
    { url: cardBgImg1, text: "Beauty" },
    { url: cardBgImg2, text: "Education" },
    { url: cardBgImg3, text: "Food and Drinks" },
  ];

  const nextSlide = () => {
    sliderRef.current.slickNext();
    sliderRefMobile.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
    sliderRefMobile.current.slickPrev();
  };

  return (
    <Container>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-9 col-lg-9 col-xl-9">
            <h1 className="fw-bold text-center text-md-start text-lg-start text-xl-start">
              We've Delivered Results For
              <br className="d-none d-mg-block d-lg-block d-xl-block" />
              Companies In Every Industry
            </h1>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 text-end d-none d-md-block d-lg-block d-xl-block">
            <button
              className="bg-transparent border-none text-light"
              onClick={previousSlide}
            >
              <i
                className="slide-icon bi bi-arrow-left-circle-fill"
                style={{
                  fontSize: "50px",
                  color: theme === "dark" ? "#FFFFFF" : "#000000",
                }}
              ></i>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              className="bg-transparent border-none text-light"
              onClick={nextSlide}
            >
              <i
                className="slide-icon bi bi-arrow-right-circle-fill"
                style={{
                  fontSize: "50px",
                  color: theme === "dark" ? "#FFFFFF" : "#000000",
                }}
              ></i>
            </button>
          </div>
        </div>
        <div className="container py-md-4 py-lg-4 py-xl-4 justify-content-center">
          <Slider
            className="d-none d-md-block d-lg-block d-xl-block"
            {...settings}
            ref={sliderRef}
          >
            {slideData.map((currentSlide, index) => (
              <CardSlid
                key={index}
                cardBgImg={currentSlide.url}
                cardText={currentSlide.text}
              />
            ))}
          </Slider>
          <Slider
            className="d-block d-md-none d-lg-none d-xl-none"
            {...settingsSmallScreen}
            ref={sliderRefMobile}
          >
            {slideData.map((currentSlide, index) => (
              <CardSlid
                key={index}
                cardBgImg={currentSlide.url}
                cardText={currentSlide.text}
              />
            ))}
          </Slider>
        </div>
        <div className="w-100 py-4 text-center d-block d-md-none d-lg-none d-xl-none">
          <button
            className="bg-transparent border-none text-light"
            onClick={previousSlide}
          >
            <i
              className="slide-icon bi bi-arrow-left-circle-fill"
              style={{
                fontSize: "50px",
                color: theme === "dark" ? "#FFFFFF" : "#000000",
              }}
            ></i>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="bg-transparent border-none text-light"
            onClick={nextSlide}
          >
            <i
              className="slide-icon bi bi-arrow-right-circle-fill"
              style={{
                fontSize: "50px",
                color: theme === "dark" ? "#FFFFFF" : "#000000",
              }}
            ></i>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CardSlider;
