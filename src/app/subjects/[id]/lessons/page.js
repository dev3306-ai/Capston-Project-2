"use client";

import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import "../../../styles/Lessons.css";

export default function LessonsPage({ params }) {
  const { id } = params;

  const subjects = {
    1: "Mathematics",
    2: "Physics",
    3: "Chemistry",
    4: "Biology",
    5: "History",
    6: "Geography",
  };

  const lessonsData = {
    1: [
      {
        title: "Introduction to Algebra",
        description:
          "Learn the basics of algebra, including variables, equations, and expressions. Understand how algebra forms the foundation for advanced mathematics.",
        videoUrl: "https://www.youtube.com/embed/xyz123",
      },
      {
        title: "Advanced Algebra",
        description:
          "Dive deeper into algebra concepts like quadratic equations and polynomials. Explore real-world applications and problem-solving techniques.",
        videoUrl: "https://www.youtube.com/embed/abc456",
      },
      {
        title: "Geometry Basics",
        description:
          "Understand shapes, angles, and theorems in geometry. Learn how geometry is used in architecture, engineering, and design.",
        videoUrl: "https://www.youtube.com/embed/def789",
      },
    ],
    2: [
      {
        title: "Newton's Laws of Motion",
        description:
          "Explore the fundamental laws of motion and their applications. Discover how these laws govern everyday phenomena and scientific advancements.",
        videoUrl: "https://www.youtube.com/embed/ghi012",
      },
      {
        title: "Electricity Fundamentals",
        description:
          "Learn about electric circuits, voltage, and current. Understand the principles behind electrical devices and their practical uses.",
        videoUrl: "https://www.youtube.com/embed/jkl345",
      },
      {
        title: "Thermodynamics",
        description:
          "Understand the principles of heat, energy, and thermodynamic systems. Explore how thermodynamics is applied in engines and energy systems.",
        videoUrl: "https://www.youtube.com/embed/mno678",
      },
    ],
    3: [
      {
        title: "Atomic Structure",
        description:
          "Discover the structure of atoms and their components. Learn how atomic theory explains chemical reactions and material properties.",
        videoUrl: "https://www.youtube.com/embed/pqr901",
      },
      {
        title: "Chemical Reactions",
        description:
          "Learn about different types of chemical reactions and their mechanisms. Understand how reactions are used in industries and everyday life.",
        videoUrl: "https://www.youtube.com/embed/stu234",
      },
      {
        title: "Periodic Table",
        description:
          "Understand the organization and significance of the periodic table. Explore how elements are classified and their unique properties.",
        videoUrl: "https://www.youtube.com/embed/vwx567",
      },
    ],
    4: [
      {
        title: "Cell Biology",
        description:
          "Explore the structure and function of cells in living organisms. Learn how cells are the building blocks of life and their role in health.",
        videoUrl: "https://www.youtube.com/embed/abc123",
      },
      {
        title: "Genetics Basics",
        description:
          "Learn the fundamentals of genetics, including DNA and inheritance. Understand how genetic information is passed down and its impact on evolution.",
        videoUrl: "https://www.youtube.com/embed/def456",
      },
      {
        title: "Ecosystems and Evolution",
        description:
          "Understand ecosystems and the process of evolution. Explore how organisms adapt to their environment and the importance of biodiversity.",
        videoUrl: "https://www.youtube.com/embed/ghi789",
      },
    ],
    5: [
      {
        title: "Ancient Civilizations",
        description:
          "Study the history and culture of ancient civilizations. Learn how their innovations shaped modern society and their lasting legacies.",
        videoUrl: "https://www.youtube.com/embed/jkl012",
      },
      {
        title: "World Wars Overview",
        description:
          "Learn about the causes, events, and impacts of World Wars. Understand how these conflicts reshaped global politics and economies.",
        videoUrl: "https://www.youtube.com/embed/mno345",
      },
      {
        title: "Cultural Revolutions",
        description:
          "Explore major cultural revolutions and their influence on society. Discover how art, science, and technology evolved during these periods.",
        videoUrl: "https://www.youtube.com/embed/pqr678",
      },
    ],
    6: [
      {
        title: "Physical Landscapes",
        description:
          "Understand the formation and features of physical landscapes. Learn how natural forces shape mountains, valleys, and other landforms.",
        videoUrl: "https://www.youtube.com/embed/stu901",
      },
      {
        title: "Human Geography",
        description:
          "Learn about human interactions with the environment and geography. Explore how population, culture, and economics influence global patterns.",
        videoUrl: "https://www.youtube.com/embed/vwx234",
      },
      {
        title: "Environmental Challenges",
        description:
          "Explore global environmental challenges and their solutions. Understand the importance of sustainability and conservation efforts.",
        videoUrl: "https://www.youtube.com/embed/xyz567",
      },
    ],
  };

  const lessons = lessonsData[id];
  const subjectName = subjects[id];

  return (
    <div className="page-container">
      <Navbar />
      <div className="lessons-container">
        <h1>Lessons for {subjectName}</h1>
        <div className="lessons-grid">
          {lessons.map((lesson, index) => (
            <div key={index} className="lesson-card">
              <h2>{lesson.title}</h2>
              <p>{lesson.description}</p>
              <iframe src={lesson.videoUrl} title={lesson.title}></iframe>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
