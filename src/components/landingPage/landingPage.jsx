import React from "react";
import "./landingPage.css";

import Lottie from "lottie-react";
import coderAnimation from "../../assets/lottie/coder-animation1.json";

const LandingPage = () => {
  return (
    <>
      <section className="landing-section">
        <div className="landing-content">
          <div className="lottie-container">
            <Lottie animationData={coderAnimation} loop={true} />
          </div>

          <p className="flex-row">
            {"<h1>"}
            <h1 className="secondary">Hello world!</h1>
            {"</h1>"}
          </p>

          <h2>I'm Deep, a full stack developer based in Mumbai.</h2>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
