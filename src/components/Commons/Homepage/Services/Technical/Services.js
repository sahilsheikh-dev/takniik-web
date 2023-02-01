import React, { useState } from "react";
import { Container } from "react-bootstrap";
import LayoutContext from "../Common/LayoutContext";
import Navigation from "../Common/Navigation";
import Section from "../Common/Section";
import ServiceDataJson from "../../../../../assets/data/ServiceData.json";

const Services = () => {
  const serviceDataJson = ServiceDataJson[1];
  const [isColumn, setIsColumn] = useState(true);

  return (
    <Container>
      <div id="service" className="service mt-5">
        <LayoutContext.Provider value={[isColumn, setIsColumn]}>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-xl-3">
              <Navigation serviceDataJson={serviceDataJson} />
            </div>
            <div className="col-md-9 col-lg-9 col-xl-9">
              <div className="parent-section">
                {serviceDataJson.map((serviceItem, index) => (
                  <Section
                    id={"box-" + index}
                    key={index}
                    title={serviceItem.title}
                    description={serviceItem.description}
                    img={serviceItem.img}
                    url={serviceItem.url}
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
