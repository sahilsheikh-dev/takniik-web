import React from "react";
import { Container } from "react-bootstrap";
import ContactBookIcon from "../assets/svg/Contact-book-icon.svg";
import ContactStarIcon from "../assets/svg/Contact-star-icon.svg";
import ContactUsersIcon from "../assets/svg/Contact-users-icon.svg";

const Contactinfo = () => {
  return (
    <Container>
      <div className="contact-info">
        <h1 className="contact-info-heading">How Can We Help?</h1>
        <p className="contact-info-subheading">
          Please select a topic below related to your inquiry. If you{" "}
          <br className="d-none d-lg-block d-xl-block" />
          don’t find what you need, fill out our contact form.
        </p>
        <div className="row contact-info-row">
          <div className="col-md-4 col-lg-4 col-xl-4 contact-info-col px-md-5 px-lg-5">
            <div className="row contact-info-card">
              <div className="col-1 offset-2 offset-md-0 offset-lg-0 d-flex align-items-center justify-content-start">
                <img className="" src={ContactBookIcon} alt="icon" />
              </div>
              <div className="col-8 col-md-10 col-lg-10">
                <h3 className="contact-card-title">Book a Demo</h3>
              </div>
            </div>
            <p className="contact-card-description">
              Request a demo from one of our <br /> conversion specialists.
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 contact-info-col px-md-5 px-lg-5">
            <div className="row contact-info-card">
              <div className="col-1 offset-3 offset-md-0 offset-lg-0 d-flex align-items-center justify-content-start">
                <img className="" src={ContactStarIcon} alt="icon" />
              </div>
              <div className="col-8 col-md-10 col-lg-10">
                <h3 className="contact-card-title">Get Inspired</h3>
              </div>
            </div>
            <p className="contact-card-description">
              Discover the many ways in which <br /> our customers use
            </p>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 contact-info-col px-md-5 px-lg-5">
            <div className="row contact-info-card">
              <div className="col-1 offset-1 offset-md-0 offset-lg-0 d-flex align-items-center justify-content-start">
                <img className="" src={ContactUsersIcon} alt="icon" />
              </div>
              <div className="col-8 col-md-10 col-lg-10">
                <h3 className="contact-card-title">Become a Partner</h3>
              </div>
            </div>
            <p className="contact-card-description">
              Join our Partner Program and <br /> earn 25% recurring commissions
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contactinfo;
