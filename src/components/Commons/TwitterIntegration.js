import React from "react";
import { Container } from "react-bootstrap";

const TwitterIntegration = () => {
  return (
    <Container>
      <div className="achievement">
        <a
          className="twitter-timeline"
          data-height="700"
          href="https://twitter.com/takniik1?ref_src=twsrc%5Etfw"
        >
          Tweets by takniik
        </a>
        <div className="row"></div>
      </div>
    </Container>
  );
};

export default TwitterIntegration;
