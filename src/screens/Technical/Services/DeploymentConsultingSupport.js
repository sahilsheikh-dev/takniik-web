import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../../../components/Commons/Footer";
import Header from "../../../components/Commons/Header";
import ScrollToTop from "../../../components/Commons/ScrollToTop";
import FooterCTA from "../../../components/Commons/FooterCTA";
import { darkTheme, GlobalStyles, lightTheme } from "../../../theme";
import HeroImg from "../../../assets/img/services/deploymentsupport/hero.png";
import ColumnHero from "../../../components/Commons/ColumnHero";

import ProductImage1 from "../../../assets/img/services/deploymentsupport/img-1.png";
import ProductImage2 from "../../../assets/img/services/deploymentsupport/img-2.png";
import ProductImage3 from "../../../assets/img/services/deploymentsupport/img-3.png";

import ColumnGrid3 from "../../../components/Commons/ColumnGrid3";
import ImageText3 from "../../../components/Commons/ImageText3";

import Image1 from "../../../assets/img/services/deploymentsupport/ds-img-1.png";
import Image2 from "../../../assets/img/services/deploymentsupport/ds-img-2.png";
import Image3 from "../../../assets/img/services/deploymentsupport/ds-img-3.png";
import ServiceBanner from "../../../components/Technical/Services/DeploymentConsultingSupport/ServiceBanner";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const DeploymentConsultingSupport = () => {
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
            Heading={"Deployment consulting and support by our team"}
            DescriptionPoints={[
              "Personalized content to foster meaningful and relevant experiences for your client’s users.",
            ]}
            BtnText={"Create a Project"}
            URL={"/contact"}
          />
          <ServiceBanner />
          <ColumnGrid3
            Heading={"Our deploymentsupport Software Development Solutions"}
            Image1={ProductImage1}
            Image2={ProductImage2}
            Image3={ProductImage3}
            Heading1={"Never Miss a Deadline Again"}
            Heading2={"Debug the Content with Reworks"}
            Heading3={"Concise, Clear and Creative Copy"}
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

export default DeploymentConsultingSupport;