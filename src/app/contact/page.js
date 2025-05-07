"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/StaticPages.css";

export default function ContactPage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="static-page-container">
        <h1 className="static-page-title">Contact Us</h1>
        <p className="static-page-content">
          Have questions or need assistance? Feel free to reach out to us at:
        </p>
        <ul className="contact-info">
          <li>Email: support@eduverse.com</li>
          <li>Phone: +91 89834 06021</li>
          <li>Address: 12 Lane, Sector 25, Gurugram, Haryana</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}
