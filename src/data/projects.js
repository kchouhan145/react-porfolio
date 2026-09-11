import WeatherIcon from "../assets/weather.png";
import ChatAppIcon from "../assets/ChatApp.png";
import CampuslyIcon from "../assets/campusly.png";
import CampuslyDash from "../assets/CampuslyDash.png";
import campus1 from "../assets/campus1.jpg";
import campus2 from "../assets/campus2.jpg";
import campus3 from "../assets/campus3.jpg";
import campus4 from "../assets/campus4.jpg";
import campus5 from "../assets/campus5.jpg";
import campus6 from "../assets/campus6.jpg";
import campus7 from "../assets/campus7.jpg";
import campusweb1 from "../assets/campusweb1.png";
import campusweb2 from "../assets/campusweb2.png";
import campusweb3 from "../assets/campusweb3.png";
import weather1 from "../assets/weather1.png";
import weather2 from "../assets/weather2.png";
export const projects = [
  {
    id: "campusly",
    name: "Campusly",
    subtitle: "Campus Management Application",
    description:
      "A full-stack cross-platform campus management platform with role-based authentication, event and notice management, attendance tracking, file sharing, and real-time notifications for students and administrators.",
    icon: CampuslyDash,
    liveDemo: "https://campuslyweb.vercel.app",
    downloadApp: "https://campuslyweb.vercel.app/download",
    github: "https://campuslyweb.vercel.app/github",
    role: "Full-stack development",
    type: "Web and mobile platform",
    status: "Live product",
    technologies: [
      "React",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
      "Firebase",
    ],
    highlights: [
      "Role-based experiences for students and administrators",
      "Attendance, notices, events, and file sharing in one workspace",
      "Real-time notifications for important campus updates",
      "Responsive web experience with a companion mobile app",
    ],
    screenshots: [
      { src: CampuslyIcon, alt: "Campusly project preview" },
      { src: CampuslyDash, alt: "Campusly project Dashboard"},
      { src: campus1, alt: "Campusly 1"},
      { src: campus2, alt: "Campusly 2"},
      { src: campus3, alt: "Campusly 3"},
      { src: campus4, alt: "Campusly 4"},
      { src: campus5, alt: "Campusly 5"},
      { src: campus6, alt: "Campusly 6"},
      { src: campus7, alt: "Campusly 7"},
      { src: campusweb1, alt: "Campusly Web 1"},
      { src: campusweb2, alt: "Campusly Web 2"},
      { src: campusweb3, alt: "Campusly Web 3"},
    ],
  },
  {
    id: "dc-zone",
    name: "DC Zone",
    subtitle: "Real-time Chat Application",
    description:
      "A full-stack, real-time chat platform built with Socket.io-powered instant messaging, secure JWT-based authentication, and a responsive interface optimized for desktop, tablet, and mobile.",
    icon: ChatAppIcon,
    liveDemo: "https://dczone.onrender.com/",
    github: "https://github.com/kchouhan145/ChatApp",
    role: "Full-stack development",
    type: "Real-time web application",
    status: "Live product",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "JWT",
    ],
    highlights: [
      "Instant message delivery through Socket.io",
      "Secure login and session handling with JWT",
      "Client-server architecture designed for reliable communication",
      "Responsive layout for conversations on any screen size",
    ],
    screenshots: [
      { src: ChatAppIcon, alt: "DC Zone project preview" },
    ],
  },
  {
    id: "weather-app",
    name: "Weather App",
    subtitle: "City Weather Dashboard",
    description:
      "A responsive city-based weather application that fetches real-time climate data from a third-party API and presents the details in a clean, mobile-friendly interface.",
    icon: WeatherIcon,
    liveDemo: "https://weather-kartik.vercel.app/",
    github: "https://github.com/kchouhan145/Weather-App1",
    role: "Frontend development",
    type: "API-powered web application",
    status: "Live product",
    technologies: ["JavaScript", "Weather API", "Responsive UI"],
    highlights: [
      "Search for weather by city",
      "Current temperature, conditions, humidity, and wind speed",
      "Clear interface that works across desktop and mobile",
      "Fast feedback after each location search",
    ],
    screenshots: [
      { src: WeatherIcon, alt: "Weather App project preview" },
      { src: weather1, alt: "Weather 1" },
      { src: weather2, alt: "Weather 2" },
    ],
  },
];

export const getProjectById = (projectId) =>
  projects.find((project) => project.id === projectId);