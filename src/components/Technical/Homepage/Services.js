import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Services = ({ theme }) => {
  const serviceData = [
    {
      img: "https://images.pexels.com/photos/131778/pexels-photo-131778.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Mobile App Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/mobiledevelopment",
    },
    {
      img: "https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Web Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/webdevelopment",
    },
    {
      img: "https://images.pexels.com/photos/4050364/pexels-photo-4050364.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "CRM Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/crmdevelopment",
    },
    {
      img: "https://images.pexels.com/photos/4112363/pexels-photo-4112363.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "CMS Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/cmsdevelopment",
    },
    {
      img: "https://images.pexels.com/photos/12812687/pexels-photo-12812687.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Custom Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/customdevelopment",
    },
    {
      img: "https://images.pexels.com/photos/3705645/pexels-photo-3705645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "AI Module",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/aimodule",
    },
    {
      img: "https://images.pexels.com/photos/131778/pexels-photo-131778.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "NFT Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/nftdevelopment",
    },
    {
      img: "https://images.pexels.com/photos/1738641/pexels-photo-1738641.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Blockchain Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/blockchaindevelopment",
    },
    {
      img: "https://images.pexels.com/photos/4050364/pexels-photo-4050364.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Testing Automation",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/testingautomation",
    },
    {
      img: "https://images.pexels.com/photos/4112363/pexels-photo-4112363.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Deployment Consulting and Support",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/deploymentsupport",
    },
    {
      img: "https://images.pexels.com/photos/12812687/pexels-photo-12812687.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "UI/UX Development",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      url: "/uiuxdevelopment",
    },
  ];
  const [dataId, setDataId] = useState(0);

  return (
    <Container>
      <div className="service">
        <h1 className="service-heading">Our Services</h1>
        <p className="service-subheading">
          We company that brings ideas to life{" "}
          <br className="d-none d-lg-block d-xl-block" />
          through scalable, sustainable and futuristic design solutions.
        </p>

        <div className="project-section">
          <ul className="project-filter">
            <li
              onClick={() => setDataId(0)}
              className={dataId === 0 ? "project-filter-active" : ""}
            >
              {serviceData[0].title}
            </li>
            <li
              onClick={() => setDataId(1)}
              className={dataId === 1 ? "project-filter-active" : ""}
            >
              {serviceData[1].title}
            </li>
            <li
              onClick={() => setDataId(2)}
              className={dataId === 2 ? "project-filter-active" : ""}
            >
              {serviceData[2].title}
            </li>
            <li
              onClick={() => setDataId(3)}
              className={dataId === 3 ? "project-filter-active" : ""}
            >
              {serviceData[3].title}
            </li>
            <li
              onClick={() => setDataId(4)}
              className={dataId === 4 ? "project-filter-active" : ""}
            >
              {serviceData[4].title}
            </li>
            <li
              onClick={() => setDataId(5)}
              className={dataId === 5 ? "project-filter-active" : ""}
            >
              {serviceData[5].title}
            </li>
            <li
              onClick={() => setDataId(6)}
              className={dataId === 6 ? "project-filter-active" : ""}
            >
              {serviceData[6].title}
            </li>
            <li
              onClick={() => setDataId(7)}
              className={dataId === 7 ? "project-filter-active" : ""}
            >
              {serviceData[7].title}
            </li>
            <li
              onClick={() => setDataId(8)}
              className={dataId === 8 ? "project-filter-active" : ""}
            >
              {serviceData[8].title}
            </li>
            <li
              onClick={() => setDataId(9)}
              className={dataId === 9 ? "project-filter-active" : ""}
            >
              {serviceData[9].title}
            </li>
            <li
              onClick={() => setDataId(10)}
              className={dataId === 10 ? "project-filter-active" : ""}
            >
              {serviceData[10].title}
            </li>
          </ul>

          <div className="project">
            {dataId % 2 === 0 ? (
              <div className="row">
                <div className="col-md-4 col-lg-4">
                  <img
                    src={serviceData[dataId].img}
                    alt="service"
                    className="project-img"
                  />
                </div>
                <div className="col-md-8 col-lg-8">
                  <div className="project-info">
                    <h2 className="project-title">
                      {serviceData[dataId].title}
                    </h2>
                    <p className="project-description">
                      {serviceData[dataId].description}
                    </p>
                    <a
                      href={serviceData[dataId].url}
                      className="project-btn"
                      style={{
                        color: theme === "dark" ? "#F9F7F7" : "#0A0A0D",
                      }}
                    >
                      <i class="bi bi-arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-md-8 col-lg-8">
                  <div className="project-info">
                    <h2 className="project-title">
                      {serviceData[dataId].title}
                    </h2>
                    <p className="project-description">
                      {serviceData[dataId].description}
                    </p>
                    <a
                      href={serviceData[dataId].url}
                      className="project-btn"
                      style={{
                        color: theme === "dark" ? "#F9F7F7" : "#0A0A0D",
                      }}
                    >
                      <i class="bi bi-arrow-right"></i>{" "}
                    </a>
                  </div>
                </div>
                <div className="col-md-4 col-lg-4">
                  <img
                    src={serviceData[dataId].img}
                    alt="service"
                    className="project-img"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
