import React, {useEffect, useState} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import SplashScreen from "./splashScreen/SplashScreen";
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {LanguageProvider} from "../contexts/LanguageContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkMediaQuery =
    typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : null;
  const prefersDark = Boolean(darkMediaQuery && darkMediaQuery.matches);
  const [isDark, setIsDark] = useLocalStorage("isDark", prefersDark);
  const [language, setLanguage] = useLocalStorage("language", "en");
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  }, [language]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "zh" : "en");
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <LanguageProvider value={{language, toggleLanguage}}>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <>
              <Header />
              <Greeting />
              <Skills />
              <StackProgress />
              <Education />
              <WorkExperience />
              <Projects />
              <StartupProject />
              <Achievement />
              <Blogs />
              <Talks />
              <Twitter />
              <Podcast />
              <Footer />
              <ScrollToTopButton />
            </>
          )}
        </StyleProvider>
      </LanguageProvider>
    </div>
  );
};

export default Main;
