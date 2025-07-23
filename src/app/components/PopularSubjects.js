import Link from "next/link";
import "../styles/PopularSubjects.css";

const subjects = [
  {
    id: 1,
    name: "Mathematics",
    description: "Master the art of numbers and equations.",
  },
  { id: 2, name: "Physics", description: "Explore the laws of the universe." },
  {
    id: 3,
    name: "Chemistry",
    description: "Dive into the world of atoms and molecules.",
  },
];

export default function PopularSubjects() {
  return (
    <section className="popular-subjects">
      <h2>Popular Subjects</h2>
      <div className="subjects-grid">
        {subjects.map((subject) => (
          <div key={subject.id} className="subject-card">
            <h3>{subject.name}</h3>
            <p>{subject.description}</p>
            <Link href={`/subjects/${subject.id}/lessons`}>
              <button className="explore-button">Explore</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
