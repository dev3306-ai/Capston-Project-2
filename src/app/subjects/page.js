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
      "Discover the wonders of life sciences, from cells to ecosystems, and understand how living organisms interact with their environment.",
  },
  {
    id: 5,
    name: "History",
    description:
      "Dive into the past and learn about historical events, civilizations, and the people who shaped the world.",
  },
  {
    id: 6,
    name: "Geography",
    description:
      "Understand the physical features of the Earth, its climate, and how humans interact with their environment.",
  },
  {
    id: 7,
    name: "Computer Science",
    description:
      "Learn programming, algorithms, and the fundamentals of computer systems and software development.",
  },
  {
    id: 8,
    name: "Economics",
    description:
      "Explore the principles of economics, including supply and demand, markets, and global trade.",
  },
  {
    id: 9,
    name: "Art",
    description:
      "Unleash your creativity by learning about various art forms, techniques, and the history of art.",
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
        <h1 className="subjects-title">Subjects</h1>
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
