import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Contactform from "../components/Commons/Contactpage/Contactform";
import Contactinfo from "../components/Commons/Contactpage/Contactinfo";
import Footer from "../components/Commons/Footer";
import Header from "../components/Commons/Header";
import ScrollToTop from "../components/Commons/ScrollToTop";
import { darkTheme, GlobalStyles, lightTheme } from "../theme";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const Contactpage = () => {
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
          <Contactform theme={theme} />
          <Contactinfo />
          <Footer />
        </section>
      </StyledApp>
    </ThemeProvider>
  );
};

export default Contactpage;
