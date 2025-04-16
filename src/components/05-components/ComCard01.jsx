import { useState } from "react";
import "./Card01.css";

const FlashCards = () => {
  const [questions, setQuestions] = useState([
    {
      id: 3457,
      question: "What language is React based on?",
      answer: "JavaScript",
    },
    {
      id: 7336,
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      id: 8832,
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      id: 1297,
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    {
      id: 9103,
      question: "How to give components memory?",
      answer: "useState hook",
    },
    {
      id: 2002,
      question:
        "What do we call an input element that is completely synchronised with state?",
      answer: "Controlled element",
    },
  ]);
  const [selectedid, setSelectedId] = useState(null);
  const handleClick = (id) => {
    setSelectedId(id !== selectedid ? id : null);
  };
  return (
    <>
      <div className="flashcards">
        {questions.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={item.id === selectedid ? "selected" : ""}
            >
              <p>{item.id === selectedid ? item.answer : item.question}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

const ComCard01 = () => {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
};

export default ComCard01;
