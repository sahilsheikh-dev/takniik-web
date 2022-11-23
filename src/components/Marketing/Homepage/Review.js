import React from "react";
import { Carousel } from "react-bootstrap";
import ReviewBgDark from "../../../assets/svg/reviewBgDark.svg";
import ReviewBgLight from "../../../assets/svg/reviewBgLight.svg";
import star from "../../../assets/svg/star.svg";

const Review = ({ theme }) => {
  return (
    <div className="review">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 review-bg-image"
            src={theme === "dark" ? ReviewBgDark : ReviewBgLight}
            alt="Review"
          />
          <div class="client-review">
            <h3 className="review-heading">Hear it from our customers</h3>
            <p className="review-subheading">
              “ taniik has never failed to live up to our expectations and has
              become our favorite team to work with. It has undoubtedly blazed a
              beautiful trail of professionalism, zeal and dedication. We have
              always loved working with team Taniik ”
            </p>
            <div className="stars">
              <img src={star} className="star" alt="img" />
              <img src={star} className="star" alt="img" />
              <img src={star} className="star" alt="img" />
              <img src={star} className="star" alt="img" />
            </div>
            <h3 className="client-name">
              Bharat Bhattad, <br /> Head of Digital Marketing,
            </h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 review-bg-image"
            src={theme === "dark" ? ReviewBgDark : ReviewBgLight}
            alt="Review"
          />
          <div class="client-review">
            <h3 className="review-heading">Hear it from our customers</h3>
            <p className="review-subheading">
              “ taniik has never failed to live up to our expectations and has
              become our favorite team to work with. It has undoubtedly blazed a
              beautiful trail of professionalism, zeal and dedication. We have
              always loved working with team Taniik ”
            </p>
            <div className="stars">
              <img src={star} className="star" alt="img" />
              <img src={star} className="star" alt="img" />
              <img src={star} className="star" alt="img" />
              <img src={star} className="star" alt="img" />
            </div>
            <h3 className="client-name">
              Bharat Bhattad, <br /> Head of Digital Marketing,
            </h3>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 review-bg-image"
            src={theme === "dark" ? ReviewBgDark : ReviewBgLight}
            alt="Review"
          />
          <div class="client-review">
            <h3 className="review-heading">Hear it from our customers</h3>
            <p className="review-subheading">
              “ taniik has never failed to live up to our expectations and has
              become our favorite team to work with. It has undoubtedly blazed a
              beautiful trail of professionalism, zeal and dedication. We have
              always loved working with team Taniik ”
            </p>
            <div className="stars">
              <img src={star} className="star" alt="img" />
              <img src={star} className="star" alt="img" />
              <img src={star} className="star" alt="img" />
              <img src={star} className="star" alt="img" />
            </div>
            <h3 className="client-name">
              Bharat Bhattad, <br /> Head of Digital Marketing,
            </h3>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Review;
