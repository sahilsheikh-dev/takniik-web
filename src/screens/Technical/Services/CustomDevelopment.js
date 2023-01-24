import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../../../components/Commons/Footer";
import Header from "../../../components/Commons/Header";
import ScrollToTop from "../../../components/Commons/ScrollToTop";
import WhatsappHoverBtn from "../../../components/Commons/WhatsappHoverBtn";
import FooterCTA from "../../../components/Commons/FooterCTA";
import { darkTheme, GlobalStyles, lightTheme } from "../../../theme";
import HeroImg from "../../../assets/img/services/customdevelopment/hero.png";
import ColumnHero from "../../../components/Commons/ColumnHero";

import ProductImage1 from "../../../assets/img/services/customdevelopment/img-1.png";
import ProductImage2 from "../../../assets/img/services/customdevelopment/img-2.png";
import ProductImage3 from "../../../assets/img/services/customdevelopment/img-3.png";
import ProductImage4 from "../../../assets/img/services/customdevelopment/img-4.png";
import ProductImage5 from "../../../assets/img/services/customdevelopment/img-5.png";
import ProductImage6 from "../../../assets/img/services/customdevelopment/img-6.png";

import ProductImage7 from "../../../assets/img/services/customdevelopment/img-7.png";
import ProductImage8 from "../../../assets/img/services/customdevelopment/img-8.png";
import ProductImage9 from "../../../assets/img/services/customdevelopment/img-9.png";

import ColumnGrid3 from "../../../components/Commons/ColumnGrid3";
import ImageText3 from "../../../components/Commons/ImageText3";

import Image1 from "../../../assets/img/services/customdevelopment/cd-img-1.png";
import Image2 from "../../../assets/img/services/customdevelopment/cd-img-2.png";
import Image3 from "../../../assets/img/services/customdevelopment/cd-img-3.png";
import ColumnGrid3BG from "../../../components/Commons/ColumnGrid3BG";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const CustomDevelopment = () => {
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
          <ColumnHero
            HeroImg={HeroImg}
            Heading={"Customer Development service made easy"}
            DescriptionPoints={[
              "Personalized content to foster meaningful and relevant experiences for your client’s users.",
            ]}
            BtnText={"Create a Project"}
            URL={"/contact"}
          />
          <ColumnGrid3BG
            theme={theme}
            title={"Our CMS Software Development Solutions"}
            subtitle1={"Website Development"}
            subtitle2={"Website Development"}
            subtitle3={"Website Development"}
            subtitle4={"Website Development"}
            subtitle5={"Website Development"}
            subtitle6={"Website Development"}
            description1={
              "Stop sifting through the endless stream of freelancers. We find the best-fit writers for your content."
            }
            description2={
              "Stop sifting through the endless stream of freelancers. We find the best-fit writers for your content."
            }
            description3={
              "Stop sifting through the endless stream of freelancers. We find the best-fit writers for your content."
            }
            description4={
              "Stop sifting through the endless stream of freelancers. We find the best-fit writers for your content."
            }
            description5={
              "Stop sifting through the endless stream of freelancers. We find the best-fit writers for your content."
            }
            description6={
              "Stop sifting through the endless stream of freelancers. We find the best-fit writers for your content."
            }
            img1={ProductImage1}
            img2={ProductImage2}
            img3={ProductImage3}
            img4={ProductImage4}
            img5={ProductImage5}
            img6={ProductImage6}
          />
          <ColumnGrid3
            Heading={"Product descriptions that aim to sell"}
            Image1={ProductImage7}
            Image2={ProductImage8}
            Image3={ProductImage9}
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
            Heading={"Start your web journey now"}
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

export default CustomDevelopment;
