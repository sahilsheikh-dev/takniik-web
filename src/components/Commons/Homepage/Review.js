import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
// import "swiper/css";
import cardBgImg1 from "../../../assets/img/services/videoproduction/card-img-1.png";
import cardBgImg2 from "../../../assets/img/services/videoproduction/card-img-2.png";
import cardBgImg3 from "../../../assets/img/services/videoproduction/card-img-3.png";
import RevirewCard from "./RevirewCard";
import Slider from "react-slick";
import { useRef } from "react";

const Review = ({ theme }) => {
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
    {
      userImage: cardBgImg1,
      name: "Giana Bothman",
      position: "Founder",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      userImage: cardBgImg2,
      name: "Skylar Septimus",
      position: "CEO",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      userImage: cardBgImg3,
      name: "Lydia Calzoni",
      position: "Manager",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      userImage: cardBgImg1,
      name: "Kaiya Westervelt",
      position: "Design",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      userImage: cardBgImg2,
      name: "Tatiana Siphron",
      position: "HR",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
    {
      userImage: cardBgImg3,
      name: "Kaiya Vetrovs",
      position: "Marketing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    },
  ];

  const nextSlide = () => {
    sliderRef.current.slickNext();
    sliderRefMobile.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
    sliderRefMobile.current.slickPrev();
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className="testinomial-section my-5">
      <div className="py-5 container">
        <Container>
          <div className="container px-0">
            <div className="row py-5">
              <div className="col-md-9 col-lg-9 col-xl-9">
                <h1 className="fw-bold text-center text-md-start text-lg-start text-xl-start">
                  What our Clients
                  <br className="d-none d-mg-block d-lg-block d-xl-block" />
                  says about us
                </h1>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3 text-end d-none d-md-block d-lg-block d-xl-block">
                <button
                  className="bg-transparent border-none"
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
                  className="bg-transparent border-none"
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
            <div className="container py-md-4 py-lg-4 py-xl-4 justify-content-center px-0">
              <Slider
                className="d-none d-md-block d-lg-block d-xl-block"
                {...settings}
                ref={sliderRef}
              >
                {slideData.map((currentSlide, index) => (
                  <RevirewCard
                    key={index}
                    theme={theme}
                    userImage={currentSlide.userImage}
                    name={currentSlide.name}
                    position={currentSlide.position}
                    text={currentSlide.text}
                  />
                ))}
              </Slider>
              <Slider
                className="d-block d-md-none d-lg-none d-xl-none"
                {...settingsSmallScreen}
                ref={sliderRefMobile}
              >
                {slideData.map((currentSlide, index) => (
                  <RevirewCard
                    key={index}
                    theme={theme}
                    userImage={currentSlide.userImage}
                    name={currentSlide.name}
                    position={currentSlide.position}
                    text={currentSlide.text}
                  />
                ))}
              </Slider>
            </div>
            <div className="w-100 py-4 text-center d-block d-md-none d-lg-none d-xl-none">
              <button
                className="bg-transparent border-none"
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
                className="bg-transparent border-none"
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
      </div>
    </div>
  );
};

export default Review;
