import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import heroImg from "../assets/hero.jpg";
import unstopIcon from "../assets/unstopicon.png";

const Home = () => {
  return (
    <section className="page-shell min-h-[78vh] flex items-center">
      <div className="grid md:grid-cols-2 items-center gap-8 w-full">
        <div className="space-y-6">
          <p className="chip w-fit">Full-Stack Developer</p>
          <div>
            <h1 className="section-title tone-title">
              Engineer-focused, design-conscious web experiences.
            </h1>
            <p className="section-lead mt-4">
              I am Kartik Chouhan, a MERN stack developer crafting
              production-ready applications with clean architecture, strong UX,
              and dependable delivery.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/file/d/1rJ3PZViVyhxU_7WaIcsdMBGpB_4fzmcd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View Resume
            </a>
            <a href="/project" className="btn-secondary">
              Explore Projects
            </a>
          </div>

          <div className="flex gap-4 mt-1 text-xl">
            <a
              className="icon-link transition-colors"
              href="https://github.com/kchouhan145"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="icon-link transition-colors"
              href="https://www.linkedin.com/in/kchouhan14/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://unstop.com/u/karticho59125"
              target="_blank"
              rel="noopener noreferrer"
              title="Unstop Profile"
            >
              <img
                src={unstopIcon}
                alt="Unstop"
                className="w-6 h-6 hover:scale-110 transition-transform duration-200"
              />
            </a>
            <a
              className="icon-link transition-colors"
              href="https://wa.me/919997694610?text=Hey%0A"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              className="icon-link transition-colors"
              href="https://www.instagram.com/kchouhan.14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <img
            src={heroImg}
            alt="Kartik Chouhan"
            className="w-56 h-56 md:w-[22rem] md:h-[22rem] object-cover rounded-[2rem] shadow-2xl border-4"
            style={{ borderColor: "var(--surface-strong)" }}
          />
          <div
            className="mt-5 px-4 py-2 text-sm rounded-full border tone-body"
            style={{
              background: "var(--surface-strong)",
              borderColor: "var(--border-soft)",
            }}
          >
            Available for internships and full-time roles
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
