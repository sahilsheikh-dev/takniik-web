import React from "react";
import { Button, Container } from "react-bootstrap";
import { NavBtn } from "../../../theme";

const Cta = ({ theme }) => {
  return (
    <Container>
      <div className="cta">
        <NavBtn className="cta-border" href="#">
          <div
            className="cta-card"
            // style={{ backgroundImage: `url(${CtaBg})` }}
          >
            <div className="cta-content">
              <h1
                className="cta-heading"
                style={{
                  color: `${theme === "dark" ? "#F9F7F7" : "#0A0A0D"}`,
                }}
              >
                Build your dream content team on the{" "}
                <br className="d-none d-lg-block d-xl-block" />
                platform designed for champions
              </h1>
              <p className="cta-subheading">Are you ready to join us?</p>
              <div className="text-center">
                <Button className="hero-btn">
                  Get Started &nbsp; <i class="bi bi-arrow-right"></i>{" "}
                </Button>
              </div>
            </div>
          </div>
        </NavBtn>
      </div>
    </Container>
  );
};

export default Cta;
