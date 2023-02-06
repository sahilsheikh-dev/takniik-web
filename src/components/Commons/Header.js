import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../../assets/css/style.css";
import {
  ButtonGroup,
  Container,
  Dropdown,
  Image,
  Nav,
  Navbar,
} from "react-bootstrap";
import NavLogo from "../../assets/svg/nav-logo.svg";
import MoonActive from "../../assets/svg/MoonActive.svg";
import SunActive from "../../assets/svg/SunActive.svg";
import NavToggleDark from "../../assets/svg/NavToggleDark.svg";
import NavToggleLight from "../../assets/svg/NavToggleLight.svg";
import CloseLight from "../../assets/svg/CloseLight.svg";
import CloseDark from "../../assets/svg/CloseDark.svg";
import styled, { ThemeProvider } from "styled-components";
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
  NavBtn,
  NavLink,
} from "../../theme";
import riveToggle from "../../assets/rive/toggler.riv";
import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import FieldChangeToggle from "./FieldChangeToggle";
import CareerToggle from "./CareerToggle";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Header = ({ themeToggler, fieldToggler, theme }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [togglerNavIconDark, settoggleNavIconDark] = useState(NavToggleDark);
  const [togglerNavIconLight, settoggleNavIconLight] = useState(NavToggleLight);

  const [show, setShow] = useState(false);

  const currentUrl = window.location.href;
  const pageName = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };

  const STATEMACHINE_NAME = "Switch";
  const INPUT_NAME = "Trigger 1";

  const { rive, RiveComponent } = useRive({
    src: riveToggle,
    stateMachines: STATEMACHINE_NAME,
    autoplay: true,
  });

  const onClickInput = useStateMachineInput(
    rive,
    STATEMACHINE_NAME,
    INPUT_NAME
  );

  const toggleComponent = () => {
    onClickInput.fire();
    console.log("done");
    themeToggler();
  };

  const toggleNavIcon = () => {
    if (showIcon) {
      setShowIcon(false);
      settoggleNavIconDark(NavToggleDark);
      settoggleNavIconLight(NavToggleLight);
    } else {
      setShowIcon(true);
      settoggleNavIconDark(CloseDark);
      settoggleNavIconLight(CloseLight);
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem("currentField") === "" ||
      localStorage.getItem("currentField") === null ||
      localStorage.getItem("currentField") === undefined
    ) {
      localStorage.setItem("currentField", "Marketing");
    }
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />
        <Navbar
          className="navbar my-0 py-0"
          expand="lg"
          fixed="top"
          style={{
            background: theme === "dark" ? "#0A0A0D" : "#FAFCFF",
            opacity: 0.9,
          }}
        >
          <CareerToggle theme={theme} />
          <Container className="my-0">
            <Navbar.Brand href="#">
              <Link to={"/"} style={{ textDecoration: "none" }}>
                <Image className="nav-icon" fluid src={NavLogo} />
              </Link>
            </Navbar.Brand>
            <div className="d-block d-lg-none" style={{ marginLeft: "-70px" }}>
              {showIcon ? (
                <img
                  id="themeToggleBtn"
                  className="theme-icon-active"
                  src={theme === "dark" ? MoonActive : SunActive}
                  alt="toggle"
                  onClick={themeToggler}
                  style={{
                    width: "45px",
                    height: "45px",
                  }}
                />
              ) : (
                ""
              )}
            </div>
            <Navbar.Toggle
              className="shadow-none border-none"
              aria-controls="basic-navbar-nav"
            >
              <img
                onClick={toggleNavIcon}
                src={
                  theme === "dark" ? togglerNavIconDark : togglerNavIconLight
                }
                alt="toggle"
              />
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto nav-link-section">
                <Nav.Link href="#">
                  <Link to={"/"} style={{ textDecoration: "none" }}>
                    <NavLink className="nav-link">Home</NavLink>
                  </Link>
                </Nav.Link>

                <Nav.Link href="#">
                  <Link to={"/aboutus"} style={{ textDecoration: "none" }}>
                    <NavLink className="nav-link">About Us</NavLink>
                  </Link>
                </Nav.Link>

                {localStorage.getItem("currentField") === "Marketing" ? (
                  <Nav.Link href="#">
                    <Dropdown
                      className="nav-link"
                      id="collasible-nav-dropdown"
                      show={show}
                      onMouseEnter={showDropdown}
                      onMouseLeave={hideDropdown}
                    >
                      <Dropdown id="dropdown-basic" className="hover-pink">
                        <NavLink className="hover-pink text-decoration-none nav-opt">
                          Services <i className="bi bi-caret-down-fill"></i>
                        </NavLink>
                      </Dropdown>
                      <Dropdown.Menu
                        style={{
                          backgroundColor:
                            theme === "dark" ? "#181A1C" : "#F5F5F5",
                          marginTop: "-5px",
                        }}
                      >
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/seo"
                          >
                            SEO
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/videoproduction"
                          >
                            Video Production
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/videoediting"
                          >
                            Video Editing
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/contentwriting"
                          >
                            Content Writing
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/smo"
                          >
                            SMO
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to={"/graphicdesigning"}
                          >
                            Graphic Designing
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Link>
                ) : (
                  <Nav.Link href="#">
                    <Dropdown
                      className="nav-link"
                      id="collasible-nav-dropdown"
                      show={show}
                      onMouseEnter={showDropdown}
                      onMouseLeave={hideDropdown}
                    >
                      <Dropdown id="dropdown-basic" className="hover-pink">
                        <NavLink className="hover-pink text-decoration-none nav-opt">
                          Services <i className="bi bi-caret-down-fill"></i>
                        </NavLink>
                      </Dropdown>
                      <Dropdown.Menu
                        style={{
                          backgroundColor:
                            theme === "dark" ? "#181A1C" : "#F5F5F5",
                          marginTop: "-5px",
                        }}
                      >
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/mobiledevelopment"
                          >
                            Mobile App Development
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/webdevelopment"
                          >
                            Web Development
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/crmdevelopment"
                          >
                            CRM Development
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/cmsdevelopment"
                          >
                            CMS Development
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/customdevelopment"
                          >
                            Custom Development
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/aimodule"
                          >
                            AI Module
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/nftdevelopment"
                          >
                            NFT Development
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/blockchaindevelopment"
                          >
                            Blockchain Development
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/testingautomation"
                          >
                            Testing Automation
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/deploymentsupport"
                          >
                            Deployment Consulting and Support
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item className="hover-item">
                          <Link
                            className="text-decoration-none"
                            style={{
                              color: theme === "dark" ? "#FFFFFF" : "#000000",
                            }}
                            to="/uiuxdevelopment"
                          >
                            UI/UX Development
                          </Link>
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </Nav.Link>
                )}

                <Nav.Link href="#">
                  <Link to={"/blogs"} style={{ textDecoration: "none" }}>
                    <NavLink className="nav-link">Blogs</NavLink>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <div className="d-flex align-items-center d-block d-md-none d-lg-none d-xl-none py-0">
                    {pageName === "" ||
                    pageName === "aboutus" ||
                    pageName === "contact" ? (
                      <div className="d-flex align-items-center my-0">
                        <FieldChangeToggle fieldToggler={fieldToggler} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </Nav.Link>
              </Nav>

              <ButtonGroup className="nav-btn-section">
                <div className="d-block d-md-inline-flex d-lg-inline-flex d-xl-inline-flex">
                  <div className="d-flex align-items-center py-sm-3">
                    <NavBtn className="nav-btn w-sm-100" href="#">
                      <Link to={"/contact"} style={{ textDecoration: "none" }}>
                        <span className="nav-btn-title">Contact Us</span>
                      </Link>
                    </NavBtn>
                  </div>
                  <div className="d-flex align-items-center py-sm-3 d-none d-md-block d-lg-block d-xl-block">
                    {pageName === "" ||
                    pageName === "aboutus" ||
                    pageName === "contact" ? (
                      <div className="d-flex align-items-center py-sm-3">
                        <FieldChangeToggle fieldToggler={fieldToggler} />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="d-flex align-items-center py-sm-3">
                    <div
                      className="d-none d-lg-block ms-3"
                      style={{ marginTop: "5px" }}
                    >
                      <RiveComponent
                        className="toggle-icon"
                        onClick={() => toggleComponent()}
                      />
                    </div>
                  </div>
                </div>
              </ButtonGroup>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </StyledApp>
    </ThemeProvider>
  );
};

export default Header;
