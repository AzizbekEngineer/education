import React from "react";
import "./projects.scss";
import Project from "../../components/project/Project";
import { projectData } from "../../constants";

const Projects = () => {
  return (
    <div className="projects">
      <Project data={projectData} />
    </div>
  );
};

export default Projects;
