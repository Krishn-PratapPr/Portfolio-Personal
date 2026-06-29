// Personal portfolio constants
export const PERSONAL_INFO = {
  name: "Krishn Pratap Singh",
  title: "Hi, I'm Krishn Pratap Singh",
  roles: [
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
    "Cloud Computing Learner"
  ],
  roleDescription: "Final Year Computer Science Engineering student passionate about building scalable web applications, exploring cybersecurity, and continuously learning cloud technologies. I enjoy solving real-world problems through practical software solutions.",
  about: {
    introduction: "I am a dedicated Computer Science Engineering student entering my final year, with deep-seated interests in Full Stack Development, Cybersecurity, Cloud Computing, and Algorithmic Problem Solving. I am passionate about engineering practical software that is both scalable and highly secure. I enjoy building secure, practical web applications and expanding my knowledge of modern deployment and analysis workflows.",
    details: [
      "Current Bachelor of Engineering in Computer Science student.",
      "Entering final year of studies.",
      "Developed an Email Header Analyzer during the Amroha Police Cyber Security Internship Program (APCSIP 2026).",
      "Passionate about Full Stack Development and secure architectures.",
      "Deeply interested in Cloud Computing and containerized environments.",
      "Dedicated to solving complex real-world forensic and data-driven problems.",
      "Actively seeking internships and software engineering opportunities."
    ]
  },
  resumeUrl: "/assets/resume.pdf", // Path to download resume
  profileImg: "/assets/profile.png", // Path to profile image
  email: "krishnpratap975@gmail.com",
  location: "AGRA, Uttar Pradesh",
  socials: {
    github: "https://github.com/Krishn-PratapPr",
    linkedin: "https://www.linkedin.com/in/krishn-pratap-singh/",
    emailDirect: "mailto:krishnpratap975@gmail.com"
  },
  emailJs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || ""
  }
};
