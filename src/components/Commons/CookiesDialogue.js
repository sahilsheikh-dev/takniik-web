import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const CookiesDialogue = () => {
  const [dialogueState, setDialogueState] = useState(false);
  var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e) {
    e.preventDefault();
  }

  function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  var supportsPassive = false;
  try {
    window.addEventListener(
      "test",
      null,
      Object.defineProperty({}, "passive", {
        // eslint-disable-next-line
        get: function () {
          supportsPassive = true;
        },
      })
    );
  } catch (e) {}

  var wheelOpt = supportsPassive ? { passive: false } : false;
  var wheelEvent =
    "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

  // call this to Disable
  function disableScroll() {
    window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  // call this to Enable
  function enableScroll() {
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
  }

  const rejectCookies = () => {
    localStorage.setItem("cookiesStatus", "rejected");
    setDialogueState(true);
    enableScroll();
    console.log("Rejected");
  };

  const acceptCookies = () => {
    localStorage.setItem("cookiesStatus", "accepted");
    setDialogueState(true);
    enableScroll();
    console.log("Accepted");
  };

  useEffect(() => {
    if (
      localStorage.getItem("cookiesStatus") === "" ||
      localStorage.getItem("cookiesStatus") === null ||
      localStorage.getItem("cookiesStatus") === undefined ||
      localStorage.getItem("cookiesStatus") === "rejected"
    ) {
      setDialogueState(false);
      disableScroll();
    } else {
      setDialogueState(true);
    }
    // eslint-disable-next-line
  }, []);

  return dialogueState ? (
    ""
  ) : (
    <div>
      <div
        style={{
          overflow: "hidden",
          backgroundColor: "#fff",
          position: "fixed",
          fontFamily: "Montserrat",
        }}
      >
        <div
          className="text-decoration-none"
          style={{
            width: "100%",
            position: "fixed",
            bottom: "30px",
            zIndex: "99",
            border: "none",
            outline: "none",
            background: "#FFFFFF",
            padding: "0px",
          }}
        >
          <div className="w-100 mx-auto p-3" style={{ maxWidth: "900px" }}>
            <p className="text-dark fw-bold mb-0">Accept the Cookies</p>
            <p className="text-dark">
              This website uses cookies in order to offer you the most relevant
              information. Please accept cookies for optimal perfomance.
            </p>
            <div className="ms-auto w-25">
              <Button
                className="btn btn-light text-dark borders ms-3 ms-md-auto ms-lg-auto ms-xl-auto"
                onClick={() => rejectCookies()}
              >
                Reject
              </Button>
              <button
                className="btn btn-success text-light borders ms-3"
                onClick={() => acceptCookies()}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiesDialogue;
