import { useState } from "react";

function EasyChallenge() {

  const [answer, setAnswer] = useState("");

  const question = "Write a JavaScript program to print 'Hello World'.";

  const checkAnswer = () => {

    if (
      answer.includes("Hello World") ||
      answer.includes("console.log")
    ) {

      alert("🎉 Correct Answer!\n\n+20 XP");

    } else {

      alert("❌ Try Again");

    }

  };

  return (

    <div className="dashboard-main">

      <div className="dashboard-card">

        <h1>🟢 Easy Challenge</h1>

        <hr />

        <h2>Question</h2>

        <p>{question}</p>

        <br />

        <textarea
          rows="10"
          placeholder="Write your JavaScript code here..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
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
          onClick={checkAnswer}
        >
          Submit Answer
        </button>

      </div>

    </div>

  );

}

export default EasyChallenge;