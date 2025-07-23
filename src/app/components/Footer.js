import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <nav>
            <a href="/about">About Us</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </nav>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@eduverse.com</p>
          <p>Phone: +91 89834 06021</p>
          <p>Address: 12 Lane, Sector 25, Gurugram, Haryana</p>
        </div>
      </div>
      <div className="footer-copyright">
        <p>© 2025 EduVerse. All rights reserved.</p>
      </div>
    </footer>
  );
}
