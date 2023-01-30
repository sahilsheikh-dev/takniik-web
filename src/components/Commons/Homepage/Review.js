import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import cardBgImg1 from "../../../assets/img/services/videoproduction/card-img-1.png";
import cardBgImg2 from "../../../assets/img/services/videoproduction/card-img-2.png";
import cardBgImg3 from "../../../assets/img/services/videoproduction/card-img-3.png";
import RevirewCard from "./RevirewCard";

const Review = ({ theme }) => {
  const [my_swiper, set_my_swiper] = useState({});
  const [swipable, setSwipable] = useState(true);
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
    const wid = window.innerWidth;
    // change or add the conditions for more device aspect ratios
    if (wid >= 1000) {
      if (my_swiper.realIndex !== Math.round(slideData.length / 5)) {
        setSwipable(true);
        my_swiper.slideNext();
      }
    } else {
      if (my_swiper.realIndex !== slideData.length) {
        setSwipable(true);
        my_swiper.slideNext();
      }
    }
  };

  const previousSlide = () => {
    if (my_swiper.realIndex !== 0) {
      setSwipable(true);
      my_swiper.slidePrev();
    }
  };

  const updateSlideChange = () => {
    const wid = window.innerWidth;
    if (wid >= 1000) {
      if (my_swiper.realIndex !== Math.round(slideData.length / 5)) {
        console.log(my_swiper.realIndex);
        console.log("swiped to previous slide");
      }
    } else {
      if (my_swiper.realIndex !== slideData.length) {
        console.log(my_swiper.realIndex);
        console.log("swiped to previous slide");
      }
    }
    if (my_swiper.realIndex !== 0) {
      console.log(my_swiper.realIndex);
      console.log("swiped to next slide");
      console.log(Math.round(slideData.length / 5));
      if (my_swiper.realIndex !== Math.round(slideData.length / 5) - 1) {
        setSwipable(false);
        console.log("last index");
        console.log(swipable);
      } else {
        setSwipable(true);
        console.log("not a last index");
      }
    }
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
              <Swiper
                id="swiper"
                className="mySwiper"
                freeMode={false}
                grabCursor={true}
                modules={[FreeMode]}
                slides
                PerView={1}
                spaceBetween={30}
                onSlideChange={() => updateSlideChange()}
                wrapperclassName={swipable === true ? "swiper-wrapper" : "disabled"}
                onInit={(ev) => {
                  set_my_swiper(ev);
                }}
              >
                {slideData.map((currentSlide, index) => (
                  <SwiperSlide key={index} className="swiper-slide">
                    <RevirewCard
                      theme={theme}
                      userImage={currentSlide.userImage}
                      name={currentSlide.name}
                      position={currentSlide.position}
                      text={currentSlide.text}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
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
