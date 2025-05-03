import "../styles/Hero.css";
export default function Hero() {
    return (
      <main className="hero">
        <h1>Welcome to EduVerse</h1>
        <p>Explore subjects, take lessons, attempt quizzes, and track your progress.</p>
        <div className="cta-buttons">
          <a href="/subjects" className="btn-primary">Start Learning</a>
          <a href="/auth" className="btn-secondary">Sign Up</a>
        </div>
      </main>
    );
  }