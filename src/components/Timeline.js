import React from "react";
import { Container } from "react-bootstrap";
import TimelineImg1 from "../assets/img/timelineImg1.png";
import TimelineImg2 from "../assets/img/timelineImg2.png";
import TimelineImg3 from "../assets/img/timelineImg3.png";

const Timeline = () => {
  return (
    <Container>
      <div className="timeline-section">
        <h1 className="timeline-heading">Here’s how we do it</h1>
        <div className="timeline-section">
          <div class="timeline">
            <div class="container-timeline right-card">
              <div class="content">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-xl-6 d-block d-md-none d-lg-none d-xl-none">
                    <img
                      className="timeline-card-image"
                      src={TimelineImg1}
                      alt="img"
                    />
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h1 className="timeline-card-title">
                      Share briefs with our hassle{" "}
                      <br className="d-none d-md-block d-lg-block d-xl-block" />
                      free guided flow
                    </h1>
                    <p className="timeline-card-description">
                      Get a preliminary quote and delivery{" "}
                      <br className="d-none d-md-block d-lg-block d-xl-block" />
                      time estimate in under 30 seconds.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 d-none d-md-block d-lg-block d-xl-block">
                    <img
                      className="timeline-card-image"
                      src={TimelineImg1}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline">
            <div class="container-timeline right-card">
              <div class="content">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-xl-6 d-block d-md-none d-lg-none d-xl-none">
                    <img
                      className="timeline-card-image"
                      src={TimelineImg2}
                      alt="img"
                    />
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h1 className="timeline-card-title">
                      Share briefs with our hassle{" "}
                      <br className="d-none d-md-block d-lg-block d-xl-block" />
                      free guided flow
                    </h1>
                    <p className="timeline-card-description">
                      Get a preliminary quote and delivery{" "}
                      <br className="d-none d-md-block d-lg-block d-xl-block" />
                      time estimate in under 30 seconds.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 d-none d-md-block d-lg-block d-xl-block">
                    <img
                      className="timeline-card-image"
                      src={TimelineImg2}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="timeline">
            <div class="container-timeline right-card">
              <div class="content">
                <div className="row">
                  <div className="col-md-6 col-lg-6 col-xl-6 d-block d-md-none d-lg-none d-xl-none">
                    <img
                      className="timeline-card-image"
                      src={TimelineImg3}
                      alt="img"
                    />
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6">
                    <h1 className="timeline-card-title">
                      Share briefs with our hassle{" "}
                      <br className="d-none d-md-block d-lg-block d-xl-block" />
                      free guided flow
                    </h1>
                    <p className="timeline-card-description">
                      Get a preliminary quote and delivery{" "}
                      <br className="d-none d-md-block d-lg-block d-xl-block" />
                      time estimate in under 30 seconds.
                    </p>
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-6 d-none d-md-block d-lg-block d-xl-block">
                    <img
                      className="timeline-card-image"
                      src={TimelineImg3}
                      alt="img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Timeline;
