import { useState } from "react";
import "../styles/faq.css";

const faqData = [
  {
    question: "What is InterviewAce AI?",
    answer:
      "InterviewAce AI helps you prepare for interviews using AI-powered mock interviews and resume analysis.",
  },
  {
    question: "Is Resume Analysis Free?",
    answer:
      "Yes. You can upload your resume and get an instant AI-based analysis.",
  },
  {
    question: "Can I practice Technical Interviews?",
    answer:
      "Yes. HR, Technical and Behavioral interview practice is available.",
  },
  {
    question: "Does it provide ATS Score?",
    answer:
      "Yes. It analyzes your resume and provides an ATS compatibility score.",
  },
];

function Faq() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="faq" id="faq">

      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">

        {faqData.map((item, index) => (

          <div className="faq-item" key={index}>

            <div
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <h3>{item.question}</h3>

              <span>
                {active === index ? "-" : "+"}
              </span>
            </div>

            {active === index && (
              <p className="faq-answer">
                {item.answer}
              </p>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default Faq;