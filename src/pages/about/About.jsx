import React from "react";
import Project from "../../components/project/Project";
import { businessData } from "../../constants";
import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <Project data={businessData} />
    </div>
  );
};

export default About;
