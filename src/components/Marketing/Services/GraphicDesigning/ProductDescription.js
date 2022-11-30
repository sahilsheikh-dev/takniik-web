import React from "react";
import ProductImage1 from "../../../../assets/img/services/graphicsdesigning/product-image-1.png";

const ProductDescription = () => {
  return (
    <div className="seo-product-description my-5 py-5 text-center">
      <div className="row ms-0" style={{ maxWidth: "100vw" }}>
        <div className="col-md-6 col-lg-6 col-xl-6 ms-md-5 ms-lg-5 ms-xl-5 me-0 pe-0 d-flex justify-content-between align-items-center">
          <div className="text-start container ms-0 ms-md-5 ms-lg-5 ms-xl-5 ps-md-5 ps-lg-5 ps-xl-5 d-none d-md-block d-lg-block d-xl-block">
            <h1 className="fw-bold">Custom-made designs and illustrations</h1>
            <p className="about-out-description">
              Create a blog brief using our hassle-free, guided flow. Get a
              preliminary quote and estimated delivery time in under a minute.
            </p>
          </div>
        </div>
        <div className="col-md-5 col-lg-5 col-xl-5 ms-auto pb-3 pe-0">
          <img
            className="about-our-img about-img-right"
            src={ProductImage1}
            alt="img"
          />
        </div>
        <div className="col-md-6 col-lg-6 col-xl-6 d-block d-md-none d-lg-none d-xl-none">
          <h1 className="fw-bold">Tell us what you need designed</h1>
          <p className="about-out-description">
            Create a blog brief using our hassle-free, guided flow. Get a
            preliminary quote and estimated delivery time in under a minute.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
