import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    total() {
      return this.good + this.neutral + this.bad;
    },
    positive() {
      return Math.round((this.good / this.total()) * 100);
    },
  });

  const updateFeedbackObj = {
    updateFeedback(feedbackType) {
      setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    },

    resetFeedback() {
      setFeedback({ ...feedback, good: 0, neutral: 0, bad: 0 });
    },
  };

  return (
    <>
      <Description />

      <Options
        updateFeedbackObj={updateFeedbackObj}
        countTotalFeedback={feedback.total()}
      />

      <Feedback
        countGoodFeedback={feedback.good}
        countNeutralFeedback={feedback.neutral}
        countBadFeedback={feedback.bad}
        countTotalFeedback={feedback.total()}
        positive={feedback.positive()}
      />
    </>
  );
}

export default App;
