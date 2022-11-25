import React from "react";
import ProductImage1 from "../../../../assets/img/services/seo/product-image-1.png";
import ProductImage2 from "../../../../assets/img/services/seo/product-image-2.png";
import ProductImage3 from "../../../../assets/img/services/seo/product-image-3.png";

const ProductDescription = () => {
  return (
    <div className="seo-product-description my-5 py-5 text-center">
      <h1 className="fw-bold mb-5">Product descriptions that Aim to Sell</h1>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 col-lg-4 col-xl-4 my-md-5 my-lg-5 my-xl-5 px-5">
            <img className="img-fluid h-50" src={ProductImage1} alt="img" />
            <h3 className="fw-bold mt-5">Engage & convert</h3>
            <p className="mt-3">
              We deliver creative product description writing that stand out,
              engage and convert
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 my-md-5 my-lg-5 my-xl-5 px-5">
            <img className="img-fluid h-50" src={ProductImage2} alt="img" />
            <h3 className="fw-bold mt-5">Make your product stand out</h3>
            <p className="mt-3">
              He writers in our network strike the perfect balance between
              storytelling, facts,
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 my-md-5 my-lg-5 my-xl-5 px-5">
            <img className="img-fluid h-50" src={ProductImage3} alt="img" />
            <h3 className="fw-bold mt-5">Get SEO-driven content</h3>
            <p className="mt-3">
              The writers make sure you get noticed by customers. The more
              visible you are, the better you rank,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
