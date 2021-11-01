import React from "react";

function ProjectItem({ name, about, technologies }) {
  const spawnTechs= technologies.map((givenTech) => {
    return (
      <span key={givenTech}>{givenTech}</span>
    )
  })
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {spawnTechs}
      </div>
    </div>
  );
}

export default ProjectItem;

