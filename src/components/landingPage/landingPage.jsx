import React from "react";
import "./landingPage.css";

import Lottie from "lottie-react";
import coderAnimation from "../../assets/lottie/coder-animation1.json";

const LandingPage = () => {
  return (
    <>
      <section className="landing-section">
        <div className="landing-content">
          <div className="lottie-container zoom-effect">
            <Lottie animationData={coderAnimation} loop={true} />
          </div>

          <div className="text-container">
            <h1 className="secondary ease-in">Hello world!</h1>
          </div>

          <div className="text-container">
            <h2 className="typewritter">
              I'm Deep, a full stack developer based in Mumbai.
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
