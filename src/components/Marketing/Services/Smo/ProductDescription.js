import React from "react";
import ProductImage1 from "../../../../assets/img/services/smo/product-image-1.png";
import ProductImage2 from "../../../../assets/img/services/smo/product-image-2.png";
import ProductImage3 from "../../../../assets/img/services/smo/product-image-3.png";

const ProductDescription = () => {
  return (
    <div className="seo-product-description my-5 py-5 text-center">
      <h1 className="fw-bold mb-5">Custom-made Designs and Illustrations</h1>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 col-lg-4 col-xl-4 my-md-5 my-lg-5 my-xl-5 px-5">
            <img className="img-fluid h-50" src={ProductImage1} alt="img" />
            <h3 className="fw-bold mt-5">
              Unique designs that match your brand
            </h3>
            <p className="mt-3">
              Stop sifting through the endless stream of freelancers. We find
              the best-fit writers for your content.
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 my-md-5 my-lg-5 my-xl-5 px-5">
            <img className="img-fluid h-50" src={ProductImage2} alt="img" />
            <h3 className="fw-bold mt-5">Copyright & ownership</h3>
            <p className="mt-3">
              There’s a difference between keyword-rich content and
              keyword-stuffing. Our creators understand this and deliver content
              that ranks.
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 my-md-5 my-lg-5 my-xl-5 px-5">
            <img className="img-fluid h-50" src={ProductImage3} alt="img" />
            <h3 className="fw-bold mt-5">Start with 1 or a 100</h3>
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