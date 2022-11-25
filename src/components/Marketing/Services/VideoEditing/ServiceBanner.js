import React from "react";
import { Container } from "react-bootstrap";
import VeServiceBanner from "../../../../assets/img/services/videoediting/ve-serivce-banner.png";

const ServiceBanner = () => {
  return (
    <Container>
      <div className="service-banner text-center my-5">
        <h1 className="fw-bold">Best quality editing services here</h1>
        <img
          className="img-fluid w-75 mx-auto"
          src={VeServiceBanner}
          alt="logo"
        />
        <p>
          Offers on-demand video production services—from ideation to the final
          <br className="d-none d-md-block d-lg-block d-xl-block" />
          delivery backed by our industry-leading platform and methodology
          <br className="d-none d-md-block d-lg-block d-xl-block" />
          that’s tailored to each stage of the marketing funnel
        </p>
      </div>
    </Container>
  );
};

export default ServiceBanner;
