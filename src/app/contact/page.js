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
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form>
            <div className="form-group">
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                id="message"
                placeholder="Your Message"
                required
              />
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
