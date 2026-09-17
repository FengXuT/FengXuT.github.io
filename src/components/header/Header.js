import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  courseworkSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection
} from "../../portfolio";

function Header() {
  const {isDark} = useContext(StyleContext);
  const {language, toggleLanguage} = useContext(LanguageContext);
  const labels =
    language === "zh"
      ? {
          skills: "技能",
          education: "教育",
          coursework: "课程成绩",
          experience: "经历",
          projects: "项目",
          achievements: "奖项",
          blogs: "文章",
          talks: "分享",
          resume: "简历",
          github: "GitHub"
        }
      : {
          skills: "Skills",
          education: "Education",
          coursework: "Coursework",
          experience: "Experience",
          projects: "Projects",
          achievements: "Achievements",
          blogs: "Blogs",
          talks: "Talks",
          resume: "Resume",
          github: "GitHub"
        };
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewCoursework = courseworkSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills">{labels.skills}</a>
            </li>
          )}
          <li>
            <a href="#education">{labels.education}</a>
          </li>
          {viewCoursework && (
            <li>
              <a href="#coursework">{labels.coursework}</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">{labels.experience}</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">{labels.projects}</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">{labels.achievements}</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">{labels.blogs}</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">{labels.talks}</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">{labels.resume}</a>
            </li>
          )}
          <li>
            <a
              href="https://github.com/fengxut"
              target="_blank"
              rel="noopener noreferrer"
            >
              {labels.github}
            </a>
          </li>
          <li>
            <button
              type="button"
              className="language-toggle"
              onClick={toggleLanguage}
              aria-label={language === "en" ? "切换到中文" : "Switch to English"}
            >
              {language === "en" ? "中文" : "EN"}
            </button>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
