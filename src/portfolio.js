/* 修改此文件以配置你的个人作品集 */

// 若要全局修改作品集配色，请前往 _globalColor.scss 文件

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // 如需自定义动画，请改为你的动画文件名

// 启动画面

const splashScreen = {
  enabled: true, // 设为 false 可关闭启动画面
  animation: splashAnimation,
  duration: 2000 // 根据你的动画时长设置持续时间
};

// 简介与问候区

const illustration = {
  animated: true // 设为 false 则使用静态 SVG
};

const greeting = {
  username: "Wang TianHao",
  title: "Hi all, I'm TianHao Wang",
  subTitle: emoji(
    "An Undergraduate major in computer science From FuDan University,who also interested in economy and artificial intelligence."
  ),
  resumeLink:
    "", // 设为空字符串可隐藏按钮https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing
  displayGreeting: true // 设为 false 可隐藏本区块，默认为 true
};

// 社交媒体链接

const socialMediaLinks = {
  github: "https://github.com/fengxut",
  linkedin: "",//https://www.linkedin.com/in/saadpasta/
  gmail: "wangth12345@gmail.com",
  gitlab: "",//https://gitlab.com/saadpasta
  facebook: "",//https://www.facebook.com/saad.pasta7
  medium: "",//https://medium.com/@saadpasta
  stackoverflow: "",//https://stackoverflow.com/users/10422806/saad-pasta
  // 也支持配置 Instagram、Twitter 和 Kaggle 链接！
  // 如需自定义图标和社交链接，请调整 src/components/SocialMedia
  display: true // 设为 true 显示本区块，默认为 false
};

// 技能区

const skillsSection = {
  title: "What I do",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* 请确保填写正确的 Font Awesome 类名以显示图标
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // 设为 false 可隐藏本区块，默认为 true
};

// 教育经历区

const educationInfo = {
  display: true, // 设为 false 可隐藏本区块，默认为 true
  schools: [
    {
      schoolName: "复旦大学",
      logo: require("./assets/images/FudanLogo.png"),
      subHeader: " 计算机科学与技术",
      duration: "2025年9月至今",
      desc: "",//Participated in the research of XXX and published 3 papers.
      /*descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    /*{
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }*/
  ]
};

// 你最擅长的 3 个技术方向/技术栈

const techStack = {
/*  viewSkillBars: true, // 设为 true 以显示熟练度区块
  experience: [
    {
      Stack: "Frontend/Design", // 填写你有经验的技术栈或技术方向
      progressPercentage: "90%" // 填写相对熟练度（百分比）
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // 设为 true 可显示 codersrank 徽章区；需先在 src/containers/skillProgress/skillProgress.js:17:62 修改用户名，默认为 false*/
};

// 工作经历区

const workExperiences = {
 /* display: true, // 设为 true 以显示工作经历区
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]*/
};

/* 开源区：用于展示你在 Github 置顶的项目
如需了解如何获取 github key，请查看 readme.md */

const openSource = {
  showGithubProfile: "true", // 设为 true 或 false 以控制是否通过 Github 显示联系资料，默认为 true
  display: true // 设为 false 可隐藏本区块，默认为 true
};

// 你参与过的一些重要项目

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        // 你可以在这里添加更多按钮。
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // 设为 false 可隐藏本区块，默认为 true
};

// 成就区
// 可包含证书、演讲等内容

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // 设为 false 可隐藏本区块，默认为 true
};

// 博客区

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // 设为 true 时显示抓取的 Medium 博客，而非硬编码内容
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // 设为 false 可隐藏本区块，默认为 true
};

// 演讲区

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // 设为 false 可隐藏本区块，默认为 true
};

// 播客区

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // 请填写你的播客嵌入链接
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // 设为 false 可隐藏本区块，默认为 true
};

// 简历区
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // 如有需要，请在此提供你的播客嵌入链接
  display: false // 设为 false 可隐藏本区块，默认为 true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "wangth12345@gmail.com"
};

// Twitter 区

const twitterDetails = {
  userName: "twitter", // 将 "twitter" 替换为你的 Twitter 用户名（不带 @)
  display: false // 设为 true 显示本区块，默认为 false
};

const isHireable = false; // 若你暂时不求职请设为 false；该值会在 GitHub 页脚显示为 Open for opportunities: Yes/No

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
