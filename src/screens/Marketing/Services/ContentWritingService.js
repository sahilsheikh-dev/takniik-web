import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Footer from "../../../components/Commons/Footer";
import Header from "../../../components/Commons/Header";
import ScrollToTop from "../../../components/Commons/ScrollToTop";
import { darkTheme, GlobalStyles, lightTheme } from "../../../theme";
import ContentWritingServices from "../../../components/Marketing/Services/ContentWriting/ContentWritingServices";
import ColumnHero from "../../../components/Commons/ColumnHero";
import HeroImg from "../../../assets/img/services/contentwriting/cw-hero.png";
import FooterCTA from "../../../components/Commons/FooterCTA";
import ProductImage1 from "../../../assets/img/services/contentwriting/product-image-1.png";
import ProductImage2 from "../../../assets/img/services/contentwriting/product-image-2.png";
import ProductImage3 from "../../../assets/img/services/contentwriting/product-image-3.png";
import ColumnGrid3 from "../../../components/Commons/ColumnGrid3";
import Image1 from "../../../assets/img/services/contentwriting/cw-img-1.png";
import Image2 from "../../../assets/img/services/contentwriting/cw-img-2.png";
import Image3 from "../../../assets/img/services/contentwriting/cw-img-3.png";
import ImageText3 from "../../../components/Commons/ImageText3";

const StyledApp = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`;

const ContentWritingService = () => {
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
            Heading={"Top-quality content writing"}
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
            Heading1={"Handpicked, talented writers"}
            Heading2={"Best SEO Practices In Place"}
            Heading3={"We Know How to Make it Work!"}
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
          <ContentWritingServices />
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

export default ContentWritingService;
