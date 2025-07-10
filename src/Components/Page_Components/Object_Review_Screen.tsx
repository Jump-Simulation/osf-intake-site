import React, { useState } from "react";

export default function ReviewAnswers() {
  const [submitted, setSubmitted] = useState(false);

  const answers = Object.keys(localStorage)
    .filter((key) => key.startsWith("answer-q-"))
    .sort((a, b) => {
      const aNum = parseInt(a.split("-")[2]);
      const bNum = parseInt(b.split("-")[2]);
      return aNum - bNum;
    })
    .map((key) => ({
      questionId: key.replace("answer-q-", ""),
      answer: localStorage.getItem(key),
    }));

  const handleFinalSubmit = () => {
    Object.keys(localStorage)
      .filter((key) => key.startsWith("answer-q-"))
      .forEach((key) => localStorage.removeItem(key));

    setSubmitted(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Review Your Answers</h2>

      {!submitted &&
        answers.map(({ questionId, answer }) => (
          <div key={questionId} style={{ marginBottom: "16px" }}>
            <strong>Question {questionId}:</strong>
            <div>{answer || "(No answer provided)"}</div>
          </div>
        ))}

      {!submitted ? (
        <button
          onClick={handleFinalSubmit}
          style={{
            marginTop: "24px",
            padding: "12px 24px",
            fontSize: "18px",
            background: "#0077cc",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      ) : (
        <div style={{ marginTop: "24px", color: "green", fontWeight: "bold" }}>
          Submitted!
        </div>
      )}
    </div>
  );
}
