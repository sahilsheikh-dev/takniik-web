import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../../../components/Commons/Footer";
import Header from "../../../components/Commons/Header";
import ScrollToTop from "../../../components/Commons/ScrollToTop";
import FooterCTA from "../../../components/Commons/FooterCTA";
import { darkTheme, GlobalStyles, lightTheme } from "../../../theme";
import HeroImg from "../../../assets/img/services/uiuxdevelopment/hero.png";
import ColumnHero from "../../../components/Commons/ColumnHero";

import ProductImage1 from "../../../assets/img/services/uiuxdevelopment/img-1.png";
import ProductImage2 from "../../../assets/img/services/uiuxdevelopment/img-2.png";
import ProductImage3 from "../../../assets/img/services/uiuxdevelopment/img-3.png";
import ProductImage4 from "../../../assets/img/services/uiuxdevelopment/img-4.png";
import ProductImage5 from "../../../assets/img/services/uiuxdevelopment/img-5.png";
import ProductImage6 from "../../../assets/img/services/uiuxdevelopment/img-6.png";

import ColumnGrid3 from "../../../components/Commons/ColumnGrid3";
import ImageText3 from "../../../components/Commons/ImageText3";

import Image1 from "../../../assets/img/services/uiuxdevelopment/ui-img-1.png";
import Image2 from "../../../assets/img/services/uiuxdevelopment/ui-img-2.png";
import Image3 from "../../../assets/img/services/uiuxdevelopment/ui-img-3.png";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const UIUXDevelopment = () => {
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
            Heading={"Rapid Development without any limitations"}
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
              "Stop sifting through the endless stream of freelancers. We find the best-fit writers for your content."
            }
            Subheading3={
              "Stop sifting through the endless stream of freelancers. We find the best-fit writers for your content."
            }
          />
          <ColumnGrid3
            Heading={"Product descriptions that aim to sell"}
            Image1={ProductImage4}
            Image2={ProductImage5}
            Image3={ProductImage6}
            Heading1={"Never Miss a Deadline Again"}
            Heading2={"Debug the Content with Reworks"}
            Heading3={"Concise, Clear and Creative Copy"}
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
              "We integrate Whatsapp, SFA, Netsuite, and Hubspot solutions with CRM solutions to build 360 degrees customer relationship management capabilitie"
            }
            Subheading2={
              "We integrate Whatsapp, SFA, Netsuite, and Hubspot solutions with CRM solutions to build 360 degrees customer relationship management capabilitie"
            }
            Subheading3={
              "We integrate Whatsapp, SFA, Netsuite, and Hubspot solutions with CRM solutions to build 360 degrees customer relationship management capabilitie"
            }
          />
          <FooterCTA
            Heading={"Ready To Innovate? Let's Get In Touch"}
            Subheading={
              "We Are Transforming The Content Ecosystem As You Know It Today."
            }
            BtnText={"Sign Up Free"}
            URL={"/contact"}
            Point1={"Unique product description writings"}
            Point2={" Easy to manage operations"}
            Point3={"Get an estimate in 30 seconds"}
          />
          <Footer />
        </section>
      </StyledApp>
    </ThemeProvider>
  );
};

export default UIUXDevelopment;
