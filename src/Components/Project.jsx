import React from "react";
import { FaArrowRight, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Project = ({
  id,
  name,
  subtitle,
  description,
  icon,
  liveDemo,
  downloadApp,
  github,
  technologies,
}) => {
  const navigate = useNavigate();

  const openDetails = () => navigate(`/project/${id}`);

  const handleCardKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetails();
    }
  };

  return (
    <article
      className="glass-card project-card p-5 flex flex-col h-full transition-transform duration-300 hover:-translate-y-1"
      onClick={openDetails}
      onKeyDown={handleCardKeyDown}
      role="link"
      tabIndex="0"
      aria-label={`View full details for ${name}`}
    >
      <div className="flex items-center gap-3 mb-3">
        {icon && (
          <img
            src={icon}
            alt={name}
            className="w-9 h-9 rounded-md object-cover"
          />
        )}
        <div>
          <h3 className="text-lg font-bold tone-title">{name}</h3>
          <p className="text-xs tone-muted mt-0.5">{subtitle}</p>
        </div>
      </div>

      <p className="text-sm tone-muted leading-relaxed flex-1">{description}</p>

      <div className="flex flex-wrap gap-2 my-4">
        {technologies?.map((tech) => (
          <span key={tech} className="chip">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 mt-auto">
        <a
          onClick={(event) => event.stopPropagation()}
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 text-sm"
        >
          <FaExternalLinkAlt className="text-xs" />
          Live Demo
        </a>
        {downloadApp ? <a
          onClick={(event) => event.stopPropagation()}
          href={downloadApp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex items-center gap-2 text-sm"
        >
          <FaExternalLinkAlt className="text-xs" />
          Download App
        </a>:''}
        <a
          onClick={(event) => event.stopPropagation()}
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2 text-sm"
        >
          <FaGithub className="text-sm" />
          Source
        </a>
      </div>
      <span className="project-card-link mt-4 inline-flex items-center gap-2 text-sm font-bold">
        Full Details <FaArrowRight className="text-xs" />
      </span>
    </article>
  );
};

export default Project;
