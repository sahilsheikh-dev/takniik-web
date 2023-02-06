import React from "react";

const TeamCard = ({ theme, userImage, name, text }) => {
  return (
    <div
      className="inner-shadow-bottom pb-3 text-center shadow shadow-sm mx-md-4 mx-lg-4 mx-xl-4"
      style={{
        background: theme === "dark" ? "#000000" : "#F9F9F9",
        borderRadius: "20px",
        minWidth: "300px",
        minHeight: "360px",
      }}
    >
      <img src={userImage} className="card-img-top rounded-0 mb-3" alt="logo" />
      <div className="card-body px-3">
        <h5 className="card-title fw-bold mb-3">{name}</h5>
        <p className="card-text" style={{ fontSize: "14px" }}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
