import { createRef } from "react";
import ScrollSpy from "react-scrollspy-navigation/dist/ScrollSpy";

export default function Navigation({ serviceDataJson }) {
  // const goToField = (e, index) => {
  //   e.preventDefault();
  //   document.getElementById("box-" + index) &&
  //     document.getElementById("box-" + index).scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  // };

  return (
    <nav
      className="nav-service-container m-0 p-0"
      style={{
        height: "100%",
        maxHeight: "100vh",
      }}
    >
      <div className="d-none d-md-block d-lg-block d-xl-block mx-0 px-0">
        <ScrollSpy>
          {serviceDataJson.map((serviceItem, index) => (
            <a
              key={index}
              href={"#box-" + index}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("box-" + index) &&
                  document.getElementById("box-" + index).scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }}
              className="FancyButton"
              ref={createRef()}
              style={{ borderLeft: "3px solid #cfcfcf" }}
            >
              {serviceItem.title}
            </a>
          ))}
        </ScrollSpy>
      </div>
      {/* <div className="d-flex align-items-center d-block d-md-none d-lg-none d-xl-none mx-0 px-0 text-center">
        {serviceDataJson.map((serviceItem, index) => (
          <a
            key={index}
            href="/"
            onClick={(e) => goToField(e, index)}
            className="FancyButton text-center"
            id={"box-index-" + index}
          >
            {index + 1}
            {console.log(serviceItem.title)}
          </a>
        ))}
      </div> */}
    </nav>
  );
}
