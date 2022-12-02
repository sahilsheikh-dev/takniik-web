import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Achievements from "../components/Marketing/Homepage/Achievements";
import Clients from "../components/Marketing/Homepage/Clients";
import Cta from "../components/Marketing/Homepage/Cta";
import Footer from "../components/Commons/Footer";
import Header from "../components/Commons/Header";
import Hero from "../components/Marketing/Homepage/Hero";
import Review from "../components/Marketing/Homepage/Review";
import ScrollToTop from "../components/Commons/ScrollToTop";
import Services from "../components/Marketing/Homepage/Services";
import Timeline from "../components/Marketing/Homepage/Timeline";
import { darkTheme, GlobalStyles, lightTheme } from "../theme";

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
      localStorage.setItem("currentTheme", "dark");
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
          <Hero />
          <Clients theme={theme} />
          <Services theme={theme} />
          <Achievements theme={theme} />
          <Review theme={theme} />
          <Timeline theme={theme} />
          <Cta theme={theme} />
          <Footer />
        </section>
      </StyledApp>
    </ThemeProvider>
  );
};

export default Homepage;
