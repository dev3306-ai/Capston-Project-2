"use client";

import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">EduVerse</a>
      </div>
      <div className={`navbar-links ${isMenuOpen ? "active" : ""}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/subjects">Subjects</a>
      </div>
      <div className={`navbar-actions ${isMenuOpen ? "active" : ""}`}>
        <a href="/login" className="navbar-button login-button">
          Login
        </a>
        <a href="/login/signup" className="navbar-button signup-button">
          Sign Up
        </a>
      </div>
      <div className="navbar-hamburger">
        <button className="hamburger-button" onClick={toggleMenu}>
          ☰
        </button>
      </div>
    </nav>
  );
}
