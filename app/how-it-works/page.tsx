import React from "react";

import HowItWorksPage from "../components/layout/HowItWorks/howitwork";
import RegistrationFlow from "../components/layout/HowItWorks/sampleregister";

const About = () => {
  return (
    <div className="w-full">
      <HowItWorksPage/>
      <RegistrationFlow/>
    </div>
  );
};

export default About;