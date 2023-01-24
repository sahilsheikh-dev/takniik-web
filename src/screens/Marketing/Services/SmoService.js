import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../../../components/Commons/Footer";
import Header from "../../../components/Commons/Header";
import ScrollToTop from "../../../components/Commons/ScrollToTop";
import WhatsappHoverBtn from "../../../components/Commons/WhatsappHoverBtn";
import FooterCTA from "../../../components/Commons/FooterCTA";
import { darkTheme, GlobalStyles, lightTheme } from "../../../theme";
import HeroImg from "../../../assets/img/services/smo/smo-hero.png";
import ColumnHero from "../../../components/Commons/ColumnHero";
import ColumnGrid3 from "../../../components/Commons/ColumnGrid3";
import ProductImage1 from "../../../assets/img/services/smo/product-image-1.png";
import ProductImage2 from "../../../assets/img/services/smo/product-image-2.png";
import ProductImage3 from "../../../assets/img/services/smo/product-image-3.png";
import ImageText3 from "../../../components/Commons/ImageText3";
import Image1 from "../../../assets/img/services/smo/smo-img-1.png";
import Image2 from "../../../assets/img/services/smo/smo-img-2.png";
import Image3 from "../../../assets/img/services/smo/smo-img-3.png";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const SmoService = () => {
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
            Heading={"Professional design services for your business"}
            DescriptionPoints={[
              "Widest network of content experts",
              "Build a deep connection with your users",
              "100% original content",
            ]}
            BtnText={"Create a Project"}
            URL={"/contact"}
          />
          <ColumnGrid3
            Heading={"Product descriptions that Aim to Sell"}
            Image1={ProductImage1}
            Image2={ProductImage2}
            Image3={ProductImage3}
            Heading1={"Engage & convert"}
            Heading2={"Make your product stand out"}
            Heading3={"Get SEO-driven content"}
            Subheading1={
              " we deliver creative product description writing that stand out, engage and convert"
            }
            Subheading2={
              "he writers in our network strike the perfect balance between storytelling, facts, "
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

export default SmoService;
