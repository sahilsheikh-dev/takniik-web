import React from "react";

const RevirewCard = ({ theme, userImage, name, position, text }) => {
  return (
    <div className="p-3 pt-0" style={{ maxWidth: "300px" }}>
      <div
        className="inner-shadow-bottom p-3 text-center shadow shadow-sm"
        style={{
          background: theme === "dark" ? "#000000" : "#F9F9F9",
          borderRadius: "20px",
          minWidth: "300px",
          minHeight: "360px",
        }}
      >
        <img
          className="img-fluid mx-auto my-4 rounded-circle"
          src={userImage}
          alt="logo"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "cover",
          }}
        />
        <h4 className="fw-bold" style={{ fontSize: "16px" }}>
          {name}
        </h4>
        <h6 className="fw-bold text-secondary" style={{ fontSize: "14px" }}>
          {position}
        </h6>
        <hr />
        <p style={{ fontSize: "14px" }}>{text}</p>
      </div>
    </div>
  );
};

export default RevirewCard;
