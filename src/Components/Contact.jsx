import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import unstopIcon from "../assets/unstopicon.png";

const Contact = () => {
  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/kchouhan145",
      icon: <FaGithub />,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kchouhan14/",
      icon: <FaLinkedin />,
    },
    {
      label: "WhatsApp",
      href: "https://wa.me/919997694610?text=Hey%0A",
      icon: <FaWhatsapp />,
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/kchouhan.14",
      icon: <FaInstagram />,
    },
  ];

  return (
    <section className="page-shell">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="section-title">Contact</h2>
        <p className="section-lead mt-2">
          Open to internships, collaborations, and full-time opportunities. Let
          us discuss your next product.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 mt-8 max-w-3xl mx-auto">
        <div className="glass-card p-5">
          <p className="text-xs uppercase tracking-wider tone-muted">Email</p>
          <a
            className="tone-link font-semibold hover:underline"
            href="mailto:k1452003@gmail.com"
          >
            k1452003@gmail.com
          </a>
        </div>

        <div className="glass-card p-5">
          <p className="text-xs uppercase tracking-wider tone-muted">Phone</p>
          <a
            className="tone-link font-semibold hover:underline"
            href="tel:+919997694610"
          >
            +91 9997694610
          </a>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <span>{social.icon}</span>
            {social.label}
          </a>
        ))}

        <a
          href="https://unstop.com/u/karticho59125"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center gap-2"
          aria-label="Unstop"
        >
          <img src={unstopIcon} alt="Unstop" className="w-5 h-5" />
          Unstop
        </a>
      </div>
    </section>
  );
};

export default Contact;
