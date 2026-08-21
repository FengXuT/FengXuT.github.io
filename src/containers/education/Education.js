import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import LanguageContext from "../../contexts/LanguageContext";

export default function Education() {
  const {language} = useContext(LanguageContext);
  if (educationInfo.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">{educationInfo.title[language]}</h1>
        <div className="education-card-container">
          {educationInfo.schools.map((school, index) => (
            <EducationCard key={index} school={school} language={language} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
