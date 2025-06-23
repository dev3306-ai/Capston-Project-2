"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "../../../styles/LessonsQuizzes.css";

export default function LessonsAndQuizzesPage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="lessons-quizzes-container">
        <h1>Lessons and Quizzes</h1>
        <p>This is a dummy page for displaying lessons and quizzes.</p>

        <div className="lessons-section">
          <h2>Lessons</h2>
          <ul>
            <li>Lesson 1: Introduction to the Subject</li>
            <li>Lesson 2: Advanced Concepts</li>
            <li>Lesson 3: Practical Applications</li>
          </ul>
        </div>

        <div className="quizzes-section">
          <h2>Quizzes</h2>
          <ul>
            <li>Quiz 1: Basics</li>
            <li>Quiz 2: Intermediate</li>
            <li>Quiz 3: Advanced</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}
