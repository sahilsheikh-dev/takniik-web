import React from "react";
import { useEffect } from "react";

const Review = ({ theme }) => {
  useEffect(() => {
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
            <div className="d-block d-md-none d-lg-none d-xl-none">
              <img
                className="img-fluid mx-auto"
                src="https://incluzivedev.netlify.app/static/img/testimonial-img-1.b82fa7c.png"
                alt="logo"
              />
            </div>
            <div className="testimonial-image-section d-none d-mg-block d-lg-block d-xl-block">
              <img
                className="img-fluid testinomial-image w-50"
                src="https://incluzivedev.netlify.app/static/img/testimonial-img-1.b82fa7c.png"
                style={{
                  marginLeft: "-20px",
                  marginTop: "80px",
                }}
                alt="logo"
              />
              <img
                className="img-fluid testinomial-image w-50"
                src="https://incluzivedev.netlify.app/static/img/testimonial-img-1.b82fa7c.png"
                style={{
                  marginLeft: "-100px",
                  marginTop: "-50px",
                }}
                alt="logo"
              />
              <img
                className="img-fluid testinomial-image w-50"
                src="https://incluzivedev.netlify.app/static/img/testimonial-img-1.b82fa7c.png"
                style={{
                  marginLeft: "500px",
                  marginTop: "-200px",
                }}
                alt="logo"
              />
              <img
                className="img-fluid testinomial-image w-50"
                src="https://incluzivedev.netlify.app/static/img/testimonial-img-1.b82fa7c.png"
                style={{
                  marginLeft: "50px",
                  marginTop: "-150px",
                }}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
