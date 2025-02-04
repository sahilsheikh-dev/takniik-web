import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Achievements from "../components/Commons/Homepage/Achievements";
import Clients from "../components/Commons/Homepage/Clients";
import Footer from "../components/Commons/Footer";
import Header from "../components/Commons/Header";
import Hero from "../components/Commons/Homepage/Hero";
import Review from "../components/Commons/Homepage/Review";
// import ServicesMarketing from "../components/Commons/Homepage/Services/Marketing/Services";
// import ServicesTechnology from "../components/Commons/Homepage/Services/Technical/Services";
import Timeline from "../components/Commons/Homepage/Timeline";
import { darkTheme, GlobalStyles, lightTheme } from "../theme";
import WhatsappHoverBtn from "../components/Commons/WhatsappHoverBtn";
// import CookiesDialogue from "../components/Commons/CookiesDialogue";
// import IndustriesWeWorked from "../components/Commons/Homepage/IndustriesWeWorked";
import ContactForm from "../components/Commons/ContactForm";
// import ScrollToTop from "../components/Commons/ScrollToTop";
// import Cta from "../components/Commons/Homepage/Cta";
// import TwitterIntegration from "../components/Commons/TwitterIntegration";
// import GoogleReviewIntegration from "../components/Commons/GoogleReviewIntegration";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Homepage = () => {
  const [theme, setTheme] = useState("dark");
  // const [currentField, setCurrentField] = useState("");

  const themeToggler = () => {
    if (theme === "dark") {
      localStorage.setItem("currentTheme", "light");
      setTheme("light");
    } else {
      localStorage.setItem("currentTheme", "dark");
      setTheme("dark");
    }
    setCurrentTheme();
  };

  const setCurrentTheme = () => {
    if (
      localStorage.getItem("currentTheme") === null ||
      localStorage.getItem("currentTheme") === ""
    ) {
      localStorage.setItem("currentTheme", "light");
      setTheme("dark");
    } else {
      setTheme(localStorage.getItem("currentTheme"));
    }
  };

  // const getCurrentField = () => {
  //   if (
  //     localStorage.getItem("currentField") === null ||
  //     localStorage.getItem("currentField") === ""
  //   ) {
  //     localStorage.setItem("currentField", "Marketing");
  //     setCurrentField("Marketing");
  //   } else {
  //     setCurrentField(localStorage.getItem("currentField"));
  //   }
  // };

  // const fieldToggler = () => {
  //   if (localStorage.getItem("currentField") === "Marketing") {
  //     localStorage.setItem("currentField", "Technology");
  //     setCurrentField("Technology");
  //   } else {
  //     localStorage.setItem("currentField", "Marketing");
  //     setCurrentField("Marketing");
  //   }
  //   getCurrentField();
  // };

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentTheme();
    // getCurrentField();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />
        <Header
          themeToggler={themeToggler}
          // fieldToggler={fieldToggler}
          theme={theme}
        />
        <section id="main">
          {/* <ScrollToTop /> */}
          <WhatsappHoverBtn />
          {/* <CookiesDialogue /> */}
          <Hero />
          {/* {currentField === "Marketing" ? (
            <ServicesMarketing />
          ) : (
            <ServicesTechnology theme={theme} />
          )} */}
          <Clients theme={theme} />
          <Achievements theme={theme} />
          <Review theme={theme} />
          <Timeline theme={theme} />
          {/* <TwitterIntegration /> */}
          {/* <GoogleReviewIntegration /> */}
          {/* <IndustriesWeWorked theme={theme} /> */}
          <ContactForm theme={theme} />
          {/* <Cta theme={theme} /> */}
          <Footer />
        </section>
      </StyledApp>
    </ThemeProvider>
  );
};

export default Homepage;
