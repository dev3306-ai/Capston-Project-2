"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Dashboard.css";

const completedLessons = [
  { id: 1, title: "Introduction to Mathematics" },
  { id: 2, title: "Basics of Physics" },
  { id: 3, title: "Understanding Chemistry" },
];

const quizScores = [
  { id: 1, title: "Math Quiz 1", score: 85 },
  { id: 2, title: "Physics Quiz 1", score: 90 },
  { id: 3, title: "Chemistry Quiz 1", score: 75 },
];

export default function DashboardPage() {
  return (
    <div className="page-container">
      <Navbar />
      <div className="dashboard-container">
        <h1 className="dashboard-title">Dashboard</h1>
        <div className="completed-section">
          <h2>Completed Lessons</h2>
          <ul className="completed-list">
            {completedLessons.map((lesson) => (
              <li key={lesson.id}>{lesson.title}</li>
            ))}
          </ul>
        </div>
        <div className="quiz-section">
          <h2>Quiz Scores</h2>
          <ul className="quiz-list">
            {quizScores.map((quiz) => (
              <li key={quiz.id}>
                {quiz.title}: {quiz.score}%
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}