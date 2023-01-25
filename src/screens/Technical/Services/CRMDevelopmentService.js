import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../../../components/Commons/Footer";
import Header from "../../../components/Commons/Header";
import ScrollToTop from "../../../components/Commons/ScrollToTop";
import WhatsappHoverBtn from "../../../components/Commons/WhatsappHoverBtn";
import FooterCTA from "../../../components/Commons/FooterCTA";
import { darkTheme, GlobalStyles, lightTheme } from "../../../theme";
import HeroImg from "../../../assets/img/services/crm/hero.png";
import ColumnHero from "../../../components/Commons/ColumnHero";
import ImageText3 from "../../../components/Commons/ImageText3";
import Image1 from "../../../assets/img/services/crm/crm-img-1.png";
import Image2 from "../../../assets/img/services/crm/crm-img-2.png";
import Image3 from "../../../assets/img/services/crm/crm-img-3.png";
import ServiceBanner from "../../../components/Technical/Services/Crm/ServiceBanner";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const CRMDevelopmentService = () => {
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
            Heading={"Dynamic and scalable Web with crm development"}
            DescriptionPoints={[
              "Personalized content to foster meaningful and relevant experiences for your client’s users.",
            ]}
            BtnText={"Create a Project"}
            URL={"/contact"}
          />
          <ServiceBanner />
          <ImageText3
            Heading={"crm Development Services"}
            Image1={Image1}
            Image2={Image2}
            Image3={Image3}
            Heading1={"Custom crm Development"}
            Heading2={"crm Migration & Upgradation"}
            Heading3={"crm Support and Maintenance"}
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

export default CRMDevelopmentService;
