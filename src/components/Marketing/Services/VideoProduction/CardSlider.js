import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "bootstrap/dist/css/bootstrap.min.css";
import CardSlid from "./CardSlid";
import cardBgImg1 from "../../../../assets/img/services/videoproduction/card-img-1.png";
import cardBgImg2 from "../../../../assets/img/services/videoproduction/card-img-2.png";
import cardBgImg3 from "../../../../assets/img/services/videoproduction/card-img-3.png";

const CardSlider = () => {
  const [my_swiper, set_my_swiper] = useState({});
  const slideData = [
    { url: cardBgImg1, text: "Beauty" },
    { url: cardBgImg2, text: "Education" },
    { url: cardBgImg3, text: "Food and Drinks" },
    { url: cardBgImg1, text: "Beauty" },
    { url: cardBgImg2, text: "Education" },
    { url: cardBgImg3, text: "Food and Drinks" },
  ];

  const nextSlide = () => {
    const wid = window.innerWidth;
    // change or add the conditions for more device aspect ratios
    if (wid >= 1000) {
      if (my_swiper.realIndex !== Math.round(slideData.length / 5)) {
        my_swiper.slideNext();
      }
    } else {
      if (my_swiper.realIndex !== slideData.length) {
        my_swiper.slideNext();
      }
    }
  };
  const previousSlide = () => {
    if (my_swiper.realIndex !== 0) {
      my_swiper.slidePrev();
    }
  };
  return (
    <Container>
      <div className="container">
        <div className="row py-5">
          <div className="col-md-9 col-lg-9 col-xl-9">
            <h1 className="fw-bold">
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
                class="slide-icon bi bi-chevron-left"
                style={{ fontSize: "30px" }}
              ></i>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button
              className="bg-transparent border-none text-light"
              onClick={nextSlide}
            >
              <i
                class="slide-icon bi bi-chevron-right"
                style={{ fontSize: "30px" }}
              ></i>
            </button>
          </div>
        </div>
        <div className="container py-md-4 py-lg-4 py-xl-4 justify-content-center">
          <Swiper
            freeMode={false}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper"
            slides
            PerView={1}
            spaceBetween={30}
            onInit={(ev) => {
              set_my_swiper(ev);
            }}
          >
            {slideData.map((currentSlide, index) => (
              <SwiperSlide index={index} className="swiper-slide">
                <CardSlid
                  cardBgImg={currentSlide.url}
                  CardText={currentSlide.text}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="w-100 py-4 text-center d-block d-md-none d-lg-none d-xl-none">
          <button
            className="bg-transparent border-none text-light"
            onClick={previousSlide}
          >
            <i
              class="slide-icon bi bi-chevron-left"
              style={{ fontSize: "30px" }}
            ></i>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button
            className="bg-transparent border-none text-light"
            onClick={nextSlide}
          >
            <i
              class="slide-icon bi bi-chevron-right"
              style={{ fontSize: "30px" }}
            ></i>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CardSlider;
