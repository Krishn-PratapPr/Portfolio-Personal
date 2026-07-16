export const PROJECTS_DATA = [
  {
    id: "email-header-analyzer",
    title: "Email Header Analyzer",
    category: "Cybersecurity Tool",
    description: "A cybersecurity-focused tool that analyzes email headers to extract routing information, identify sender details, detect suspicious patterns, and assist in email investigation. Demonstrates practical knowledge of email forensics and cybersecurity concepts.",
    highlight: "★ Developed during APCSIP 2026 and officially recognized through a Project Recognition Letter for its contribution to cybersecurity awareness and email forensic analysis.",
    featured: true,
    techStack: ["HTML", "Tailwind CSS", "React", "Python", "Cybersecurity", "Email Forensics"],
    githubUrl: "https://github.com/Krishn-PratapPr/HeaderForensics",
    liveUrl: "https://headerforensics-frontened.onrender.com",
    imageUrl: "/assets/EmailHeader.png"
  },
  {
    id: "pharmaguard",
    title: "PharmaGuard",
    category: "IoT Cold Chain Monitor",
    description: "An IoT-based cold chain monitoring system for temperature-sensitive pharmaceuticals and cargo. Integrates ESP32, DS18B20 temperature sensors, OLED displays, and ThingSpeak cloud telemetry with automated EmailJS breach notifications.",
    highlight: "Designed for cold storage logistics, featuring real-time telemetry, local alarms, and automated email warning systems.",
    featured: false,
    techStack: ["ESP32", "C++", "IoT Device", "ThingSpeak", "EmailJS", "Tailwind CSS"],
    githubUrl: "https://github.com/Krishn-PratapPr/PharmaGuard",
    liveUrl: "",
    imageUrl: "/assets/pharmaguard.webp",
    imageContain: true,
    envDetails: {
      vehicleName: "Tata Ace Cold Van",
      registration: "UP80 CX 4421",
      driver: "Ramesh Kumar",
      contact: "+91 XXXXXXXXX",
      route: "Agra → Delhi (NH-19)",
      cargo: "Insulin / Vaccines",
      departureDate: "01 May 2026",
      deviceId: "PG-ESP32-001",
      status: "active",
      thingspeakChannel: "3365330"
    },
    readmeContent: `# PharmaGuard

**PharmaGuard** is a cold chain monitoring project for pharmaceuticals and temperature-sensitive cargo. It combines an ESP32 + DS18B20 temperature sensor and OLED display with a ThingSpeak-powered web dashboard to monitor temperature, detect breaches, and send alert notifications.

---

## What this project includes

- \`setup.cpp\` — ESP32 firmware for:
  - reading a DS18B20 temperature sensor
  - displaying status on a 128x64 OLED
  - connecting to WiFi
  - uploading temperature and breach status to ThingSpeak
  - sounding a buzzer and lighting an LED when temperature goes outside the safe range
- \`dashboard.html\` — browser dashboard for:
  - showing live temperature, device status, history, and alerts
  - rendering charts, logs, and a calendar view
  - sending email alerts through EmailJS when a breach is detected
- \`config-loader.js\` — loads environment values from \`.env\` for the web dashboard
- \`.env\` — local configuration file with private keys and vehicle details
- \`.gitignore\` — ignores \`.env\` so sensitive data is not committed

---

## What this project is about

PharmaGuard is designed to help monitor temperature-sensitive shipments and cold chain vehicles. It provides:

- real-time temperature monitoring
- local device alerts using buzzer and LED
- cloud data upload to ThingSpeak
- browser dashboard visualization
- email alert notifications on temperature breach

This is useful for pharmaceutical logistics, vaccine transport, cold storage tracking, and any application where maintaining a tight temperature range is critical.

---

## Hardware requirements

- ESP32 development board
- DS18B20 temperature sensor
- 4.7kΩ resistor for the DS18B20 data line
- 128x64 I2C OLED display (SSD1306)
- Buzzer
- LED
- Optional wiring and mounting materials

### Suggested wiring

- DS18B20 data pin → ESP32 GPIO 15
- DS18B20 VCC → 3.3V
- DS18B20 GND → GND
- DS18B20 pull-up resistor from data line to 3.3V (4.7kΩ)
- OLED SDA → ESP32 GPIO 21
- OLED SCL → ESP32 GPIO 22
- OLED VCC → 3.3V
- OLED GND → GND
- Buzzer → ESP32 GPIO 2
- LED → ESP32 GPIO 5

> Note: The exact pinout may vary by board. Confirm your ESP32 pin labels before wiring.

---

## Software setup

### 1. Arduino / PlatformIO firmware build

1. Open \`setup.cpp\` in your Arduino IDE or PlatformIO project.
2. Install the required libraries:
   - \`OneWire\`
   - \`DallasTemperature\`
   - \`Wire\`
   - \`Adafruit_GFX\`
   - \`Adafruit_SSD1306\`
   - \`ThingSpeak\`
3. Update the WiFi credentials in \`setup.cpp\`:
   \`\`\`cpp
   const char* WIFI_SSID      = "YOUR_WIFI_SSID";
   const char* WIFI_PASSWORD  = "YOUR_WIFI_PASSWORD";
   \`\`\`
4. Update ThingSpeak values in \`setup.cpp\` if needed:
   \`\`\`cpp
   unsigned long THINGSPEAK_CHANNEL_ID = YOUR_THINGSPEAK_CHANNEL_ID;
   const char*   THINGSPEAK_WRITE_KEY  = "YOUR_THINGSPEAK_WRITE_KEY";
   \`\`\`
5. Upload the firmware to your ESP32.

### 2. Web dashboard setup

1. Keep the \`.env\` file in the project root. It contains sensitive configuration values used by \`dashboard.html\`.
2. Confirm \`.env\` contains the correct values for your ThingSpeak channel, EmailJS settings, alert email, and vehicle details.
3. Serve the project from a local web server so the browser can fetch \`.env\` correctly.
   - Example using Python 3:
     \`\`\`bash
     cd d:\\Projects\\PharmaGuard
     python -m http.server 8000
     \`\`\`
   - Then open \`http://localhost:8000/dashboard.html\` in a browser.

> The web dashboard reads \`.env\` via \`config-loader.js\`. Directly opening \`dashboard.html\` from the filesystem may fail due to browser security restrictions.

---

## \`.env\` configuration

The \`.env\` file contains private keys and personalization values. Do not commit your \`.env\` file to source control.

Copy \`.example.env\` to \`.env\` and replace the placeholder values with your own:

\`\`\`text
CHANNEL_ID=YOUR_THINGSPEAK_CHANNEL_ID
READ_KEY=YOUR_THINGSPEAK_READ_KEY

EMAILJS_PUBLIC_KEY=YOUR_EMAILJS_PUBLIC_KEY
EMAILJS_SERVICE_ID=YOUR_EMAILJS_SERVICE_ID
EMAILJS_TEMPLATE_ID=YOUR_EMAILJS_TEMPLATE_ID
ALERT_TO_EMAIL=recipient@example.com

VEHICLE_NAME=Your Vehicle Name
VEHICLE_REGISTRATION=YOUR_VEHICLE_REGISTRATION
VEHICLE_DRIVER=Driver Name
VEHICLE_CONTACT=Driver Contact
VEHICLE_ROUTE=Route Description
VEHICLE_CARGO=Cargo Description
VEHICLE_DEPARTURE_DATE=Departure Date
VEHICLE_DEVICE_ID=Your Device ID
VEHICLE_STATUS=active
\`\`\`

The \`.example.env\` file is provided as a template.

---

## Running the project

1. Power up the ESP32 and ensure it connects to WiFi.
2. Confirm the device uploads data successfully to ThingSpeak.
3. Start the local web server and open \`dashboard.html\`.
4. Monitor the dashboard for:
   - current temperature
   - device online/offline status
   - breach alerts
   - history chart and calendar

---

## How it works

- \`setup.cpp\` reads the DS18B20 sensor every second.
- If temperature is outside the safe range (\`2.0°C\` to \`8.0°C\`), the buzzer and LED activate.
- Every 20 seconds, the ESP32 uploads the temperature and breach flag to ThingSpeak.
- \`dashboard.html\` fetches the latest ThingSpeak reading and updates the UI.
- When a fresh breach is detected, the dashboard sends an email alert using EmailJS, with cooldown logic to avoid repeated emails.

---

## Notes

- \`.env\` is intentionally ignored by Git via \`.gitignore\`.
- The firmware still hardcodes WiFi and ThingSpeak write keys in \`setup.cpp\`; update those values before deployment.
- The dashboard currently loads private settings from \`.env\` using \`config-loader.js\`.
- For production use, consider moving IoT credentials and keys to a more secure backend.

---

## License

This repository does not include a license file. Add one if you want to share or reuse the project publicly.
`
  },
  {
    id: "portfolio-website",
    title: "Premium Portfolio Website",
    category: "Personal Portfolio",
    description: "A modern, responsive personal portfolio website showcasing projects, technical skills, certifications, and professional achievements with smooth animations and an optimized user experience.",
    highlight: "Recruiter-focused handcrafted single-page web app built with smooth scrolling page transitions and custom glassmorphism components.",
    featured: false,
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Krishn-PratapPr/Portfolio-Personal",
    liveUrl: "https://krishnpratapsingh.dev",
    imageUrl: "/assets/portfolio-preview.png"
  }
];
