import React from "react";
import { Container } from "react-bootstrap";
import Team1 from "../../../assets/img/about-us/team1.png";
import Team2 from "../../../assets/img/about-us/team2.png";
import Team3 from "../../../assets/img/about-us/team3.png";
import Team4 from "../../../assets/img/about-us/team4.png";
import Team5 from "../../../assets/img/about-us/team5.png";
import Team6 from "../../../assets/img/about-us/team6.png";
import { TeamCard } from "../../../theme";

const AboutTeam = () => {
  const teamData = [
    {
      img: Team1,
      name: "Giana Bothman",
      position: "Founder",
    },
    {
      img: Team2,
      name: "Skylar Septimus",
      position: "CEO",
    },
    {
      img: Team3,
      name: "Lydia Calzoni",
      position: "Manager",
    },
    {
      img: Team4,
      name: "Kaiya Westervelt",
      position: "Design",
    },
    {
      img: Team5,
      name: "Tatiana Siphron",
      position: "HR",
    },
    {
      img: Team6,
      name: "Kaiya Vetrovs",
      position: "Marketing",
    },
  ];
  return (
    <Container>
      <div className="about-us">
        <h1 className="about-us-heading">Our Team</h1>
        <p className="about-us-subheading">
          We believe that creative collaboration can happen anywhere and
          <br className="d-none d-md-block d-lg-block d-xl-block" />
          want our team to work where they feel most comfortable and
          <br className="d-none d-md-block d-lg-block d-xl-block" />
          inspired.
        </p>
        <div className="row">
          {teamData.map((teamItem, index) => (
            <div className="col-md-4 col-lg-4 col-xl-4" key={index}>
              <TeamCard
                class="mx-auto"
                style={{
                  maxWidth: "250px",
                }}
              >
                <img src={teamItem.img} class="card-img-top" alt="img" />
                <div className="p-3">
                  <h5 class="card-title fw-bold mb-2">{teamItem.name}</h5>
                  <p class="card-text">{teamItem.position}</p>
                </div>
              </TeamCard>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default AboutTeam;
