import "../styles/SubjectCard.css";

export default function SubjectCard({ subject }) {
  const handleExploreClick = () => {
    window.location.href = `/subjects/${subject.id}/lessons-quizzes`;
  };

  return (
    <div className="subject-card">
      <h3>{subject.name}</h3>
      <p>{subject.description}</p>
      <button className="explore-button" onClick={handleExploreClick}>
        Explore
      </button>
    </div>
  );
}
