import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import LanguageContext from "../../contexts/LanguageContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const {language} = useContext(LanguageContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(
            language === "zh"
              ? "由王天昊设计与维护 ❤️"
              : "Designed and maintained by Tianhao Wang ❤️"
          )}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {language === "zh" ? "基于 " : "Built with "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}
