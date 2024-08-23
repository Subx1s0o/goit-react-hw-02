export default function Feedback({ feedback, positiveFeedback }) {
  return (
    <div>
      <p>Good: {feedback.good} </p>

      <p>Neutral: {feedback.neutral} </p>

      <p>Bad: {feedback.bad} </p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}
