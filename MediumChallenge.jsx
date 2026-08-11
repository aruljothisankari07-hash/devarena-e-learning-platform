import { useState } from "react";

function MediumChallenge() {

  const questions = [
    {
      question: "Write a JavaScript function to add two numbers.",
      answer: "function",
    },
    {
      question: "Create an array containing 5 numbers.",
      answer: "[]",
    },
    {
      question: "Use a for loop to print numbers from 1 to 10.",
      answer: "for",
    },
    {
      question: "Create an object with name and age.",
      answer: "{}",
    },
    {
      question: "Print 'DevArena' using console.log().",
      answer: "console.log",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [code, setCode] = useState("");
  const [score, setScore] = useState(0);

  const submitAnswer = () => {

    let newScore = score;

    if (code.includes(questions[current].answer)) {
      newScore++;
      setScore(newScore);
      alert("✅ Correct!");
    } else {
      alert("❌ Wrong Answer");
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setCode("");
    } else {
      alert(
        `🎉 Medium Challenge Completed!\n\nScore : ${newScore}/${questions.length}\n\n+50 XP`
      );
    }

  };

  return (

    <div className="dashboard-main">

      <div className="dashboard-card">

        <h1>🟡 Medium Challenge</h1>

        <hr />

        <h2>
          Question {current + 1} / {questions.length}
        </h2>

        <p>{questions[current].question}</p>

        <br />

        <textarea
          rows="10"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your code here..."
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "10px",
          }}
        />

        <br />
        <br />

        <button
          className="login-btn"
          onClick={submitAnswer}
        >
          Submit
        </button>

        <br />
        <br />

        <h3>Score : {score}</h3>

      </div>

    </div>

  );

}

export default MediumChallenge;