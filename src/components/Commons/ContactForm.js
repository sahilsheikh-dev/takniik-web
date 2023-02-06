import React from "react";
import { useState } from "react";
import { Button, Container } from "react-bootstrap";
import TelecomImg from "../../assets/img/telecom.png";
import {
  ContactInput,
  ContactInputNumber,
  ContactSpanNumber,
} from "../../theme";

const ContactForm = ({ theme }) => {
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
      <div className="achievement">
        {/* <h1 className="achievement-heading">Contact Us</h1> */}
        <div className="row">
          <div className="col-md-6 col-lg-6 col-xl-6 my-3 d-flex align-items-center">
            <img className="img-fluid w-100" src={TelecomImg} alt="logo" />
          </div>
          <div className="col-md-6 col-lg-6 col-xl-6 my-3 d-flex align-items-center">
            <form>
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
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ContactForm;
