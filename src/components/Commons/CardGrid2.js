import React from "react";
import { Container } from "react-bootstrap";

const CardGrid2 = ({ Heading1, Subheading1, Image1 }) => {
  return (
    <Container>
      <div className="seo-service my-5 py-5">
        <div className="row mx-auto" style={{ maxWidth: "100vw" }}>
          <div className="col-md-6 col-lg-6 col-xl-6 d-flex justify-content-between align-items-center">
            <div className="d-none d-md-block d-lg-block d-xl-block">
              <h1 className="fw-bold">{Heading1}</h1>
              <p className="about-out-description">{Subheading1}</p>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-xl-5 ms-auto pb-3 pe-0">
            <img
              className="about-our-img about-img-right"
              src={Image1}
              alt="img"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 d-block d-md-none d-lg-none d-xl-none">
            <h1 className="fw-bold">{Heading1}</h1>
            <p className="about-out-description">{Subheading1}</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CardGrid2;
