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
          </ul>

          <div className="project row">
            <div className="col-md-4 col-lg-4">
              <img
                src={serviceData[dataId].img}
                alt="service"
                className="project-img"
              />
            </div>
            <div className="col-md-8 col-lg-8">
              <div className="project-info">
                <h2 className="project-title">{serviceData[dataId].title}</h2>
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
        </div>
      </div>
    </Container>
  );
};

export default Services;
