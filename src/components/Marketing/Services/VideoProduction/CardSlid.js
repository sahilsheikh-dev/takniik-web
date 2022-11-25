import React from "react";

const CardSlid = ({ cardBgImg, CardText }) => {
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
            bottom: "20px",
            left: "10px",
            marginLeft: "20px",
          }}
        >
          {CardText}
        </h3>
      </div>
    </div>
  );
};

export default CardSlid;
