import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LayoutContext from "../../Commons/LayoutContext";
import Navigation from "../../Commons/Navigation";
import Section from "../../Commons/Section";
import ServiceDataJson from "../../../assets/data/ServiceData.json";

const Services = () => {
  const serviceDataJson = ServiceDataJson[0];
  const [isColumn, setIsColumn] = useState(true);

  return (
    <Container>
      <div id="service" className="service mt-5 mx-0 px-0">
        <LayoutContext.Provider value={[isColumn, setIsColumn]}>
          <div className="row mx-0 px-0">
            <div className="col-md-3 col-lg-3 col-xl-3 mx-0 px-0">
              <Navigation serviceDataJson={serviceDataJson} />
            </div>
            <div className="col-md-9 col-lg-9 col-xl-9 mx-0 px-0">
              <div className="parent-section">
                {serviceDataJson.map((serviceItem, index) => (
                  <Section
                    id={"box-" + index}
                    key={index}
                    title={serviceItem.title}
                    description={serviceItem.description}
                    img={serviceItem.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </LayoutContext.Provider>
      </div>
    </Container>
  );
};

export default Services;
