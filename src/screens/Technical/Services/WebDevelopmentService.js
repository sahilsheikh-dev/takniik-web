import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../../../components/Commons/Footer";
import Header from "../../../components/Commons/Header";
import ScrollToTop from "../../../components/Commons/ScrollToTop";
import FooterCTA from "../../../components/Commons/FooterCTA";
import { darkTheme, GlobalStyles, lightTheme } from "../../../theme";
import HeroImg from "../../../assets/img/services/webdevelopment/hero.png";
import ColumnHero from "../../../components/Commons/ColumnHero";

import ProductImage1 from "../../../assets/img/services/webdevelopment/img-1.png";
import ProductImage2 from "../../../assets/img/services/webdevelopment/img-2.png";
import ProductImage3 from "../../../assets/img/services/webdevelopment/img-3.png";
import ProductImage4 from "../../../assets/img/services/webdevelopment/img-4.png";
import ProductImage5 from "../../../assets/img/services/webdevelopment/img-5.png";
import ProductImage6 from "../../../assets/img/services/webdevelopment/img-6.png";

import ColumnGrid3 from "../../../components/Commons/ColumnGrid3";
import ImageText3 from "../../../components/Commons/ImageText3";

import Image1 from "../../../assets/img/services/webdevelopment/it-img-1.png";
import Image2 from "../../../assets/img/services/webdevelopment/it-img-2.png";
import Image3 from "../../../assets/img/services/webdevelopment/it-img-3.png";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const WebDevelopmentService = () => {
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
          <ColumnHero
            HeroImg={HeroImg}
            Heading={"Custom Website Development Services"}
            DescriptionPoints={[
              "Personalized content to foster meaningful and relevant experiences for your client’s users.",
            ]}
            BtnText={"Create a Project"}
            URL={"/contact"}
          />
          <ColumnGrid3
            Heading={"Web Development Services for Your Business"}
            Image1={ProductImage1}
            Image2={ProductImage2}
            Image3={ProductImage3}
            Heading1={"Website Development"}
            Heading2={"Responsive Design"}
            Heading3={"Third-Party Integration"}
            Subheading1={
              "Stop sifting through the endless stream of freelancers. We find the best-fit writers for your content."
            }
            Subheading2={
              "There’s a difference between keyword-rich content and keyword-stuffing. Our creators understand this and deliver content that ranks."
            }
            Subheading3={
              "The writers make sure you get noticed by customers. The more visible you are, the better you rank,"
            }
          />
          <ColumnGrid3
            Heading={"Signity for Your Custom Website Design & Development"}
            Image1={ProductImage4}
            Image2={ProductImage5}
            Image3={ProductImage6}
            Heading1={"High Performance"}
            Heading2={"Scalability"}
            Heading3={"Content Management"}
            Subheading1={
              "Stop sifting through the endless stream of freelancers. We find the best-fit writers for your content."
            }
            Subheading2={
              "There’s a difference between keyword-rich content and keyword-stuffing. Our creators understand this and deliver content that ranks."
            }
            Subheading3={
              "The writers make sure you get noticed by customers. The more visible you are, the better you rank,"
            }
          />
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
            Heading={"Start your web journey now"}
            Subheading={
              "We Are Transforming The Content Ecosystem As You Know It Today."
            }
            BtnText={"Sign Up Free"}
            URL={"/contact"}
            Point1={"Unique product description writings"}
            Point2={"Easy to manage operations"}
            Point3={"Get an estimate in 30 seconds"}
          />
          <Footer />
        </section>
      </StyledApp>
    </ThemeProvider>
  );
};

export default WebDevelopmentService;
