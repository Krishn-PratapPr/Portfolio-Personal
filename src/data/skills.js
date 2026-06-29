import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaDocker, FaCloud,
  FaShieldAlt, FaSearch, FaFingerprint, FaLock, FaExclamationTriangle, FaBug,
  FaList, FaFont, FaLink, FaLayerGroup, FaExchangeAlt, FaSitemap, FaProjectDiagram,
  FaHashtag, FaSortAmountDown, FaRedo, FaBrain, FaEnvelopeOpenText, FaUserSecret
} from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiPython, SiC } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const SKILLS_DATA = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: FaJs, color: "text-[#F7DF1E]" },
      { name: "Python", icon: SiPython, color: "text-[#3776AB]" },
      { name: "C", icon: SiC, color: "text-[#A8B9CC]" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "HTML", icon: FaHtml5, color: "text-[#E34F26]" },
      { name: "CSS", icon: FaCss3Alt, color: "text-[#1572B6]" },
      { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" }
    ]
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
      { name: "Express.js", icon: SiExpress, color: "text-[#FFFFFF]" }
    ]
  },
  {
    category: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
      { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" }
    ]
  },
  {
    category: "Cybersecurity",
    skills: [
      { name: "Cybersecurity Fundamentals", icon: FaShieldAlt, color: "text-[#E0A96D]" },
      { name: "Email Header Analysis", icon: FaSearch, color: "text-[#38BDF8]" },
      { name: "Email Forensics", icon: FaEnvelopeOpenText, color: "text-[#818CF8]" },
      { name: "Digital Forensics", icon: FaFingerprint, color: "text-[#F43F5E]" },
      { name: "OSINT Fundamentals", icon: FaUserSecret, color: "text-[#94A3B8]" },
      { name: "Network Security", icon: FaLock, color: "text-[#10B981]" },
      { name: "Cyber Threat Awareness", icon: FaExclamationTriangle, color: "text-[#F59E0B]" },
      { name: "Cybercrime Investigation Basics", icon: FaShieldAlt, color: "text-[#EC4899]" },
      { name: "Security Research", icon: FaBug, color: "text-[#A855F7]" }
    ]
  },
  {
    category: "Data Structures & Algorithms",
    skills: [
      { name: "Arrays", icon: FaList, color: "text-[#60A5FA]" },
      { name: "Strings", icon: FaFont, color: "text-[#34D399]" },
      { name: "Linked Lists", icon: FaLink, color: "text-[#FBBF24]" },
      { name: "Stacks", icon: FaLayerGroup, color: "text-[#F87171]" },
      { name: "Queues", icon: FaExchangeAlt, color: "text-[#A78BFA]" },
      { name: "Trees", icon: FaSitemap, color: "text-[#F472B6]" },
      { name: "Graphs", icon: FaProjectDiagram, color: "text-[#38BDF8]" },
      { name: "Hashing", icon: FaHashtag, color: "text-[#FB7185]" },
      { name: "Searching Algorithms", icon: FaSearch, color: "text-[#818CF8]" },
      { name: "Sorting Algorithms", icon: FaSortAmountDown, color: "text-[#34D399]" },
      { name: "Recursion", icon: FaRedo, color: "text-[#FBBF24]" },
      { name: "Dynamic Programming (Learning)", icon: FaBrain, color: "text-[#F43F5E]" }
    ]
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
      { name: "GitHub", icon: FaGithub, color: "text-[#FFFFFF]" },
      { name: "VS Code", icon: VscVscode, color: "text-[#007ACC]" }
    ]
  },
  {
    category: "Learning",
    skills: [
      { name: "Cloud Computing", icon: FaCloud, color: "text-[#00A3E0]" },
      { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" }
    ]
  }
];
