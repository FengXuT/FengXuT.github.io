import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Coursework.scss";
import {courseworkSection} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";
import StyleContext from "../../contexts/StyleContext";

export default function Coursework() {
  const {language} = useContext(LanguageContext);
  const {isDark} = useContext(StyleContext);

  if (!courseworkSection.display) {
    return null;
  }

  return (
    <section className="coursework-section" id="coursework">
      <Fade bottom duration={900} distance="20px">
        <div>
          <h1 className="coursework-heading">
            {courseworkSection.title[language]}
          </h1>
          <p className="coursework-subtitle">
            {courseworkSection.subtitle[language]}
          </p>
          <div className="coursework-grid">
            {courseworkSection.courses.map(course => (
              <article
                className={
                  isDark
                    ? "dark-mode coursework-card coursework-card-dark"
                    : "coursework-card"
                }
                key={course.name.en}
              >
                <div className="coursework-course-name">
                  {course.name[language]}
                </div>
                <div
                  className="coursework-grade"
                  aria-label={`${language === "zh" ? "成绩" : "Grade"}: ${course.grade}`}
                >
                  {course.grade}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}
