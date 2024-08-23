import { useEffect, useState } from "react";
import Feedback from "./cc/Feedback";
import Notification from "./cc/Notification";
import Options from "./cc/Options";
import "./css/App.css";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("data"));
    if (savedData !== null) {
      return savedData;
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    } else {
      setFeedback((prevType) => ({
        ...prevType,
        [feedbackType]: prevType[feedbackType] + 1,
      }));
    }
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div className="container">
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options onFeedback={updateFeedback} total={totalFeedback} />
      {totalFeedback !== 0 ? (
        <Feedback feedback={feedback} positiveFeedback={positiveFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
