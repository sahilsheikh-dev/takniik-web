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
// import Moon from "../../assets/svg/Moon.svg";
import MoonActive from "../../assets/svg/MoonActive.svg";
// import Sun from "../../assets/svg/Sun.svg";
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

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Header = ({ themeToggler, theme }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [togglerNavIconDark, settoggleNavIconDark] = useState(NavToggleDark);
  const [togglerNavIconLight, settoggleNavIconLight] = useState(NavToggleLight);

  const [show, setShow] = useState(false);
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

  const switchToField = () => {
    if (localStorage.getItem("currentField") === "Marketing") {
      localStorage.setItem("currentField", "Technology");
    } else {
      localStorage.setItem("currentField", "Marketing");
    }
    window.location.reload();
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
        <Navbar className="navbar" expand="lg">
          <Container>
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
                {localStorage.getItem("currentField") === "Marketing" ? (
                  <Dropdown
                    className="nav-link"
                    id="collasible-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <Dropdown.Toggle id="dropdown-basic" className="hover-pink">
                      <NavLink className="hover-pink text-decoration-none nav-opt">
                        Services
                      </NavLink>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        backgroundColor:
                          theme === "dark" ? "#181A1C" : "#F5F5F5",
                        marginTop: "-5px",
                      }}
                    >
                      <Dropdown.Item
                        className="hover-item"
                        style={{
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        href="/seo"
                      >
                        SEO
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="hover-item"
                        style={{
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        href="/videoproduction"
                      >
                        Video Production
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="hover-item"
                        style={{
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        href="/videoediting"
                      >
                        Video Editing
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="hover-item"
                        style={{
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        href="/contentwriting"
                      >
                        Content Writing
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="hover-item"
                        style={{
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        href="/smo"
                      >
                        SMO
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="hover-item"
                        style={{
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        href="/graphicdesigning"
                      >
                        Graphic Designing
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                ) : (
                  <Dropdown
                    className="nav-link"
                    id="collasible-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown}
                    onMouseLeave={hideDropdown}
                  >
                    <Dropdown.Toggle id="dropdown-basic" className="hover-pink">
                      <NavLink className="hover-pink text-decoration-none nav-opt">
                        Services
                      </NavLink>
                    </Dropdown.Toggle>
                    <Dropdown.Menu
                      style={{
                        backgroundColor:
                          theme === "dark" ? "#181A1C" : "#F5F5F5",
                        marginTop: "-5px",
                      }}
                    >
                      <Dropdown.Item
                        className="hover-item"
                        style={{
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        href="/mobiledevelopment"
                      >
                        Mobile App Development
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="hover-item"
                        style={{
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        href="/webdevelopment"
                      >
                        Web Development
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="hover-item"
                        style={{
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        href="/crmdevelopment"
                      >
                        CRM Development
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="hover-item"
                        style={{
                          color: theme === "dark" ? "#FFFFFF" : "#000000",
                        }}
                        href="/cmsdevelopment"
                      >
                        CMS Development
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                )}

                <Nav.Link href="#">
                  <NavLink className="nav-link">Case Studies</NavLink>
                </Nav.Link>
                <Nav.Link href="#">
                  <Link to={"/aboutus"} style={{ textDecoration: "none" }}>
                    <NavLink className="nav-link">About Us</NavLink>
                  </Link>
                </Nav.Link>
              </Nav>
              <ButtonGroup className="nav-btn-section">
                <NavBtn className="nav-btn" href="#">
                  <Link
                    style={{ textDecoration: "none" }}
                    onClick={() => switchToField()}
                  >
                    <span className="nav-btn-title">
                      Switch to{" "}
                      {localStorage.getItem("currentField") === "Marketing"
                        ? "Technical"
                        : "Marketing"}
                    </span>
                  </Link>
                </NavBtn>
                <NavBtn className="nav-btn" href="#">
                  <Link to={"/contact"} style={{ textDecoration: "none" }}>
                    <span className="nav-btn-title">Contact Us</span>
                  </Link>
                </NavBtn>
                <div className="d-none d-lg-block">
                  {/* <Toggler themeTog={themeToggler} /> */}
                  <RiveComponent
                    className="toggle-icon"
                    onClick={() => toggleComponent()}
                  />
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
