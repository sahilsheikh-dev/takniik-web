import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/style.css";
import NavLogo from "../../assets/svg/nav-logo.svg";
import { Nav, NavLink, Container, Image, Navbar } from "react-bootstrap";
import Instagram from "../../assets/svg/Instagram.svg";
import Facebook from "../../assets/svg/Facebook.svg";
import Linkedin from "../../assets/svg/Linkedin.svg";
import Twitter from "../../assets/svg/Twitter.svg";

const Footer = () => {
  return (
    <div
      style={{
        background: `linear-gradient(180deg, #0A0A0D 0%, #19191D 95.51%)`,
      }}
    >
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand className="text-center mx-auto ms-lg-auto" href="#home">
            <Image className=" nav-icon" fluid src={NavLogo} />
          </Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="icon-section nav-link-section">
              <Nav.Link href="#" target={"_blank"}>
                <img
                  className="social-icon"
                  src={Instagram}
                  alt="social-icon"
                />
              </Nav.Link>
              <Nav.Link href="#" target={"_blank"}>
                <img className="social-icon" src={Twitter} alt="social-icon" />
              </Nav.Link>
              <Nav.Link href="#" target={"_blank"}>
                <img className="social-icon" src={Linkedin} alt="social-icon" />
              </Nav.Link>
              <Nav.Link href="#" target={"_blank"}>
                <img className="social-icon" src={Facebook} alt="social-icon" />
              </Nav.Link>
            </Nav>
          </Navbar>
        </Container>
      </Navbar>
      <Container>
        <div className="footer-description">
          <p className="footer-text">
            Â§ Accurate as of 06.08.2022. Current rating can be found on
            Finofiiâ€™s App Store listing and is subject to change. Rating is
            based on the average of all total app reviews from App StoreÂ®. App
            Store users are not required to be Finofii clients to rate the app.
            Rating is not necessarily representative of any one clientâ€™s
            experience, nor is it indicative of investor performance. â€œTop
            Rated Personal Finance Appâ€ category awarded to finance apps above
            4 stars ratings by the App Store, and individual reviewer experience
            may vary.
            <br />
            <br />
            The reported customer count of 730,000+ is as of March 31, 2022.
            <br />
            <br />
            This property and any marketing on the property are provided by
            FINOFII FINTECH PRIVATE LIMITED. To the extent that there is
            marketing related to Finofii Checking, it is provided by Finofii
            Financial LLC.
            <br />
            <br />
            Finofii's reported assets under management (AUM) of $33 Billion+ is
            as of March 31, 2022.
            <br />
            <br />
            Advisory services provided by FINOFII FINTECH PRIVATE LIMITED, an
            SEC-registered investment adviser. Finofii Cash Reserve is offered
            by FINOFII FINTECH PRIVATE LIMITED.
            <br />
            <br />
            Finofii Checking made available through Finofii Financial LLC.
            Checking accounts and the Finofii Visa Debit Card provided by and
            issued by nbkc bank, Overland Park, Kansas, Member FDIC. Neither
            FINOFII FINTECH PRIVATE LIMITED nor Finofii Financial LLC, nor any
            of their affiliates, is a bank.
            <br />
            <br />
            Investments in securities: Not FDIC Insured â€¢ No Bank Guarantee
            â€¢ May Lose Value. Investing in securities involves risks, and
            there is always the potential of losing money when you invest in
            securities. Before investing, consider your investment objectives
            and FINOFII FINTECH PRIVATE LIMITED's charges and expenses. FINOFII
            FINTECH PRIVATE LIMITED's internet-based advisory services are
            designed to assist clients in achieving discrete financial goals.
            They are not intended to provide comprehensive tax advice or
            financial planning with respect to every aspect of a client's
            financial situation and do not incorporate specific investments that
            clients hold elsewhere. For more details, see our Form CRS, Form ADV
            Part II and other disclosures. Past performance does not guarantee
            future results, and the likelihood of investment outcomes are
            hypothetical in nature. Not an offer, solicitation of an offer, or
            advice to buy or sell securities in jurisdictions where FINOFII
            FINTECH PRIVATE LIMITED is not registered. Market Data by Xignite.
            Fund data Â© 2022 Finofii. All Rights Reserved. The information
            contained herein: (1) is proprietary to Morningstar and/or its
            content providers; (2) may not be copied or distributed; and (3) is
            not warranted to be accurate, complete or timely. Neither
            Morningstar nor its content providers are responsible for any
            damages or losses arising from any use of this information.
          </p>
        </div>
        <div className="footer-divider"></div>
        <div className="">
          <div className="row footer-links">
            <div className="col-md-1 col-lg-2 footer-link">
              <NavLink href="#">Site Map</NavLink>
            </div>
            <div className="col-md-2 col-lg-2 footer-link">
              <NavLink href="#">Terms of Use</NavLink>
            </div>
            <div className="col-md-2 col-lg-2 footer-link">
              <NavLink href="#">Privacy Policy</NavLink>
            </div>
            <div className="col-md-1 col-lg-2 footer-link">
              <NavLink href="#">Trademark</NavLink>
            </div>
            <div className="col-md-2 col-lg-2 footer-link">
              <NavLink href="#">Legal Directory</NavLink>
            </div>
            <div className="col-md-3 col-lg-2 footer-link">
              <NavLink href="#">&copy; All rights reserved</NavLink>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
