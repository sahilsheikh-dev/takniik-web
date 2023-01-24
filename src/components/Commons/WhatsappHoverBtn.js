import React from "react";

const WhatsappHoverBtn = () => {
  return (
    <div>
      <div
        overflow="hidden"
        background-color="#333"
        position="fixed"
        width="95%"
        fontFamily={"Montserrat"}
      >
        <a
          className="text-decoration-none"
          href="https://wa.me/+919472003529"
          target={"_blank"}
          rel="noreferrer"
          style={{
            height: "50px",
            width: "50px",
            position: "fixed",
            bottom: "50px",
            left: "50px",
            zIndex: "99",
            border: "none",
            outline: "none",
            cursor: "pointer",
            borderRadius: "50%",
            background: "#FFFFFF",
            padding: "0px",
            _hover: "none",
            _active: "none",
            p: "0",
          }}
        >
          <img
            className="img-fluid"
            src="https://cdn-icons-png.flaticon.com/512/2504/2504845.png"
            alt="logo"
          />
        </a>
      </div>
    </div>
  );
};

export default WhatsappHoverBtn;
