import React from "react";
import { Container } from "react-bootstrap";
import ContactBgDark from "../../../../assets/img/glass-bg-dark.png";
import Client1 from "../../../../assets/img/services/nftdevelopment/client1.png";
import Client2 from "../../../../assets/img/services/nftdevelopment/client2.png";
import Client3 from "../../../../assets/img/services/nftdevelopment/client3.png";
import Client4 from "../../../../assets/img/services/nftdevelopment/client4.png";

const ClientCard = ({ theme }) => {
  return (
    <Container>
      <div className="service-banner text-center my-5 py-5">
        <h1 className="fw-bold">
          NFT Token Development on Leading Blockchain Networks
        </h1>
        <div className="row my-5 mx-md-5 mx-lg-5 mx-xl-5">
          <div className="col-md-3 col-lg-3 col-xl-3 p-5 text-start">
            <div
              className="p-2 p-md-3 p-lg-3 p-xl-3 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img className="img-fluid h-100" src={Client1} alt="img" />
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 p-5 text-start">
            <div
              className="p-2 p-md-3 p-lg-3 p-xl-3 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img className="img-fluid h-100" src={Client2} alt="img" />
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 p-5 text-start">
            <div
              className="p-2 p-md-3 p-lg-3 p-xl-3 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img className="img-fluid h-100" src={Client3} alt="img" />
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 p-5 text-start">
            <div
              className="p-2 p-md-3 p-lg-3 p-xl-3 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img className="img-fluid h-100" src={Client4} alt="img" />
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 p-5 text-start offset-md-3 offset-lg-3 offset-xl-3">
            <div
              className="p-2 p-md-3 p-lg-3 p-xl-3 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img className="img-fluid h-100" src={Client2} alt="img" />
            </div>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 p-5 text-start">
            <div
              className="p-2 p-md-3 p-lg-3 p-xl-3 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img className="img-fluid h-100" src={Client3} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ClientCard;
