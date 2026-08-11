import { useState } from "react";

function HardChallenge() {

  const questions = [
    {
      question: "Reverse a string in JavaScript.",
      keyword: "split",
    },
    {
      question: "Find the factorial of a number.",
      keyword: "function",
    },
    {
      question: "Check whether a number is prime.",
      keyword: "for",
    },
    {
      question: "Find the largest element in an array.",
      keyword: "Math.max",
    },
    {
      question: "Remove duplicate values from an array.",
      keyword: "Set",
    },
    {
      question: "Sort an array in ascending order.",
      keyword: "sort",
    },
    {
      question: "Find Fibonacci series.",
      keyword: "for",
    },
    {
      question: "Count vowels in a string.",
      keyword: "includes",
    },
    {
      question: "Check palindrome string.",
      keyword: "reverse",
    },
    {
      question: "Find second largest number in an array.",
      keyword: "sort",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [code, setCode] = useState("");
  const [score, setScore] = useState(0);

  const submitAnswer = () => {

    let newScore = score;

    if (
      code.toLowerCase().includes(
        questions[current].keyword.toLowerCase()
      )
    ) {
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
        `🏆 Hard Challenge Completed!

Score : ${newScore}/${questions.length}

⭐ +100 XP`
      );

    }

  };

  const progress =
    ((current + 1) / questions.length) * 100;

  return (

    <div className="dashboard-main">

      <div className="dashboard-card">

        <h1>🔴 Hard Challenge</h1>

        <hr />

        <div
          style={{
            width: "100%",
            height: "15px",
            background: "#ddd",
            borderRadius: "10px",
          }}
        >

          <div
            style={{
              width: `${progress}%`,
              height: "15px",
              background: "red",
              borderRadius: "10px",
            }}
          ></div>

        </div>

        <br />

        <h2>
          Question {current + 1} / {questions.length}
        </h2>

        <p>{questions[current].question}</p>

        <textarea
          rows="10"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Write your JavaScript code..."
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

        <h3>⭐ Score : {score}</h3>

      </div>

    </div>

  );

}

export default HardChallenge;