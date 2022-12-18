import React from "react";
import { Container } from "react-bootstrap";
import VeServiceBanner from "../../../../assets/img/services/nftdevelopment/banner-img.png";

const ServiceBanner = () => {
  return (
    <Container>
      <div className="service-banner text-center my-5 py-5">
        <h1 className="fw-bold">
          Growing Popularity of NFT Development Services
        </h1>
        <img
          className="img-fluid w-100 mx-auto my-5"
          style={{
            maxWidth: "400px",
          }}
          src={VeServiceBanner}
          alt="logo"
        />
        <p>
          FT development company that is known for providing impeccable
          non-fungible token development services to a global clientele. Whether
          you want to create non-fungible token or build an NFT marketplace,
          Antier has the resources and experience to transform your dream into
          reality. NFT tokens have a huge impact within the blockchain world;
          they are used in various fields like digital art, gaming, and more.
          NFTs attributes like uniqueness, indivisibility, ownership, and
          authenticity make them an irresistible choice
        </p>
      </div>
    </Container>
  );
};

export default ServiceBanner;
