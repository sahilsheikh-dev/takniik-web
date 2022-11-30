import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../../../components/Commons/Footer";
import Header from "../../../components/Commons/Header";
import ScrollToTop from "../../../components/Commons/ScrollToTop";
import Cta from "../../../components/Marketing/Services/GraphicDesigning/Cta";
import ProductDescription from "../../../components/Marketing/Services/GraphicDesigning/ProductDescription";
import GdHero from "../../../components/Marketing/Services/GraphicDesigning/GdHero";
import TextImage from "../../../components/Marketing/Services/GraphicDesigning/TextImage";
import { darkTheme, GlobalStyles, lightTheme } from "../../../theme";
import GraphicDesigningServices from "../../../components/Marketing/Services/GraphicDesigning/GraphicDesigningServices";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const GraphicDesigningService = () => {
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
          <GdHero />
          <ProductDescription />
          <GraphicDesigningServices />
          <TextImage />
          <Cta />
          <Footer />
        </section>
      </StyledApp>
    </ThemeProvider>
  );
};

export default GraphicDesigningService;
