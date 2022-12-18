import React from "react";
import { Container } from "react-bootstrap";
import ContactBgDark from "../../assets/img/glass-bg-dark.png";

const ColumnGrid3BG = ({
  theme,
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
  subtitle6,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
}) => {
  return (
    <Container>
      <div className="service-banner text-center my-5">
        <h1 className="fw-bold">{title}</h1>
        <div className="row my-5 mx-md-5 mx-lg-5 mx-xl-5">
          <div className="col-md-4 col-lg-4 col-xl-4 p-2 text-start">
            <div
              className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none"
              style={{
                borderRadius: "20px",
                backgroundImage:
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img
                className="img-fluid h-100"
                style={{
                  maxWidth: "100px",
                }}
                src={img1}
                alt="img"
              />
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
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img
                className="img-fluid h-100"
                style={{
                  maxWidth: "100px",
                }}
                src={img2}
                alt="img"
              />
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
                  theme === "dark" ? `url("${ContactBgDark}")` : ``,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <img
                className="img-fluid h-100"
                style={{
                  maxWidth: "100px",
                }}
                src={img3}
                alt="img"
              />
              <h3 className="my-3">{subtitle3}</h3>
              <p className="">{description3}</p>
            </div>
          </div>
          {subtitle4 === "" ||
          subtitle4 === "null" ||
          subtitle4 === "undefined" ||
          subtitle4 === null ||
          subtitle4 === undefined ? (
            ""
          ) : (
            <>
              <div className="col-md-4 col-lg-4 col-xl-4 p-2 text-start">
                <div
                  className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none"
                  style={{
                    borderRadius: "20px",
                    backgroundImage:
                      theme === "dark" ? `url("${ContactBgDark}")` : ``,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="img-fluid h-100"
                    style={{
                      maxWidth: "100px",
                    }}
                    src={img4}
                    alt="img"
                  />
                  <h3 className="my-3">{subtitle4}</h3>
                  <p className="">{description4}</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 p-2 text-start">
                <div
                  className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none"
                  style={{
                    borderRadius: "20px",
                    backgroundImage:
                      theme === "dark" ? `url("${ContactBgDark}")` : ``,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="img-fluid h-100"
                    style={{
                      maxWidth: "100px",
                    }}
                    src={img5}
                    alt="img"
                  />
                  <h3 className="my-3">{subtitle5}</h3>
                  <p className="">{description5}</p>
                </div>
              </div>
              <div className="col-md-4 col-lg-4 col-xl-4 p-2 text-start">
                <div
                  className="p-3 p-md-5 p-lg-5 p-xl-5 bg-sm-none"
                  style={{
                    borderRadius: "20px",
                    backgroundImage:
                      theme === "dark" ? `url("${ContactBgDark}")` : ``,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                >
                  <img
                    className="img-fluid h-100"
                    style={{
                      maxWidth: "100px",
                    }}
                    src={img6}
                    alt="img"
                  />
                  <h3 className="my-3">{subtitle6}</h3>
                  <p className="">{description6}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ColumnGrid3BG;
