import Image from "next/image";
import './Features.css'; 
export default function Features() {
  return (
    <section className="features">
      <div className="feature">
        <Image src="/interactive-lessons.svg" alt="Lessons" width={80} height={80} />
        <h3>Interactive Lessons</h3>
        <p>Learn through engaging and interactive content.</p>
      </div>
      <div className="feature">
        <Image src="/quizzes.svg" alt="Quizzes" width={80} height={80} />
        <h3>Quizzes</h3>
        <p>Test your knowledge with fun quizzes.</p>
      </div>
      <div className="feature">
        <Image src="/progress-tracking.svg" alt="Progress" width={80} height={80} />
        <h3>Progress Tracking</h3>
        <p>Track your learning journey and achievements.</p>
      </div>
    </section>
  );
}