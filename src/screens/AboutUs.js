import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import AboutContent from "../components/AboutContent";
import AboutCta from "../components/AboutCta";
import AboutHero from "../components/AboutHero";
import AboutImageText from "../components/AboutImageText";
import AboutTeam from "../components/AboutTeam";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { darkTheme, GlobalStyles, lightTheme } from "../theme";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const AboutUs = () => {
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
          <AboutHero />
          <AboutImageText />
          <AboutContent />
          <AboutTeam />
          <AboutCta />
          <Footer />
        </section>
      </StyledApp>
    </ThemeProvider>
  );
};

export default AboutUs;
