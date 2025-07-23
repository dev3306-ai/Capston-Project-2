"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SubjectCard from "../components/SubjectCard";
import "../styles/Subjects.css";

const subjectsData = [
  {
    id: 1,
    name: "Mathematics",
    description:
      "Master Mathematics with clear concepts, step-by-step problem solving, and interactive practice — from basic arithmetic to advanced algebra and geometry.",
  },
  {
    id: 2,
    name: "Physics",
    description:
      "Explore the fascinating world of Physics — from motion and energy to electricity and the universe. Learn concepts through interactive lessons, real-world examples, and engaging quizzes.",
  },
  {
    id: 3,
    name: "Chemistry",
    description:
      "Dive into the world of Chemistry — understand atoms, reactions, and the periodic table with easy explanations, experiments, and real-life applications.",
  },
  {
    id: 4,
    name: "Biology",
    description:
      "Discover the wonders of Biology — from cells and genetics to ecosystems and evolution. Learn through engaging lessons and interactive activities.",
  },
  {
    id: 5,
    name: "History",
    description:
      "Travel through time with History — explore ancient civilizations, world wars, and cultural revolutions. Gain insights into the events that shaped our world.",
  },
  {
    id: 6,
    name: "Geography",
    description:
      "Understand the world with Geography — learn about physical landscapes, human geography, and global environmental challenges.",
  },
];

export default function SubjectsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSubjects = subjectsData.filter((subject) =>
    subject.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="page-container">
      <Navbar />
      <div className="subjects-container">
        <h1 className="subjects-title">Explore Subjects</h1>
        <p className="subjects-description">
          Find interactive lessons and resources for your favorite subjects.
        </p>
        <input
          type="text"
          placeholder="Search subjects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="subjects-search"
        />
        <div className="subjects-grid">
          {filteredSubjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
