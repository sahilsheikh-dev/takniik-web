import React from "react";
import { Container } from "react-bootstrap";

const ColumnGrid3BG = ({
  theme,
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  description1,
  description2,
  description3,
  img1,
  img2,
  img3,
}) => {
  return (
    <Container>
      <div className="service-banner text-center my-5 p-5">
        <h1 className="fw-bold">{title}</h1>
        <div className="row my-5 mx-md-5 mx-lg-5 mx-xl-5">
          <div className="col-md-4 col-lg-4 col-xl-4 p-2 text-start">
            <div
              className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  theme === "dark"
                    ? "linear-gradient(107.26deg, rgba(255, 255, 255, 0.03) 0.83%, rgba(217, 217, 217, 0) 112.23%)"
                    : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h3 className="my-3">{subtitle1}</h3>
              <p className="">{description1}</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-2 text-start">
            <div
              className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  theme === "dark"
                    ? "linear-gradient(107.26deg, rgba(255, 255, 255, 0.03) 0.83%, rgba(217, 217, 217, 0) 112.23%)"
                    : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h3 className="my-3">{subtitle2}</h3>
              <p className="">{description2}</p>
            </div>
          </div>
          <div className="col-md-4 col-lg-4 col-xl-4 p-2 text-start">
            <div
              className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  theme === "dark"
                    ? "linear-gradient(107.26deg, rgba(255, 255, 255, 0.03) 0.83%, rgba(217, 217, 217, 0) 112.23%)"
                    : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <h3 className="my-3">{subtitle3}</h3>
              <p className="">{description3}</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ColumnGrid3BG;
