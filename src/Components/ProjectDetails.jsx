import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaLayerGroup,
  FaUserCircle,
} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { getProjectById } from "../data/projects";

const ProjectDetails = () => {
  const { projectId } = useParams();
  const project = getProjectById(projectId);

  if (!project) {
    return (
      <section className="page-shell text-center py-20">
        <p className="chip w-fit mx-auto">Project not found</p>
        <h1 className="section-title tone-title mt-5">That case study does not exist.</h1>
        <p className="section-lead mt-3">Choose a project from the portfolio to explore its details.</p>
        <Link to="/project" className="btn-primary inline-flex items-center gap-2 mt-7">
          <FaArrowLeft className="text-xs" />
          Back to projects
        </Link>
      </section>
    );
  }

  return (
    <main className="page-shell project-details">
      <Link to="/project" className="back-link inline-flex items-center gap-2 text-sm font-bold">
        <FaArrowLeft className="text-xs" />
        All projects
      </Link>

      <section className="project-hero grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center mt-6">
        <div>
          <p className="chip w-fit">{project.status}</p>
          <h1 className="section-title tone-title mt-4">{project.name}</h1>
          <p className="text-lg tone-link font-semibold mt-2">{project.subtitle}</p>
          <p className="section-lead mt-5 max-w-2xl">{project.description}</p>

          <div className="flex flex-wrap gap-3 mt-7">
            <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex items-center gap-2">
              <FaExternalLinkAlt className="text-xs" />
              Open live project
            </a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
              <FaGithub />
              View on GitHub
            </a>
            {project.downloadApp && (
              <a href={project.downloadApp} target="_blank" rel="noopener noreferrer" className="btn-secondary inline-flex items-center gap-2">
                <FaArrowRight className="text-xs" />
                Download app
              </a>
            )}
          </div>
        </div>

        <div className="project-cover glass-card p-4">
          <img src={project.icon} alt={`${project.name} preview`} className="w-full aspect-[4/3] object-cover rounded-xl" />
          <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
            <div className="detail-stat">
              <FaUserCircle className="tone-link" />
              <span><strong>Role</strong>{project.role}</span>
            </div>
            <div className="detail-stat">
              <FaLayerGroup className="tone-link" />
              <span><strong>Type</strong>{project.type}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-[1fr_0.8fr] gap-8 mt-14">
        <div>
          <p className="eyebrow">What I built</p>
          <h2 className="text-2xl md:text-3xl font-bold brand-title tone-title mt-2">Product highlights</h2>
          <div className="mt-5 space-y-3">
            {project.highlights.map((highlight) => (
              <div key={highlight} className="highlight-row glass-card p-4">
                <span className="highlight-marker">+</span>
                <p className="tone-body">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Built with</p>
          <h2 className="text-2xl md:text-3xl font-bold brand-title tone-title mt-2">Technology stack</h2>
          <div className="flex flex-wrap gap-2 mt-5">
            {project.technologies.map((technology) => (
              <span key={technology} className="chip">{technology}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="eyebrow">Visual walkthrough</p>
            <h2 className="text-2xl md:text-3xl font-bold brand-title tone-title mt-2">Project screenshots</h2>
          </div>
          <p className="text-sm tone-muted">A closer look at the product experience.</p>
        </div>
        <div className="screenshot-gallery mt-5">
          {project.screenshots.map((screenshot) => (
            <figure key={screenshot.alt} className="screenshot-frame glass-card p-3">
              <img
                src={screenshot.src}
                alt={screenshot.alt}
                className="screenshot-image rounded-lg"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="text-sm tone-muted px-1 pt-3">{screenshot.alt}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ProjectDetails;