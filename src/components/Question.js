import React, { useState } from "react";
import "./Question.css";

const Question = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What do we actually do?",
      answer: "We provide solutions for...",
    },
    {
      question: "How long have we been active?",
      answer: "We have been active for...",
    },
    {
      question: "How can I get involved?",
      answer: "You can get involved by...",
    },
    { question: "What impact have we made?", answer: "Our impact includes..." },
    {
      question: "Where can I find more info?",
      answer: "More information can be found...",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="qSec section" id="qSec">
      <h1>Your Burning Questions Answered</h1>
      <div className="questions">
        {questions.map((q, index) => (
          <div
            key={index}
            className="question"
            onClick={() => toggleAnswer(index)}
          >
            <h3>{q.question}</h3>
            {activeIndex === index && <p>{q.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Question;
