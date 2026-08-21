import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Project.scss";
import {projectsSection, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";

export default function Projects() {
  const {isDark} = useContext(StyleContext);
  const {language} = useContext(LanguageContext);

  if (!projectsSection.display) {
    return null;
  }

  return (
    <div className="main selected-projects" id="opensource">
      <h1 className="project-title">{projectsSection.title[language]}</h1>
      <p className={isDark ? "dark-mode project-subtitle" : "project-subtitle"}>
        {projectsSection.subtitle[language]}
      </p>
      <div className="repo-cards-div-main">
        {projectsSection.projects.map(project => (
          <Fade bottom duration={900} distance="20px" key={project.name.en}>
            <article
              className={isDark ? "dark-card-mode project-card" : "project-card"}
            >
              <div className="project-card-header">
                <i className={`${project.icon} project-card-icon`} aria-hidden="true"></i>
                <span className="project-period">{project.period[language]}</span>
              </div>
              <h2>{project.name[language]}</h2>
              <p>{project.description[language]}</p>
              <ul className="project-tags" aria-label={language === "zh" ? "技术栈" : "Technology stack"}>
                {project.tags.map(tag => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <a
                className="project-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.linkText[language]}
                <span aria-hidden="true"> ↗</span>
              </a>
            </article>
          </Fade>
        ))}
      </div>
      <a
        className="all-projects-link"
        href={socialMediaLinks.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {language === "zh" ? "浏览更多 GitHub 项目" : "Explore more on GitHub"}
        <span aria-hidden="true"> ↗</span>
      </a>
    </div>
  );
}
