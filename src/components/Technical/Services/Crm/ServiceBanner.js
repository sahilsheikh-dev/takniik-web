import React from "react";
import { Container } from "react-bootstrap";
import VpServiceBanner from "../../../../assets/img/services/crm/subhero.png";

const ServiceBanner = () => {
  return (
    <Container>
      <div className="service-banner text-center my-5">
        <h1 className="fw-bold">Standard for performance video marketing.</h1>
        <p>
          Offers on-demand video production services—from ideation to the final
          <br className="d-none d-md-block d-lg-block d-xl-block" />
          delivery backed by our industry-leading platform and methodology
          <br className="d-none d-md-block d-lg-block d-xl-block" />
          that’s tailored to each stage of the marketing funnel
        </p>
        <img
          className="img-fluid w-75 my-5 mx-auto"
          src={VpServiceBanner}
          alt="logo"
        />
      </div>
    </Container>
  );
};

export default ServiceBanner;
