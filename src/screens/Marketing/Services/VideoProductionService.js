import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../../../components/Commons/Footer";
import Header from "../../../components/Commons/Header";
import WhatsappHoverBtn from "../../../components/Commons/WhatsappHoverBtn";
import CardSlider from "../../../components/Marketing/Services/VideoProduction/CardSlider";
import FooterCTA from "../../../components/Commons/FooterCTA";
import ImageSlider from "../../../components/Marketing/Services/VideoProduction/ImageSlider";
import ServiceBanner from "../../../components/Marketing/Services/VideoProduction/ServiceBanner";
import { darkTheme, GlobalStyles, lightTheme } from "../../../theme";
import HeroBg from "../../../assets/img/services/videoproduction/vp-hero.png";
import BgImageHero from "../../../components/Commons/BgImageHero";
// import ScrollToTop from "../../../components/Commons/ScrollToTop";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const VideoProductionService = () => {
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
    window.scrollTo(0, 0);
    setCurrentTheme();
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <StyledApp>
        <GlobalStyles />
        <Header themeToggler={themeToggler} theme={theme} />
        <section id="main">
          {/* {/* <ScrollToTop /> */} */}
          <WhatsappHoverBtn />
          <BgImageHero
            HeroImg={HeroBg}
            Heading={"Video Production Service Worldwide"}
            SubHeading={"We are your one-stop solution for all things growth"}
            BtnText={"Get Started"}
            URL={"/contact"}
          />
          <ServiceBanner theme={theme} />
          <ImageSlider />
          <CardSlider theme={theme} />
          <FooterCTA
            Heading={"Order Your First Blog"}
            Subheading={
              "We Are Transforming The Content Ecosystem As You Know It Today."
            }
            BtnText={"Sign Up Free"}
            URL={"/contact"}
            Point1={"Multiple revisions included"}
            Point2={" On-demand projects"}
            Point3={"Easy & fast collaboration"}
          />
          <Footer />
        </section>
      </StyledApp>
    </ThemeProvider>
  );
};

export default VideoProductionService;
