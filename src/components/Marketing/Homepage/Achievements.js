import React from "react";
import { Container, Image } from "react-bootstrap";
import AchievementLogoDark from "../../../assets/img/AchievementLogoDark.png";
import AchievementLogoLight from "../../../assets/img/AchievementLogoLight.png";

const Achievements = ({ theme }) => {
  return (
    <Container>
      <div className="achievement">
        <h1 className="achievement-heading">Global Certificates</h1>
        <p className="achievement-subheading">
          Our design solutions have not only won hearts and{" "}
          <br className="d-none d-lg-block d-xl-block" />
          people, but also various awards.
        </p>

        <div className="row">
          <div className="achievement-info text-center col-6 col-lg-4 col-xl-4">
            <Image
              src={
                theme === "dark" ? AchievementLogoDark : AchievementLogoLight
              }
              className="achievement-logo"
            />
            <h2 className="achievement-title">DNA Paris Design Winner</h2>
            <p className="achievement-description">
              DNA PARIS DESIGN AWARD, 2022
            </p>
          </div>
          <div className="achievement-info text-center col-6 col-lg-4 col-xl-4">
            <Image
              src={
                theme === "dark" ? AchievementLogoDark : AchievementLogoLight
              }
              className="achievement-logo"
            />
            <h2 className="achievement-title">DNA Paris Design Winner</h2>
            <p className="achievement-description">
              DNA PARIS DESIGN AWARD, 2022
            </p>
          </div>
          <div className="achievement-info text-center col-6 col-lg-4 col-xl-4">
            <Image
              src={
                theme === "dark" ? AchievementLogoDark : AchievementLogoLight
              }
              className="achievement-logo"
            />
            <h2 className="achievement-title">DNA Paris Design Winner</h2>
            <p className="achievement-description">
              DNA PARIS DESIGN AWARD, 2022
            </p>
          </div>
          <div className="achievement-info text-center col-6 col-lg-4 col-xl-4">
            <Image
              src={
                theme === "dark" ? AchievementLogoDark : AchievementLogoLight
              }
              className="achievement-logo"
            />
            <h2 className="achievement-title">DNA Paris Design Winner</h2>
            <p className="achievement-description">
              DNA PARIS DESIGN AWARD, 2022
            </p>
          </div>
          <div className="achievement-info text-center col-6 col-lg-4 col-xl-4">
            <Image
              src={
                theme === "dark" ? AchievementLogoDark : AchievementLogoLight
              }
              className="achievement-logo"
            />
            <h2 className="achievement-title">DNA Paris Design Winner</h2>
            <p className="achievement-description">
              DNA PARIS DESIGN AWARD, 2022
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Achievements;
