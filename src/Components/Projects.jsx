import React from "react";
import Project from "./Project";
import { projects } from "../data/projects";

const Projects = () => {
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
