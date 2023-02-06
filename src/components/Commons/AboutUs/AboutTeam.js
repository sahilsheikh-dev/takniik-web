import React from "react";
import { useRef } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { FreeMode } from "swiper";
// import "swiper/css";
import Team1 from "../../../assets/img/about-us/team1.png";
import Team2 from "../../../assets/img/about-us/team2.png";
import Team3 from "../../../assets/img/about-us/team3.png";
import Team4 from "../../../assets/img/about-us/team4.png";
import Team5 from "../../../assets/img/about-us/team5.png";
import Team6 from "../../../assets/img/about-us/team6.png";
import TeamCard from "./Abouteam/TeamCard";

const AboutTeam = ({ theme }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    sliderRef.current.slickNext();
    sliderRefMobile.current.slickNext();
  };

  const previousSlide = () => {
    sliderRef.current.slickPrev();
    sliderRefMobile.current.slickPrev();
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
                  <TeamCard
                    key={index}
                    theme={theme}
                    userImage={currentSlide.userImage}
                    name={currentSlide.name}
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
                  <TeamCard
                    key={index}
                    theme={theme}
                    userImage={currentSlide.userImage}
                    name={currentSlide.name}
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
    </Container>
  );
};

export default AboutTeam;
