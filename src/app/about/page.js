"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/StaticPages.css";

export default function AboutPage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="static-page-container">
        <h1 className="static-page-title">About Us</h1>
        <p className="static-page-content">
          Welcome to EduVerse! We are dedicated to providing high-quality,
          interactive learning experiences for students of all ages. Our mission
          is to make education accessible, engaging, and effective for everyone.
        </p>
      </div>
      <Footer />
    </div>
  );
}
