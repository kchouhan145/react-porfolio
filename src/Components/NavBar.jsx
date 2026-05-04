import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaMoon, FaSun, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("portfolio-theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextThemeIsDark = !isDark;
    setIsDark(nextThemeIsDark);
    document.documentElement.classList.toggle("dark", nextThemeIsDark);
    localStorage.setItem("portfolio-theme", nextThemeIsDark ? "dark" : "light");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Skills" },
    { to: "/experience", label: "Experience" },
    { to: "/project", label: "Projects" },
    { to: "/education", label: "Education" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-3 z-40 w-full flex justify-center px-3">
      <div className="surface-nav w-full max-w-6xl rounded-2xl backdrop-blur-xl px-4 md:px-6 flex items-center justify-between relative">
        <div className="brand-title tone-title font-bold text-base sm:text-lg py-3">
          Kartik Chouhan
        </div>

        <div className="hidden md:flex flex-row gap-2 items-center text-sm py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) =>
                `rounded-lg px-3 py-2 font-semibold transition-all duration-200 ${isActive ? "nav-link-active shadow" : "nav-link"}`
              }
              to={item.to}
            >
              {item.label}
            </NavLink>
          ))}

          <button
            onClick={toggleTheme}
            className="btn-secondary inline-flex items-center gap-2 py-2 ml-2"
            aria-label="Toggle dark mode"
            type="button"
          >
            {isDark ? (
              <FaSun className="text-amber-500" />
            ) : (
              <FaMoon className="text-slate-700" />
            )}
            {isDark ? "Light" : "Dark"}
          </button>
        </div>

        <div className="md:hidden flex items-center py-2 gap-2">
          <button
            onClick={toggleTheme}
            className="btn-secondary inline-flex items-center p-2"
            aria-label="Toggle dark mode"
            type="button"
          >
            {isDark ? <FaSun className="text-amber-500" /> : <FaMoon />}
          </button>

          <button
            onClick={toggleMobileMenu}
            className="icon-link transition-colors duration-200 p-2"
            aria-label="Toggle mobile menu"
            type="button"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-5 w-5" />
            ) : (
              <FaBars className="h-5 w-5" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 rounded-xl shadow-xl border md:hidden z-50"
            style={{
              background: "var(--surface-strong)",
              borderColor: "var(--border-soft)",
            }}
          >
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) =>
                    `px-4 py-3 font-semibold rounded-lg mx-2 transition-colors duration-200 ${
                      isActive ? "nav-link-active" : "nav-link"
                    }`
                  }
                  to={item.to}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
