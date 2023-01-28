import { createRef } from "react";
import FancyButton from "./FancyButton";
import ScrollSpy from "react-scrollspy-navigation";
// import ScrollSpy from "react-scrollspy-navigation/dist/ScrollSpy";

export default function Navigation() {
  return (
    <nav
      className="nav-service-container"
      style={{
        height: "100vh",
        background: "#000000",
      }}
    >
      <ScrollSpy>
        <FancyButton href="#box-1" text="Box 1" ref={createRef()} />
        <FancyButton href="#box-2" text="Box 2" ref={createRef()} />
        <FancyButton href="#box-3" text="Box 3" ref={createRef()} />
        <FancyButton href="#box-4" text="Box 4" ref={createRef()} />
        <FancyButton href="#box-5" text="Box 5" ref={createRef()} />
        <FancyButton href="#box-6" text="Box 6" ref={createRef()} />
      </ScrollSpy>
    </nav>
  );
}
