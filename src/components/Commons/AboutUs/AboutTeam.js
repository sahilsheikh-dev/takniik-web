import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import Team1 from "../../../assets/img/about-us/team1.png";
import Team2 from "../../../assets/img/about-us/team2.png";
import Team3 from "../../../assets/img/about-us/team3.png";
import Team4 from "../../../assets/img/about-us/team4.png";
import Team5 from "../../../assets/img/about-us/team5.png";
import Team6 from "../../../assets/img/about-us/team6.png";

const AboutTeam = ({ theme }) => {
  const [my_swiper, set_my_swiper] = useState({});
  const slideData = [
    {
      userImage: Team1,
      name: "Giana Bothman",
      position: "Founder",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      userImage: Team2,
      name: "Skylar Septimus",
      position: "CEO",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      userImage: Team3,
      name: "Lydia Calzoni",
      position: "Manager",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      userImage: Team4,
      name: "Kaiya Westervelt",
      position: "Design",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      userImage: Team5,
      name: "Tatiana Siphron",
      position: "HR",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      userImage: Team6,
      name: "Kaiya Vetrovs",
      position: "Marketing",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
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
      <div className="about-us">
        <Container>
          <div className="container px-0">
            <div className="row py-5">
              <div className="col-md-9 col-lg-9 col-xl-9">
                <h1 className="about-us-heading text-center text-md-start text-lg-start text-xl-start">
                  Our Team
                </h1>
                <p className="about-us-subheading text-center text-md-start text-lg-start text-xl-start">
                  We believe that creative collaboration can happen anywhere and
                  <br className="d-none d-md-block d-lg-block d-xl-block" />
                  want our team to work where they feel most comfortable and
                  <br className="d-none d-md-block d-lg-block d-xl-block" />
                  inspired.
                </p>
              </div>
              <div className="col-offset-9 col-md-3 col-lg-3 col-xl-3 text-end d-none d-md-block d-lg-block d-xl-block">
                <button
                  className="bg-transparent border-none"
                  onClick={previousSlide}
                >
                  <i
                    className="slide-icon bi bi-chevron-left"
                    style={{
                      fontSize: "30px",
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
                    className="slide-icon bi bi-chevron-right"
                    style={{
                      fontSize: "30px",
                      color: theme === "dark" ? "#FFFFFF" : "#000000",
                    }}
                  ></i>
                </button>
              </div>
            </div>
            <div className="container py-md-4 py-lg-4 py-xl-4 justify-content-center px-0">
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
                    <div className="card">
                      <img
                        src={currentSlide.userImage}
                        className="card-img-top rounded-0"
                        alt="logo"
                      />
                      <div className="card-body">
                        <h5 className="card-title fw-bold mb-3">
                          {currentSlide.name}
                        </h5>
                        <p className="card-text" style={{ fontSize: "14px" }}>
                          {currentSlide.text}
                        </p>
                      </div>
                    </div>
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
                  className="slide-icon bi bi-chevron-left"
                  style={{
                    fontSize: "30px",
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
                  className="slide-icon bi bi-chevron-right"
                  style={{
                    fontSize: "30px",
                    color: theme === "dark" ? "#FFFFFF" : "#000000",
                  }}
                ></i>
              </button>
            </div>
          </div>
        </Container>
      </div>
    </Container>
  );
};

export default AboutTeam;
