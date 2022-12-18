import React from "react";
import { useEffect } from "react";

const Review = ({ theme }) => {
  const testinomialHover = () => {
    document.getElementById("testinomial-1").style.transform = "scale(1)";
    document.getElementById("testinomial-2").style.transform = "scale(1)";
    document.getElementById("testinomial-3").style.transform = "scale(1)";
    document.getElementById("testinomial-4").style.transform = "scale(1)";
  };

  const testinomial1 = () => {
    document.getElementById("testinomial-1").style.transform = "scale(1.1)";
    document.getElementById("testinomial-2").style.transform = "none";
    document.getElementById("testinomial-3").style.transform = "none";
    document.getElementById("testinomial-4").style.transform = "scale(1)";
  };
  const testinomial2 = () => {
    document.getElementById("testinomial-1").style.transform = "none";
    document.getElementById("testinomial-2").style.transform = "scale(1.1)";
    document.getElementById("testinomial-3").style.transform = "none";
    document.getElementById("testinomial-4").style.transform = "scale(1)";
  };
  const testinomial3 = () => {
    document.getElementById("testinomial-1").style.transform = "none";
    document.getElementById("testinomial-2").style.transform = "scale(1)";
    document.getElementById("testinomial-3").style.transform = "scale(1.1)";
    document.getElementById("testinomial-4").style.transform = "none";
  };
  const testinomial4 = () => {
    document.getElementById("testinomial-1").style.transform = "none";
    document.getElementById("testinomial-2").style.transform = "scale(1)";
    document.getElementById("testinomial-3").style.transform = "none";
    document.getElementById("testinomial-4").style.transform = "scale(1.1)";
  };

  useEffect(() => {
    testinomialHover();
    console.log(theme);
  });
  return (
    <div className="testinomial-section my-5">
      <div className="py-5 container">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 text-start d-flex align-items-center">
            <div className="text-center">
              <h1 className="achievement-heading text-md-start text-lg-start text-xl-start">
                What our Clients says about us
              </h1>
              <p className="achievement-subheading text-md-start text-lg-start text-xl-start">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                quae maxime eos odit id aspernatur. Consequatur, nihil
                inventore. Ut similique magni ipsum repellat? Earum laudantium
                libero praesentium odio animi blanditiis.
              </p>
            </div>
          </div>
          <div className="col-md-8 col-lg-8 col-xl-8 text-center">
            <div className="testimonial-image-section">
              <div
                class="testinomial-image testinomial-1 w-75 text-start p-4 "
                id="testinomial-1"
                onMouseEnter={testinomial1}
                onMouseLeave={testinomialHover}
              >
                <div class=" text-dark">
                  <p class="fw-bold mt-0">
                    "Lorem ipsum dolor sit amet, elit consectetur adipisicing.
                    odit omnis Consequatur"
                  </p>
                  <div class="row m-1">
                    <div class="col-auto p-0 rounded-circle">
                      <img
                        class="img-fluid w-100 rounded-circle"
                        style={{
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "cover",
                        }}
                        src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="logo"
                      />
                    </div>
                    <div
                      class="col-auto my-1 py-1"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      <p class="my-0">Megan Novalum</p>
                      <p class="text-secondary my-0">CEO, ABC Company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="testinomial-image testinomial-2 w-75 text-start p-4  text-dark"
                id="testinomial-2"
                onMouseEnter={testinomial2}
                onMouseLeave={testinomialHover}
              >
                <div class=" text-dark">
                  <p class="fw-bold mt-0">
                    "Lorem ipsum dolor sit amet, elit consectetur adipisicing.
                    odit omnis Consequatur"
                  </p>
                  <div class="row m-1">
                    <div class="col-auto p-0 rounded-circle">
                      <img
                        class="img-fluid w-100 rounded-circle"
                        style={{
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "cover",
                        }}
                        src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="logo"
                      />
                    </div>
                    <div
                      class="col-auto my-1 py-1"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      <p class="my-0">Megan Novalum</p>
                      <p class="text-secondary my-0">CEO, ABC Company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="testinomial-image testinomial-3 w-75 text-start p-4  text-dark"
                id="testinomial-3"
                onMouseEnter={testinomial3}
                onMouseLeave={testinomialHover}
              >
                <div class=" text-dark">
                  <p class="fw-bold mt-0">
                    "Lorem ipsum dolor sit amet, elit consectetur adipisicing.
                    odit omnis Consequatur"
                  </p>
                  <div class="row m-1">
                    <div class="col-auto p-0 rounded-circle">
                      <img
                        class="img-fluid w-100 rounded-circle"
                        style={{
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "cover",
                        }}
                        src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="logo"
                      />
                    </div>
                    <div
                      class="col-auto my-1 py-1"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      <p class="my-0">Megan Novalum</p>
                      <p class="text-secondary my-0">CEO, ABC Company</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="testinomial-image testinomial-4 w-75 text-start p-4  text-dark"
                id="testinomial-4"
                onMouseEnter={testinomial4}
                onMouseLeave={testinomialHover}
              >
                <div class=" text-dark">
                  <p class="fw-bold mt-0">
                    "Lorem ipsum dolor sit amet, elit consectetur adipisicing.
                    odit omnis Consequatur"
                  </p>
                  <div class="row m-1">
                    <div class="col-auto p-0 rounded-circle">
                      <img
                        class="img-fluid w-100 rounded-circle"
                        style={{
                          maxWidth: "50px",
                          maxHeight: "50px",
                          objectFit: "cover",
                        }}
                        src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="logo"
                      />
                    </div>
                    <div
                      class="col-auto my-1 py-1"
                      style={{
                        fontSize: "12px",
                      }}
                    >
                      <p class="my-0">Megan Novalum</p>
                      <p class="text-secondary my-0">CEO, ABC Company</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
