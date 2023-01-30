import React from "react";
import { useState } from "react";
import JobsData from "../../assets/data/JobsData.json";

const CareerToggle = ({ theme }) => {
  const [toggeled, setToggeled] = useState(false);
  const jobsData = JobsData;

  const toggleCareerPage = () => {
    if (toggeled) {
      setToggeled(false);
    } else {
      setToggeled(true);
    }
  };

  return (
    <div>
      {toggeled ? (
        <div
          style={{
            width: "100%",
            height: "100vh",
            maxWidth: "300px",
            position: "fixed",
            top: 0,
            zIndex: "99",
            opacity: "0.9",
            overflowX: "hidden",
            overflowY: "auto",
            background: theme === "dark" ? "#FFFFFF" : "#000000",
          }}
        >
          <div className="text-start ms-3 mt-3 mt-md-5 mt-lg-5 mt-xl-5">
            <h4
              className="fw-bold mb-3"
              style={{ color: theme === "dark" ? "#000000" : "#ffffff" }}
            >
              Latest Jobs
            </h4>
            {jobsData.map((jobItem, index) => (
              <div className="mb-3" key={index}>
                <a
                  className="text-decoration-none"
                  href={jobItem.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <h5
                    className="mb-0 fw-bold hero-title-gradient"
                    style={{ fontSize: "16px" }}
                  >
                    {jobItem.position}
                  </h5>
                  <p
                    className="mt-0"
                    style={{
                      color: theme === "dark" ? "#000000" : "#ffffff",
                      fontSize: "16px",
                    }}
                  >
                    {jobItem.location}
                  </p>
                </a>
              </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      <div
        overflow="hidden"
        background-color="#333"
        position="fixed"
        width="95%"
        fontFamily={"Montserrat"}
      >
        <button
          onClick={() => {
            toggleCareerPage();
          }}
          style={{
            height: "50px",
            width: "50px",
            position: "fixed",
            bottom: "50px",
            right: "50px",
            zIndex: "99",
            border: "none",
            outline: "none",
            cursor: "pointer",
            borderRadius: "25%",
            background:
              "linear-gradient(101.58deg, #ff55f1 8.5%, #7300ff 91.5%)",
            _hover: "none",
            _active: "none",
            p: "0",
          }}
        >
          <i class="bi bi-briefcase-fill" style={{ fontSize: "30px" }}></i>
        </button>
      </div>
    </div>
  );
};

export default CareerToggle;
