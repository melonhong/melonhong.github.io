import type { PortfolioData } from "../types/portfolio";
import rootOnImg from "../assets/img/RootOn.png";
import iAmHereImg from "../assets/img/IAmHere.jpg";
import fitLinkImg from "../assets/img/FitLink.png";

/**
 * 포트폴리오 데이터
 */
export const portfolioData: PortfolioData = {
  name: "정서윤",
  title: "백엔드 개발자",
  bio: "안정성과 확장성을 최우선으로 생각하는 백엔드 개발자입니다.",
  about: `성신여자대학교 컴퓨터공학과를 졸업하고, 분산 시스템과 IoT 솔루션의 경계를 넓혀온 개발자 정서윤입니다. 
  \n복잡한 아키텍처를 단순하게, 불가능해 보이는 문제를 가능하게 만드는 것이 저의 강점입니다. 하드웨어 충돌부터 MSA 인증 시스템까지, 기술적 난관을 마주할 때마다 최적의 해법을 찾아왔습니다. 
  \n팀과의 투명한 소통으로 함께 성장하며, 지속 가능한 시스템을 만들어갑니다.`,
  skills: [
    {
      name: "React",
      level: "advanced",
      category: "frontend",
      icon: "/icons/react.svg",
    },
    {
      name: "TypeScript",
      level: "advanced",
      category: "frontend",
      icon: "/icons/typescript.svg",
    },
    {
      name: "JavaScript",
      level: "advanced",
      category: "frontend",
      icon: "/icons/javascript.svg",
    },
    {
      name: "TailwindCSS",
      level: "intermediate",
      category: "frontend",
      icon: "/icons/tailwindcss.svg",
    },
    {
      name: "Node.js",
      level: "intermediate",
      category: "backend",
      icon: "/icons/nodejs.svg",
    },
    {
      name: "Express",
      level: "intermediate",
      category: "backend",
      icon: "/icons/express.svg",
    },
    {
      name: "Spring Boot",
      level: "intermediate",
      category: "backend",
      icon: "/icons/express.svg",
    },
    {
      name: "Git",
      level: "advanced",
      category: "tool",
      icon: "/icons/git.svg",
    },
    {
      name: "Notion",
      level: "intermediate",
      category: "tool",
      icon: "/icons/vite.svg",
    },
    {
      name: "Jira",
      level: "intermediate",
      category: "tool",
      icon: "/icons/vite.svg",
    },
    {
      name: "Docker",
      level: "intermediate",
      category: "devops",
      icon: "/icons/docker.svg",
    },
    {
      name: "Kubernetes",
      level: "intermediate",
      category: "devops",
      icon: "/icons/kubernetes.svg",
    },
  ],
  projects: [
    {
      id: "1",
      title: "RootOn: K-PaaS를 활용한 서비스 개발·아이디어 기획 공모전",
      category: "Micro Services Architecture Project",
      shortDescription: "ADHD 환자 케어 서비스 개발 및 K8S 배포.",
      fullDescription: `카카오 소셜 로그인 개발 및 Spring Cloud Gateway를 도입하여 JWT 인증을 게이트웨이 단에서 선처리. \nK8S로 MSA를 구축 및 배포함.`,
      techStack: [
        "Spring Boot",
        "Spring Cloud Gateway",
        "OAuth 2.0",
        "Kubernetes",
        "MSA",
      ],
      image: rootOnImg,
      githubUrl: "https://github.com/CloudNativeSC",
      demoUrl: "#",
    },
    {
      id: "2",
      title: "IAmHere: Attendance System",
      category: "IoT Integration Project",
      shortDescription: "지문 인식 및 블루투스 복합 인증 출석 시스템.",
      fullDescription: `라즈베리파이에서 지문 인식 및 블루투스 출석 로직 개발 담당. tkinter를 통한 GUI 개발`,
      techStack: ["Raspberry Pi", "Python", "PySerial", "Bluetooth"],
      image: iAmHereImg,
      githubUrl: "https://github.com/melonhong/IAmHere",
      demoUrl: "https://www.youtube.com/watch?v=DxXN-7ntfTQ",
    },
    {
      id: "3",
      title: "FitLink: 국민체육진흥공단 공공데이터 활용 경진대회",
      category: "Full Stack Project",
      shortDescription:
        "사용자의 체력을 기반으로 AI 운동 처방을 해주고, 주변의 공공 체육 시설과 운동 처방 영상을 알려주는 서비스",
      fullDescription: `백엔드에선 체력 기반 점수 로직 및 데이터 전처리와 AI 학습 담당. 프론트엔드에선 멀티 스텝 입력 폼 및 체력 진단 리포트 페이지 제작`,
      techStack: ["Spring Cloud Gateway", "React", "TypeScript"],
      image: fitLinkImg,
      githubUrl: "https://github.com/FitLink-project",
      demoUrl: "#",
    },
  ],
  contact: {
    email: "melonhong46@gmail.com",
    github: "https://github.com/melonhong",
    linkedin: "https://www.linkedin.com/in/서윤-정-208624372",
    blog: "https://melonhong.github.io/blog/",
  },
};
