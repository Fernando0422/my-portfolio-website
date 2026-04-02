import React, { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./Navbar.css";

function getActiveKey(pathname) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/portfolio")) return "work";
  if (pathname.startsWith("/work")) return "work";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  return "";
}

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setScrolled(window.scrollY > 20);
  }, [location.pathname]);

  const items = useMemo(
    () => [
      { key: "home", label: "Home", to: "/", end: true },
      { key: "work", label: "Work", to: "/portfolio", end: true },
      { key: "about", label: "About", to: "/about" },
      {
        key: "contact",
        label: "Contact",
        to: "mailto:Fernando.rojas0422@gmail.com",
      },
    ],
    []
  );

  const activeKey = useMemo(
    () => getActiveKey(location.pathname),
    [location.pathname]
  );

  return (
    <header className={`topbar${scrolled ? " topbar--solid" : ""}`}>
      <div className="topbar__shell">
        <nav className="pillnav" aria-label="Primary">
          <ul className="pillnav__list">
            {items.map((item) => {
              const isActive = activeKey === item.key;

              if (item.key === "contact") {
                return (
                  <li key={item.key} className="pillnav__item">
                    <a
                      href={item.to}
                      className={`pillnav__link ${isActive ? "is-active" : ""}`}
                    >
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.span
                            className="pillnav__active"
                            layoutId="navActivePill"
                            transition={{
                              type: "spring",
                              stiffness: 520,
                              damping: 40,
                              mass: 0.9,
                            }}
                            aria-hidden="true"
                          />
                        )}
                      </AnimatePresence>

                      <span className="pillnav__label">{item.label}</span>
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.key} className="pillnav__item">
                  <NavLink
                    to={item.to}
                    end={item.end ?? false}
                    className={`pillnav__link ${isActive ? "is-active" : ""}`}
                  >
                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.span
                          className="pillnav__active"
                          layoutId="navActivePill"
                          transition={{
                            type: "spring",
                            stiffness: 520,
                            damping: 40,
                            mass: 0.9,
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </AnimatePresence>

                    <span className="pillnav__label">{item.label}</span>
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}