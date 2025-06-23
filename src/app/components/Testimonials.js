import "../styles/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "EduVerse has transformed the way I learn. The interactive lessons are amazing!",
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "The quizzes are fun and challenging. I feel more confident in my studies now.",
  },
  {
    id: 3,
    name: "Michael Brown",
    feedback:
      "The platform is user-friendly and the content is top-notch. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <p>"{testimonial.feedback}"</p>
            <h4>- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
