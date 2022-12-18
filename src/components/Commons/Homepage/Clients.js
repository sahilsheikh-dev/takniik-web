import React from "react";
import { Container, Image } from "react-bootstrap";
import ClientLogoDark1 from "../../../assets/img/clients/Dark/ClientLogoDark1.png";
import ClientLogoDark2 from "../../../assets/img/clients/Dark/ClientLogoDark2.png";
import ClientLogoDark3 from "../../../assets/img/clients/Dark/ClientLogoDark3.png";
import ClientLogoDark4 from "../../../assets/img/clients/Dark/ClientLogoDark4.png";
import ClientLogoDark5 from "../../../assets/img/clients/Dark/ClientLogoDark5.png";
import ClientLogoDark6 from "../../../assets/img/clients/Dark/ClientLogoDark6.png";
import ClientLogoDark7 from "../../../assets/img/clients/Dark/ClientLogoDark7.png";
import ClientLogoDark8 from "../../../assets/img/clients/Dark/ClientLogoDark8.png";
import ClientLogoDark9 from "../../../assets/img/clients/Dark/ClientLogoDark9.png";
import ClientLogoLight1 from "../../../assets/img/clients/Light/ClientLogoLight1.png";
import ClientLogoLight2 from "../../../assets/img/clients/Light/ClientLogoLight2.png";
import ClientLogoLight3 from "../../../assets/img/clients/Light/ClientLogoLight3.png";
import ClientLogoLight4 from "../../../assets/img/clients/Light/ClientLogoLight4.png";
import ClientLogoLight5 from "../../../assets/img/clients/Light/ClientLogoLight5.png";
import ClientLogoLight6 from "../../../assets/img/clients/Light/ClientLogoLight6.png";
import ClientLogoLight7 from "../../../assets/img/clients/Light/ClientLogoLight7.png";
import ClientLogoLight8 from "../../../assets/img/clients/Light/ClientLogoLight8.png";
import ClientLogoLight9 from "../../../assets/img/clients/Light/ClientLogoLight9.png";

const Clients = ({ theme }) => {
  return (
    <Container>
      <div className="client">
        <h1 className="client-heading">Our Clients</h1>

        <div className="client-logo-section row">
          <div className="col-4 col-md-3 col-lg-2 text-center d-flex justify-content-between align-items-center">
            <Image
              src={theme === "dark" ? ClientLogoDark1 : ClientLogoLight1}
              className="client-logo"
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2 text-center d-flex justify-content-between align-items-center">
            <Image
              src={theme === "dark" ? ClientLogoDark2 : ClientLogoLight2}
              className="client-logo"
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2 text-center d-flex justify-content-between align-items-center d-flex justify-content-between align-items-center">
            <Image
              src={theme === "dark" ? ClientLogoDark3 : ClientLogoLight3}
              className="client-logo"
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2 text-center d-flex justify-content-between align-items-center">
            <Image
              src={theme === "dark" ? ClientLogoDark4 : ClientLogoLight4}
              className="client-logo"
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2 text-center d-flex justify-content-between align-items-center">
            <Image
              src={theme === "dark" ? ClientLogoDark5 : ClientLogoLight5}
              className="client-logo"
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2 text-center d-flex justify-content-between align-items-center">
            <Image
              src={theme === "dark" ? ClientLogoDark6 : ClientLogoLight6}
              className="client-logo"
            />
          </div>
          {/* hide for small and medium screen */}
          <div className="ms-auto col-6 col-md-3 col-lg-2 d-none d-none d-lg-block d-xl-block text-center d-flex justify-content-between align-items-center">
            <Image
              src={theme === "dark" ? ClientLogoDark7 : ClientLogoLight7}
              className="client-logo"
            />
          </div>
          <div className="col-6 col-md-3 col-lg-2 d-none d-none d-lg-block d-xl-block text-center d-flex justify-content-between align-items-center">
            <Image
              src={theme === "dark" ? ClientLogoDark8 : ClientLogoLight8}
              className="client-logo"
            />
          </div>
          <div className="me-auto col-6 col-md-3 col-lg-2 d-none d-none d-lg-block d-xl-block">
            <Image
              src={theme === "dark" ? ClientLogoDark9 : ClientLogoLight9}
              className="client-logo"
            />
          </div>
          {/* show for small and medium screen */}
          <div className="col-4 col-md-3 col-lg-2 text-center d-flex justify-content-between align-items-center d-block d-lg-none d-xl-none">
            <Image
              src={theme === "dark" ? ClientLogoDark7 : ClientLogoLight7}
              className="client-logo"
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2 text-center d-flex justify-content-between align-items-center d-block d-lg-none d-xl-none">
            <Image
              src={theme === "dark" ? ClientLogoDark8 : ClientLogoLight8}
              className="client-logo"
            />
          </div>
          <div className="col-4 col-md-3 col-lg-2 text-center d-flex justify-content-between align-items-center mx-auto d-block d-lg-none d-xl-none">
            <Image
              src={theme === "dark" ? ClientLogoDark9 : ClientLogoLight9}
              className="client-logo"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Clients;
