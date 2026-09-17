/* Personal portfolio content. Keep every public claim verifiable. */

import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1200
};

const illustration = {animated: true};

const greeting = {
  username: "Tianhao Wang",
  title: {
    en: "Hi, I'm Tianhao Wang",
    zh: "你好，我是王天昊"
  },
  subTitle: {
    en: "I'm a second-year Computer Science undergraduate at Fudan University, interested in natural language processing, agent frameworks, and quantitative finance. I enjoy turning ideas into practical systems and exploring how models, tools, and efficient computing can work together.",
    zh: "我是复旦大学计算机科学与技术专业大二学生，关注自然语言处理、Agent 框架与量化金融。我喜欢把想法实现为实用系统，并探索模型、工具与高效计算之间的结合。"
  },
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/fengxut",
  linkedin: "",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: {en: "What I work with", zh: "技术与方向"},
  subTitle: {
    en: "My current toolkit spans systems programming, AI development, and efficient computing.",
    zh: "目前的技术积累覆盖系统编程、人工智能开发与高效计算。"
  },
  skills: [
    {
      en: "⚡ Building and optimizing custom operators with AscendC",
      zh: "⚡ 使用 AscendC 开发和优化自定义算子"
    },
    {
      en: "⚡ Exploring natural language processing and practical agent frameworks",
      zh: "⚡ 探索自然语言处理与实用 Agent 框架"
    },
    {
      en: "⚡ Applying Python to data-oriented and quantitative research workflows",
      zh: "⚡ 使用 Python 开展数据分析与量化研究实践"
    }
  ],
  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "C / C++", fontAwesomeClassname: "fas fa-code"},
    {skillName: "AscendC", fontAwesomeClassname: "fas fa-microchip"},
    {skillName: "PyTorch", fontAwesomeClassname: "fas fa-brain"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"}
  ],
  display: true
};

const educationInfo = {
  title: {en: "Education", zh: "教育经历"},
  display: true,
  schools: [
    {
      schoolName: {en: "Fudan University", zh: "复旦大学"},
      logo: require("./assets/images/FudanLogo.png"),
      subHeader: {
        en: "B.Eng. in Computer Science and Technology",
        zh: "计算机科学与技术 · 本科"
      },
      duration: {en: "Sep 2025 — Present", zh: "2025年9月 — 至今"},
      desc: {
        en: "Second-year undergraduate focusing on natural language processing, agent frameworks, and quantitative finance.",
        zh: "大二在读，关注自然语言处理、Agent 框架与量化金融。"
      }
    }
  ]
};

const courseworkSection = {
  title: {en: "Core Coursework", zh: "专业课成绩"},
  subtitle: {
    en: "Selected foundational courses · All graded A",
    zh: "核心基础课程 · 成绩均为 A 等"
  },
  display: true,
  courses: [
    {
      name: {en: "Advanced Mathematics A I", zh: "高等数学 A（上）"},
      grade: "A"
    },
    {
      name: {en: "Advanced Mathematics A II", zh: "高等数学 A（下）"},
      grade: "A"
    },
    {
      name: {en: "General Physics B", zh: "普通物理 B"},
      grade: "A"
    },
    {
      name: {en: "Programming", zh: "程序设计"},
      grade: "A"
    },
    {
      name: {en: "Linear Algebra", zh: "线性代数"},
      grade: "A"
    },
    {
      name: {
        en: "Fundamentals of Computer Systems",
        zh: "计算机系统基础"
      },
      grade: "A"
    }
  ]
};

const projectsSection = {
  title: {en: "Selected Projects", zh: "代表项目"},
  subtitle: {
    en: "A focused selection of practical work with clear technical depth.",
    zh: "聚焦具有实用价值与明确技术深度的作品。"
  },
  display: true,
  projects: [
    {
      name: {en: "CANN Operator Challenge", zh: "CANN 算子挑战赛"},
      period: {en: "Jun 2026", zh: "2026年6月"},
      description: {
        en: "Implemented Addcmul, Lerp, and ClipByValue custom operators for Ascend 910B with AscendC. The work covers host-side registration and tiling, AI Core kernels, multicore partitioning, vectorized computation, unaligned data transfers, and broadcasting paths.",
        zh: "面向 Ascend 910B，使用 AscendC 实现 Addcmul、Lerp 与 ClipByValue 三个自定义算子，覆盖 Host 侧算子注册与 Tiling、AI Core Kernel、多核切分、向量化计算、非对齐数据搬运及广播路径处理。"
      },
      tags: ["AscendC", "C++", "Ascend 910B", "Operator Development"],
      link: "https://cannjudge.cn/fdu-aiops/fdu-competition-2026",
      linkText: {en: "Competition page", zh: "比赛页面"},
      icon: "fas fa-microchip"
    },
    {
      name: {en: "ChatGPT Folders", zh: "ChatGPT Folders"},
      period: {en: "Jul 2026", zh: "2026年7月"},
      description: {
        en: "A Chrome and Edge Manifest V3 extension that adds locally synchronized folder management to ChatGPT conversations. It supports folder organization, bulk assignment of visible conversations, custom display names, and chrome.storage.sync persistence without reading message content or operating a backend.",
        zh: "一款面向 Chrome 与 Edge 的 Manifest V3 扩展，为 ChatGPT 对话增加本地同步的文件夹管理能力，支持文件夹整理、批量归类当前可见对话、自定义显示名称及 chrome.storage.sync 持久化；不读取聊天正文，也不依赖后端服务。"
      },
      tags: ["TypeScript", "Manifest V3", "Vite", "Chrome Extension"],
      link: "https://github.com/FengXuT/GPT-Folder",
      linkText: {en: "View on GitHub", zh: "查看 GitHub"},
      icon: "fas fa-folder-open"
    }
  ]
};

const achievementSection = {
  title: {en: "Awards", zh: "奖项荣誉"},
  subtitle: {
    en: "Competition results and technical practice",
    zh: "竞赛成果与技术实践"
  },
  achievementsCards: [
    {
      title: {
        en: "17th Chinese Mathematics Competitions — First Prize",
        zh: "第十七届全国大学生数学竞赛（高教社杯）一等奖"
      },
      subtitle: {
        en: "Non-Mathematics Category A · Shanghai Division · 2025 · Chinese Mathematical Society",
        zh: "非数学 A 类 · 上海赛区 · 2025年 · 中国数学会"
      },
      icon: "fas fa-award",
      footerLink: []
    },
    {
      title: {
        en: "Fudan University CANN Competition — Excellence Award",
        zh: "复旦大学 CANN 校内自办赛优胜奖"
      },
      subtitle: {
        en: "2026 · Individual entry · Addcmul, Lerp, and ClipByValue operators",
        zh: "2026年 · 个人参赛 · Addcmul、Lerp 与 ClipByValue 算子"
      },
      icon: "fas fa-microchip",
      footerLink: [
        {
          name: {en: "Competition page", zh: "比赛页面"},
          url: "https://cannjudge.cn/fdu-aiops/fdu-competition-2026"
        }
      ]
    }
  ],
  display: true
};

const techStack = {viewSkillBars: false, experience: [], displayCodersrank: false};
const workExperiences = {display: false, experience: []};
const openSource = {showGithubProfile: "false", display: true};
const bigProjects = {projects: [], display: false};
const blogSection = {blogs: [], displayMediumBlogs: "false", display: false};
const talkSection = {talks: [], display: false};
const podcastSection = {podcast: [], display: false};
const resumeSection = {display: false};
const contactInfo = {title: "", subtitle: "", number: "", email_address: ""};
const twitterDetails = {userName: "", display: false};
const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  courseworkSection,
  projectsSection,
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
