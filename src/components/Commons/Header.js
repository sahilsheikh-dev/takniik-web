import React from "react";
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import "../../assets/css/style.css";
// import {
//   ButtonGroup,
//   Container,
//   Dropdown,
//   Image,
//   Nav,
//   Navbar,
// } from "react-bootstrap";
// import NavLogo from "../../assets/svg/nav-logo.svg";
// import MoonActive from "../../assets/svg/MoonActive.svg";
// import SunActive from "../../assets/svg/SunActive.svg";
// import NavToggleDark from "../../assets/svg/NavToggleDark.svg";
// import NavToggleLight from "../../assets/svg/NavToggleLight.svg";
// import CloseLight from "../../assets/svg/CloseLight.svg";
// import CloseDark from "../../assets/svg/CloseDark.svg";
// import styled, { ThemeProvider } from "styled-components";
// import {
//   darkTheme,
//   GlobalStyles,
//   lightTheme,
//   NavBtn,
//   NavLink,
// } from "../../theme";
// import riveToggle from "../../assets/rive/toggler.riv";
// import { useRive, useStateMachineInput } from "@rive-app/react-canvas";
// import { Link } from "react-router-dom";
// import { useEffect } from "react";
// import FieldChangeToggle from "./FieldChangeToggle";
// import CareerToggle from "./CareerToggle";

// const StyledApp = styled.div`
//   background: ${({ theme }) => theme.body};
//   color: ${({ theme }) => theme.text};
// `;

const Header = ({ themeToggler, fieldToggler, theme }) => {
  //   const [showIcon, setShowIcon] = useState(false);
  //   const [togglerNavIconDark, settoggleNavIconDark] = useState(NavToggleDark);
  //   const [togglerNavIconLight, settoggleNavIconLight] = useState(NavToggleLight);

  //   const [show, setShow] = useState(false);

  //   const currentUrl = window.location.href;
  //   const pageName = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);

  //   const showDropdown = (e) => {
  //     setShow(!show);
  //   };
  //   const hideDropdown = (e) => {
  //     setShow(false);
  //   };

  //   const STATEMACHINE_NAME = "Switch";
  //   const INPUT_NAME = "Trigger 1";

  //   const { rive, RiveComponent } = useRive({
  //     src: riveToggle,
  //     stateMachines: STATEMACHINE_NAME,
  //     autoplay: true,
  //   });

  //   const onClickInput = useStateMachineInput(
  //     rive,
  //     STATEMACHINE_NAME,
  //     INPUT_NAME
  //   );

  //   const toggleComponent = () => {
  //     onClickInput.fire();
  //     console.log("done");
  //     themeToggler();
  //   };

  //   const toggleNavIcon = () => {
  //     if (showIcon) {
  //       setShowIcon(false);
  //       settoggleNavIconDark(NavToggleDark);
  //       settoggleNavIconLight(NavToggleLight);
  //     } else {
  //       setShowIcon(true);
  //       settoggleNavIconDark(CloseDark);
  //       settoggleNavIconLight(CloseLight);
  //     }
  //   };

  //   useEffect(() => {
  //     if (
  //       localStorage.getItem("currentField") === "" ||
  //       localStorage.getItem("currentField") === null ||
  //       localStorage.getItem("currentField") === undefined
  //     ) {
  //       localStorage.setItem("currentField", "Marketing");
  //     }
  //   }, []);

  return <></>;
};

export default Header;
