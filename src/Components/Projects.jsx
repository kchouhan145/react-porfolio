import React from "react";
import Project from "./Project";
// import NotesIcon from "../assets/notessaver.png";
import WeatherIcon from "../assets/weather.png";
// import QuizIcon from "../assets/quiz.png";
// import ArtGenIcon from "../assets/ArtGen.png";
import ChatAppIcon from "../assets/ChatApp.png";
import CampuslyIcon from "../assets/campusly.png"

const Projects = () => {
  const projects = [
    {
      name: "Campusly (Campus Management Application)",
      description:
        "A full-stack cross-platform campus management platform with role-based authentication, event and notice management, attendance tracking, file sharing, and real-time notifications for students and administrators.",
      icon: CampuslyIcon,
      liveDemo: "https://campuslyweb.vercel.app", // Replace with deployed URL
      github: "https://github.com/kchouhan145/campusly-web", // Replace with actual repository URL
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
    },
    {
      name: "DC Zone (Chat Application)",
      description:
        "A full-stack real-time chat platform with Socket.io, JWT authentication, and responsive UX for seamless communication.",
      icon: ChatAppIcon,
      liveDemo: "https://dczone.onrender.com/",
      github: "https://github.com/kchouhan145/ChatApp",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Socket.io",
        "JWT",
      ],
    },
    {
      name: "Weather App",
      description:
        "A city-based weather tracker that fetches and displays real-time climate data from third-party APIs.",
      icon: WeatherIcon,
      liveDemo: "https://weather-kartik.vercel.app/",
      github: "https://github.com/kchouhan145/Weather-App1",
      technologies: ["JavaScript", "Weather API", "Responsive UI"],
    },
  ];

  return (
    <section className="page-shell">
      <header className="text-center mb-8">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-lead mt-2 max-w-2xl mx-auto">
          A collection of products focused on real-world usage, practical
          engineering, and polished user experience.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
