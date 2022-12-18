import React from "react";
import { Container } from "react-bootstrap";

const ServiceBanner = () => {
  return (
    <Container>
      <div className="service-banner text-center my-5 py-5">
        <h1 className="fw-bold">Deployment Support Services Hours</h1>
        <p>
          Typically a ForgeRock subscription will have 25 hours attached, to be
          used over the duration of the project. For instance: over a three
          month project the ForgeRock consultant could be available for weekly
          2-hour screen sharing sessions. The dates and times will typically be
          agreed in advance at the beginning of the project, or for agile
          projects can be
        </p>
      </div>
    </Container>
  );
};

export default ServiceBanner;
