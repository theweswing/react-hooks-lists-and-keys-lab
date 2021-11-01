import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const spawnProjectList = projects.map((givenProject) => {
    return <ProjectItem name={givenProject.name}
    about={givenProject.about}
    technologies={givenProject.technologies}
    key={givenProject.id} />
  })
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{spawnProjectList}</div>
    </div>
  );
}

export default ProjectList;