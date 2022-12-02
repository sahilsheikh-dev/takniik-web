import React from "react";
import { Container } from "react-bootstrap";
import ServiceImage1 from "../../../../assets/img/services/mobiledevelopment/service-img-1.png";
import ServiceImage2 from "../../../../assets/img/services/mobiledevelopment/service-img-2.png";

const ServiceBanner = () => {
  return (
    <Container>
      <div className="service-banner text-center my-5">
        <h1 className="fw-bold">Mobile Development Service We Provide</h1>
        <div className="row my-5 mx-md-5 mx-lg-5 mx-xl-5">
          <div className="col-md-6 col-lg-6 col-xl-6 p-2 text-center">
            <div className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none">
              <h3 className="my-3 hero-title-gradient fw-bold">
                Native application development
              </h3>
              <img
                className="img-fluid w-50 mx-auto my-3"
                src={ServiceImage1}
                alt="logo"
              />
              <p className="">
                Native development is the process of building apps for a
                specific operating system like Android and iOS
              </p>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-2 text-center">
            <div className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none">
              <h3 className="my-3 hero-title-gradient fw-bold">
                Hybrid application development
              </h3>
              <img
                className="img-fluid w-50 mx-auto my-3"
                src={ServiceImage2}
                alt="logo"
              />
              <p className="">
                The hybrid app development methodology revolves around building
                an app with a single project using a framework that can target
                all needed platforms
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceBanner;
