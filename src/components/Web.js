import React from "react";
import { useRouteMatch } from "react-router-dom";
import "../stylesheets/Web.css";

import Footer from './Footer';

import mediumLogo from "../assets/medium-logo_white.png";
import githubLogo from "../assets/github-logo_white.png";

function Web( {data} ){
  const match = useRouteMatch();
  console.log(match);

  const webProjects = data.map((project) => {
    return (
      <div key={project.title} className="web-project-container">
        <a href={project.url} target="_blank" rel="noopener noreferrer">
          <img className="web-gif" src={project.image} alt={project.title}></img>
        </a>
        <div className="work-description">
          <a href={project.url} target="_blank" rel="noopener noreferrer" className="web-project-link">
            <h2 className="title">{project.title}</h2>
          </a>
          <i className="subtitle">{project.subtitle}</i>
          <p className="project-detail">
            {project.school} | {project.year} |
            <span className="website-logo-wrapper">
              {project.medium ? 
              <a href={project.medium} target="_blank" rel="noopener noreferrer"> 
                <img className="website-logo" src={mediumLogo}></img>
              </a> : 
              null }
              {project.github ? 
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <img className="website-logo" src={githubLogo}></img>
              </a> : 
              null }
              {project.collaborator ? 
              <span className="collaborator">- in collaboration with&nbsp; 
                <a href={project.collaborator_url} target="_blank" rel="noopener noreferrer">{project.collaborator}</a>
              </span> : 
              null }
            </span>
          </p>
          <p className="paragraph">{project.description}</p>
        </div>
      </div>
    )
  })

  return (
    <div id="web">
      {webProjects}
      <Footer />
    </div>
  )
}

export default Web;