import React, { useState } from "react";

const ScrollToTop = () => {
  const [scrollCheck, setScrollCheck] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setScrollCheck(true);
    } else {
      setScrollCheck(false);
    }
  }

  return (
    <div>
      {scrollCheck ? (
        <div
          overflow="hidden"
          background-color="#333"
          position="fixed"
          width="95%"
          fontFamily={"Montserrat"}
        >
          <button
            onClick={() => {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
            }}
            style={{
              height: "30px",
              width: "30px",
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
            {/* <BsArrowUpCircleFill color="#27AE60" size={"lg"} /> */}
            <i class="bi bi-caret-up-fill"></i>
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ScrollToTop;
