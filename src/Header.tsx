import React, { useState } from "react";
import "./Header.scss";

type HeaderProps = {
  dark: boolean;
  toggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({ dark, toggleTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={`header ${dark ? "header--dark" : "header--light"}`}>
        <h2 className="header__logo">LOGO</h2>

        {/* Desktop Nav */}
        <nav className="header__nav">
          <span className="header__link header__link--active">Home</span>
          <span className="header__link">Products ▾</span>
          <span className="header__link">Services ▾</span>
          <span className="header__link">Portfolio</span>
          <span className="header__link">About</span>
          <span className="header__link">Contact</span>
        </nav>

        <div className="header__right">
          <button className="header__theme" onClick={toggleTheme}>
            {dark ? "🌙" : "☀️"}
          </button>

          {/* Hamburger */}
          <button
            className={`header__menuBtn ${dark ? "header__menuBtn--dark" : ""}`}
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Off Canvas Menu */}
      {/* Off Canvas Menu */}
      {menuOpen && (
        <div className="offcanvas open">
          <button
            className="offcanvas__close"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <nav className="offcanvas__nav">
            <span onClick={() => setMenuOpen(false)}>Home</span>
            <span onClick={() => setMenuOpen(false)}>Products</span>
            <span onClick={() => setMenuOpen(false)}>Services</span>
            <span onClick={() => setMenuOpen(false)}>Portfolio</span>
            <span onClick={() => setMenuOpen(false)}>About</span>
            <span onClick={() => setMenuOpen(false)}>Contact</span>
          </nav>
        </div>
      )}

      {/* Overlay */}
      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
};

export default Header;