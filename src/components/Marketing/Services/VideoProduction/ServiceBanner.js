import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import VpServiceBanner from "../../../../assets/img/services/videoproduction/vp-serivce-banner.png";
import ContactBgDark from "../../../../assets/img/glass-bg-dark.png";

const ServiceBanner = ({ theme }) => {
  return (
    <Container>
      <div className="service-banner text-center my-5">
        <h1 className="fw-bold">Standard for performance video marketing.</h1>
        <img
          className="img-fluid w-75 my-5 mx-auto"
          src={VpServiceBanner}
          alt="logo"
        />
        <p>
          Offers on-demand video production services—from ideation to the final
          <br className="d-none d-md-block d-lg-block d-xl-block" />
          delivery backed by our industry-leading platform and methodology
          <br className="d-none d-md-block d-lg-block d-xl-block" />
          that’s tailored to each stage of the marketing funnel
        </p>
        <div className="row my-5 mx-md-5 mx-lg-5 mx-xl-5">
          <div className="col-md-6 col-lg-6 col-xl-6 p-2 text-start">
            <div
              className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundSize: "100%",
                backgroundImage:
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
              }}
            >
              <h3 className="my-3">
                Elevate your marketing strategy and grow your business with
                video
              </h3>
              <p className="">
                Video is proven to build brand awareness, drive engagement, and
                generate sales. As your video marketing agency,
              </p>
              <Button className="hero-btn">
                <Link
                  to={"/contact"}
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Get Started &nbsp; <i class="bi bi-arrow-right"></i>{" "}
                </Link>
              </Button>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 p-2 text-start">
            <div
              className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundSize: "100%",
                backgroundImage:
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
              }}
            >
              <h3 className="my-3">
                Expand or outsource client content productions
              </h3>
              <p className="">
                Video is proven to build brand awareness, drive engagement, and
                generate sales. As your video marketing agency,
              </p>
              <Button className="hero-btn">
                <Link
                  to={"/contact"}
                  style={{ textDecoration: "none", color: "#ffffff" }}
                >
                  Become a Partner &nbsp; <i class="bi bi-arrow-right"></i>{" "}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ServiceBanner;
