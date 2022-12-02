import React from "react";

const ColumnGrid3 = ({
  Heading,
  Image1,
  Image2,
  Image3,
  Heading1,
  Heading2,
  Heading3,
  Subheading1,
  Subheading2,
  Subheading3,
}) => {
  return (
    <div className="seo-product-description my-5 py-5 text-center">
      <h1 className="fw-bold mb-5">{Heading}</h1>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4 col-lg-4 col-xl-4 my-md-5 my-lg-5 my-xl-5 px-5">
            <img className="img-fluid h-50" src={Image1} alt="img" />
            <h3 className="fw-bold mt-5">{Heading1}</h3>
            <p className="mt-3">{Subheading1}</p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 my-md-5 my-lg-5 my-xl-5 px-5">
            <img className="img-fluid h-50" src={Image2} alt="img" />
            <h3 className="fw-bold mt-5">{Heading2}</h3>
            <p className="mt-3">{Subheading2}</p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 my-md-5 my-lg-5 my-xl-5 px-5">
            <img className="img-fluid h-50" src={Image3} alt="img" />
            <h3 className="fw-bold mt-5">{Heading3}</h3>
            <p className="mt-3">{Subheading3}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColumnGrid3;
