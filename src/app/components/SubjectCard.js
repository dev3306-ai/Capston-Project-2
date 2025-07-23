import "../styles/SubjectCard.css";

export default function SubjectCard({ subject }) {
  return (
    <div className="subject-card">
      <h2>{subject.name}</h2>
      <p>{subject.description}</p>
      <a href={`/subjects/${subject.id}/lessons`} className="subject-link">
        View Lessons
      </a>
    </div>
  );
}
