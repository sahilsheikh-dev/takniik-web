import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../../../components/Commons/Footer";
import Header from "../../../components/Commons/Header";
import ScrollToTop from "../../../components/Commons/ScrollToTop";
import WhatsappHoverBtn from "../../../components/Commons/WhatsappHoverBtn";
import FooterCTA from "../../../components/Commons/FooterCTA";
import ServiceBanner from "../../../components/Marketing/Services/VideoEditing/ServiceBanner";
import { darkTheme, GlobalStyles, lightTheme } from "../../../theme";
import HeroBg from "../../../assets/img/services/videoediting/ve-hero.png";
import BgImageHero from "../../../components/Commons/BgImageHero";
import Image1 from "../../../assets/img/services/videoediting/ve-img-1.png";
import Image2 from "../../../assets/img/services/videoediting/ve-img-2.png";
import Image3 from "../../../assets/img/services/videoediting/ve-img-3.png";
import ImageText3 from "../../../components/Commons/ImageText3";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const VideoEditingService = () => {
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
          <WhatsappHoverBtn />
          <BgImageHero
            HeroImg={HeroBg}
            Heading={"Professional video editing services"}
            SubHeading={"We are your one-stop solution for all things growth"}
            BtnText={"Get Started"}
            URL={"/contact"}
          />
          <ServiceBanner />
          <ImageText3
            Heading={"Getting the perfect product description is simple"}
            Image1={Image1}
            Image2={Image2}
            Image3={Image3}
            Heading1={"Share your requirements"}
            Heading2={"Start seeing your content flourish"}
            Heading3={"Track the project"}
            Subheading1={
              "Fill in the order form and, in a few clicks, watch us craft great content that grows your sales"
            }
            Subheading2={
              "Fill in the order form and, in a few clicks, watch us craft great content that grows your sales"
            }
            Subheading3={
              "Fill in the order form and, in a few clicks, watch us craft great content that grows your sales"
            }
          />
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

export default VideoEditingService;
