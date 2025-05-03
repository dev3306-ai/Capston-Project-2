import React from "react";
import "../styles/Hero.css";

export default function Hero() {
  return (
    <header className="hero">
      <h1>Welcome to EduVerse</h1>
      <p>Your gateway to interactive learning.</p>
      <div className="hero-buttons">
        <a href="/subjects" className="cta-button">Start Learning</a>
        <a href="/auth" className="cta-button secondary">Sign Up</a>
      </div>
    </header>
  );
}