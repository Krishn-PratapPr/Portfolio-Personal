# 💻 Krishn Pratap Singh | Personal Portfolio

[![Vite](https://img.shields.io/badge/Vite-B73BFF?style=for-the-badge&logo=vite&logoColor=FFD62C)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)

A professional, high-performance, and visually stunning single-page developer portfolio showcasing full-stack engineering, cybersecurity tools, cloud learning, and technical credentials.

## 🌐 Live Site
Visit the portfolio at: **[krishnpratapsingh.dev](https://krishnpratapsingh.dev)**

---

## ✨ Features

- **Responsive & Interactive UI**: Premium glassmorphism aesthetics, dark mode by design, custom CSS gradients, and fluid micro-animations driven by **Framer Motion**.
- **Interactive Cursor Glow**: Spotlight tracking effects that dynamically wrap cards and components.
- **Scroll Spy Navigation**: Smooth scroll anchor synchronization with automatic active state indication in the header.
- **Featured Cybersecurity Projects**: Showcase of specialized work like the **Email Header Analyzer** built during the Amroha Police Cyber Security Internship Program.
- **Interactive Contact Form**: Backed by **EmailJS** API for asynchronous, real-time message notifications without custom backend servers.
- **Credentials & Certifications Showcase**: Highlighting verified accomplishments (AWS Certified Cloud Practitioner, Meta Frontend, etc.).

---

## 🛠️ Tech Stack & Tools

- **Frontend Core**: React 19, Vite (Fast HMR), JavaScript (ES6+), HTML5, CSS3
- **Styling**: Tailwind CSS (Utility-first framework), Vanilla CSS transitions
- **Animations**: Framer Motion, CSS custom keyframe animations
- **Icons**: React Icons (Font Awesome, VS Code, Simple Icons)
- **Deployment & Analytics**: Serve config, EmailJS (Browser Client integrations)
- **Quality & Linters**: Oxlint (High-performance JS/TS linter)

---

## 📂 Project Structure

```text
Portfolio/
├── public/                 # Static assets
│   └── assets/             # Images, PDF resume, screenshots
│       ├── EmailHeader.png
│       ├── portfolio-preview.png
│       ├── profile.png
│       └── resume.pdf
├── src/
│   ├── assets/             # Vector icons & React assets
│   ├── components/         # Modular layout components
│   │   ├── About.jsx       # About snapshot and quick stats
│   │   ├── Contact.jsx     # EmailJS contact form
│   │   ├── Hero.jsx        # Branding headline & floating card
│   │   ├── Navbar.jsx      # Navigation header with scrollspy
│   │   ├── Projects.jsx    # Flagship and secondary project display
│   │   └── ...
│   ├── data/               # Centralized constants & datasets
│   │   ├── constants.js    # Personal info, social links, EmailJS configs
│   │   ├── projects.js     # Projects dataset
│   │   └── ...
│   ├── App.jsx             # Main Application root
│   ├── index.css           # Global custom classes & design tokens
│   └── main.jsx            # React client DOM entry
├── package.json            # Configuration and script manager
└── vite.config.js          # Vite configurations
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Krishn-PratapPr/Portfolio-Personal.git
   cd Portfolio-Personal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```
   The local development server will start at `http://localhost:5173`.

4. **Build for production**
   ```bash
   npm run build
   ```
   This will bundle all assets and compile optimized static files under the `/dist` directory, ready to be deployed to your domain.

---

## ⚙️ Configuration

All personal information, social handles, and API keys are stored in a centralized configuration file at **`src/data/constants.js`**. 

### Connecting the Contact Form (EmailJS)
To enable form submissions to arrive directly in your inbox:
1. Register at [EmailJS](https://www.emailjs.com/).
2. Create an Email Service and an Email Template.
3. Update your credentials in `src/data/constants.js`:
   ```javascript
   export const PERSONAL_INFO = {
     ...
     emailJs: {
       serviceId: "service_voadgjh",
       templateId: "template_2wi4hca",
       publicKey: "MjQUGNMiEgiKV8Tow"
     }
   };
   ```

---

## 🏆 Certifications & Achievements
- **AWS Certified Cloud Practitioner** (Amazon Web Services)
- **Meta Front-End Developer Professional Certificate** (Meta via Coursera)
- **Project Recognition Letter** awarded by the Amroha Police Cyber Security Internship Program (APCSIP 2026) for the Email Header Analyzer tool.
