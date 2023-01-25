import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Achievements from "../components/Commons/Homepage/Achievements";
import Clients from "../components/Commons/Homepage/Clients";
import Cta from "../components/Commons/Homepage/Cta";
import Footer from "../components/Commons/Footer";
import Header from "../components/Commons/Header";
import Hero from "../components/Commons/Homepage/Hero";
import Review from "../components/Commons/Homepage/Review";
import ServicesMarketing from "../components/Marketing/Homepage/Services";
import ServicesTechnology from "../components/Technical/Homepage/Services";
import Timeline from "../components/Commons/Homepage/Timeline";
import { darkTheme, GlobalStyles, lightTheme } from "../theme";
import WhatsappHoverBtn from "../components/Commons/WhatsappHoverBtn";
import ScrollToTop from "../components/Commons/ScrollToTop";
import CookiesDialogue from "../components/Commons/CookiesDialogue";
import IndustriesWeWorked from "../components/Commons/Homepage/IndustriesWeWorked";
// import InstagramIntegration from "../components/Commons/InstagramIntegration";
// import GoogleReviewIntegration from "../components/Commons/GoogleReviewIntegration";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Homepage = () => {
  const [theme, setTheme] = useState("dark");

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

  useEffect(() => {
    setCurrentTheme();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />
        <Header themeToggler={themeToggler} theme={theme} />
        <section id="main">
          <ScrollToTop />
          <WhatsappHoverBtn />
          <CookiesDialogue />
          <Hero />
          <Clients theme={theme} />
          {localStorage.getItem("currentField") === "Marketing" ? (
            <ServicesMarketing theme={theme} />
          ) : (
            <ServicesTechnology theme={theme} />
          )}
          <Achievements theme={theme} />
          <Review theme={theme} />
          <Timeline theme={theme} />
          {/* <InstagramIntegration /> */}
          {/* <GoogleReviewIntegration /> */}
          <IndustriesWeWorked />
          <Cta theme={theme} />
          <Footer />
        </section>
      </StyledApp>
    </ThemeProvider>
  );
};

export default Homepage;
