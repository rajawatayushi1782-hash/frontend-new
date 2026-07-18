import "../styles/testimonials.css";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer",
    text: "InterviewAce helped me crack my first product-based company interview. The AI feedback was incredibly useful.",
  },
  {
    name: "Priya Verma",
    role: "Frontend Developer",
    text: "The Resume Analyzer improved my ATS score and I started getting more interview calls.",
  },
  {
    name: "Aman Singh",
    role: "Student",
    text: "The mock interviews felt realistic. My confidence improved a lot.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <h2>What Our Users Say</h2>

      <div className="testimonial-grid">

        {reviews.map((item, index) => (

          <div className="testimonial-card" key={index}>

            <div className="user-avatar">
              {item.name.charAt(0)}
            </div>

            <h3>{item.name}</h3>

            <span>{item.role}</span>

            <p>"{item.text}"</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Testimonials;