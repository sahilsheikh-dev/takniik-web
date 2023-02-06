import React from "react";

const CardSlid = ({ cardBgImg, cardText }) => {
  return (
    <div style={{ maxWidth: "300px" }}>
      <div
        className="inner-shadow-bottom"
        style={{
          backgroundImage: `url("${cardBgImg}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          borderRadius: "20px",
          minWidth: "300px",
          minHeight: "360px",
        }}
      >
        <h3
          className="fw-bold"
          style={{
            position: "absolute",
            top: "80%",
            marginLeft: "20px",
          }}
        >
          {cardText}
        </h3>
      </div>
    </div>
  );
};

export default CardSlid;
