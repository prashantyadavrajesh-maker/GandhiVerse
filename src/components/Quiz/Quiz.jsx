import "./Quiz.css";
import { useState } from "react";

function Quiz() {
  const questions = [
    {
      question: "Where was Mahatma Gandhi born?",
      options: ["Delhi", "Mumbai", "Porbandar", "Ahmedabad"],
      answer: "Porbandar",
    },
    {
      question: "In which year was Mahatma Gandhi born?",
      options: ["1869", "1875", "1880", "1890"],
      answer: "1869",
    },
    {
      question: "Which movement is associated with the Salt March?",
      options: [
        "Quit India Movement",
        "Non-Cooperation Movement",
        "Dandi March",
        "Khilafat Movement",
      ],
      answer: "Dandi March",
    },
    {
      question: "What was Gandhi's famous principle?",
      options: ["Violence", "Ahimsa", "War", "Imperialism"],
      answer: "Ahimsa",
    },
    {
      question: "What title was given to Gandhi?",
      options: [
        "Netaji",
        "Lokmanya",
        "Mahatma",
        "Pandit",
      ],
      answer: "Mahatma",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) {
      setScore(score + 1);
    }

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {
      setShowResult(true);
    }
  };

  return (
    <section id="quiz" className="quiz-section">
      <h2 className="quiz-title">🧠 Gandhi Quiz</h2>

      {showResult ? (
        <div className="result-card">
          <h3>Your Score</h3>
          <p>
            {score} / {questions.length}
          </p>

          <button
            onClick={() => {
              setCurrent(0);
              setScore(0);
              setShowResult(false);
            }}
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="quiz-card">
          <h3>
            Q{current + 1}. {questions[current].question}
          </h3>

          <div className="options">
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>

          <p className="progress">
            Question {current + 1} / {questions.length}
          </p>
        </div>
      )}
    </section>
  );
}

export default Quiz;