import React, { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
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
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

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

  const mobileMenuLayer =
    typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {menuOpen ? (
              <motion.div
                className="topbar__mobileRoot"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.22 }}
              >
                <button
                  type="button"
                  className="topbar__mobileBackdrop"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                />
                <motion.nav
                  id="topbar-mobile-panel"
                  className="topbar__mobilePanel"
                  aria-label="Primary mobile"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ul className="topbar__mobileList">
                    {items.map((item) => {
                      if (item.key === "contact") {
                        return (
                          <li key={item.key} className="topbar__mobileItem">
                            <a
                              href={item.to}
                              className={`topbar__mobileLink${
                                activeKey === item.key ? " is-active" : ""
                              }`}
                            >
                              {item.label}
                            </a>
                          </li>
                        );
                      }
                      return (
                        <li key={item.key} className="topbar__mobileItem">
                          <NavLink
                            to={item.to}
                            end={item.end ?? false}
                            className={({ isActive: na }) =>
                              `topbar__mobileLink${na ? " is-active" : ""}`
                            }
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      );
                    })}
                  </ul>
                </motion.nav>
              </motion.div>
            ) : null}
          </AnimatePresence>,
          document.body
        )
      : null;

  return (
    <>
      <header className={`topbar${scrolled ? " topbar--solid" : ""}`}>
      <div className="topbar__shell topbar__shell--desktop">
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

      <div className="topbar__shell topbar__shell--mobile">
        <button
          type="button"
          className="topbar__menuBtn"
          aria-expanded={menuOpen}
          aria-controls="topbar-mobile-panel"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="topbar__menuBtnLines" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
      {mobileMenuLayer}
    </>
  );
}