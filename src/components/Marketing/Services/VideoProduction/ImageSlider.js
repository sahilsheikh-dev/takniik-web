import React from "react";
import SliderImg from "../../../../assets/img/services/videoproduction/image-slider.png";

const ImageSlider = () => {
  return (
    <div className="video-slider text-center py-5">
      <h1 className="fw-bold">We’ve produced over 15,000 videos.</h1>
      <div className="imgae-slider my-5">
        <img className="img-fluid mx-0 px-0" src={SliderImg} alt="logo" />
      </div>
    </div>
  );
};

export default ImageSlider;
