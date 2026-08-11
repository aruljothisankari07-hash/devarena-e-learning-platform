function QuestionCard({
  question,
  options,
  selected,
  onSelect,
}) {
  return (
    <div className="dashboard-card">

      <h2>{question}</h2>

      {options.map((option, index) => (

        <button
          key={index}
          className={`login-btn ${
            selected === option ? "selected-option" : ""
          }`}
          onClick={() => onSelect(option)}
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
          }}
        >
          {option}
        </button>

      ))}

    </div>
  );
}

export default QuestionCard;