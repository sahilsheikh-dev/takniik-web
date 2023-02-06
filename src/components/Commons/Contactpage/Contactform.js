import React from "react";
import { Button, Container } from "react-bootstrap";
import {
  ContactInput,
  ContactInputNumber,
  ContactSpanNumber,
} from "../../../theme";
import LocationIcon from "../../../assets/svg/LocationIcon.svg";
import ContactTickIcon from "../../../assets/svg/ContactTickIcon.svg";
import ContactCallIcon from "../../../assets/svg/ContactCallIcon.svg";
import ContactMessageIcon from "../../../assets/svg/ContactMessageIcon.svg";
import ContactBgLight from "../../../assets/svg/ContactBgLight.svg";
import ContactBgDark from "../../../assets/svg/ContactBgDark.svg";
import { useState } from "react";

const Contactform = ({ theme }) => {
  const [username, setUsername] = useState("");
  const [userCompanyName, setUserCompanyName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userNumber, setUserNumber] = useState("");

  const sendMail = () => {
    if (
      username === "" ||
      username === null ||
      username === undefined ||
      userCompanyName === "" ||
      userCompanyName === null ||
      userCompanyName === undefined ||
      userEmail === "" ||
      userEmail === null ||
      userEmail === undefined ||
      userNumber === "" ||
      userNumber === null ||
      userNumber === undefined ||
      userNumber.length < 10
    ) {
      alert("Please Fill the Info");
    } else {
      console.log(username);
      console.log(userCompanyName);
      console.log(userEmail);
      console.log(userNumber);
    }
  };

  return (
    <Container>
      <div
        className="contact-form"
        style={{
          backgroundImage:
            theme === "dark"
              ? `url("${ContactBgDark}")`
              : `url("${ContactBgLight}")`,
        }}
      >
        <div className="row">
          <div className="col-md-6">
            <h3 className="contact-form-heading">Contact Us</h3>
            <p className="contact-form-subheading">
              Quality content generation, work with top <br />
              talent, use content OS and more.
            </p>
            <ContactInput
              className="contact-form-input"
              type={"text"}
              required
              id={"name"}
              name={"name"}
              placeholder={"Name"}
              onChange={(e) => setUsername(e.target.value)}
            />
            <ContactInput
              className="contact-form-input"
              type={"text"}
              required
              id={"company-name"}
              name={"company-name"}
              placeholder={"Company Name"}
              onChange={(e) => setUserCompanyName(e.target.value)}
            />
            <ContactInput
              className="contact-form-input"
              type={"email"}
              required
              id={"email"}
              name={"email"}
              placeholder={"Email ID"}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <div
              className="row"
              style={{
                margin: "0 1px",
                background: "rgba(255, 255, 255, 0.07)",
                border: "1px solid rgba(0, 0, 0, 0.2)",
                borderRadius: "7.14477px",
              }}
            >
              <div
                className="col-1"
                style={{
                  margin: "0 0 0 12px",
                  padding: "15px",
                  color: theme === "dark" ? "" : "#000000",
                }}
              >
                <ContactSpanNumber>+91</ContactSpanNumber>
              </div>
              <div className="col">
                <ContactInputNumber
                  type={"tel"}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                  id={"phone"}
                  name={"phone"}
                  placeholder={"Mobile Number"}
                  onChange={(e) => setUserNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="text-center">
              <Button className="hero-btn" onClick={() => sendMail()}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Submit&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
            </div>
          </div>
          <div className="col-md-6">
            <div className="contact-details">
              <h3 className="contact-form-heading">Contact Information</h3>
              <p className="contact-form-subheading">
                <img className="" src={LocationIcon} alt="icon" /> &nbsp; Barrow
                Street Nursery <br /> School 27 Barrow Street, 2nd Floor
              </p>
              <p className="contact-form-subheading">
                <img className="" src={ContactCallIcon} alt="icon" /> &nbsp;
                <a
                  href="tel:+45 71 99 77 07"
                  style={{
                    textDecoration: "none",
                    color: theme === "dark" ? "#fafcff" : "#0A0A0D",
                  }}
                >
                  +45 71 99 77 07
                </a>
              </p>
              <p className="contact-form-subheading">
                <img className="" src={ContactMessageIcon} alt="icon" /> &nbsp;
                <a
                  href="mailto:mail@takniik.com"
                  style={{
                    textDecoration: "none",
                    color: theme === "dark" ? "#fafcff" : "#0A0A0D",
                    textTransform: "none",
                  }}
                >
                  mail@takniik.com
                </a>
              </p>
            </div>
            <div className="contact-details" style={{ marginTop: "30px" }}>
              <h3 className="contact-form-heading">
                Why Use Takniik For Business ?
              </h3>
              <p className="contact-form-subheading">
                <img className="" src={ContactTickIcon} alt="icon" /> &nbsp;
                Eascy Scalability
              </p>
              <p className="contact-form-subheading">
                <img className="" src={ContactTickIcon} alt="icon" /> &nbsp;
                Plethold Of content types
              </p>
              <p className="contact-form-subheading">
                <img className="" src={ContactTickIcon} alt="icon" /> &nbsp;
                Tech- Enabled Content Ops
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contactform;
