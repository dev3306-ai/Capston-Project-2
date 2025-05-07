"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/StaticPages.css";

export default function PrivacyPolicyPage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="static-page-container">
        <h1 className="static-page-title">Privacy Policy</h1>
        <p className="static-page-content">
          At EduVerse, we value your privacy. This Privacy Policy outlines how
          we collect, use, and protect your personal information. By using our
          website, you agree to the terms of this policy.
        </p>
        <p className="static-page-content">
          For more details, please contact us at privacy@eduverse.com.
        </p>
      </div>
      <Footer />
    </div>
  );
}
