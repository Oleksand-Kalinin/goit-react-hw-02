import { useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedbackObj = {
    updateFeedback(feedbackType) {
      setFeedback({ ...feedback, [feedbackType]: feedback[feedbackType] + 1 });
    },

    resetFeedback() {
      setFeedback({ good: 0, neutral: 0, bad: 0 });
    },
  };

  return (
    <>
      <Description />
      <Options updateFeedbackObj={updateFeedbackObj} />
      <Feedback
        countGoodFeedback={feedback.good}
        countNeutralFeedback={feedback.neutral}
        countBadFeedback={feedback.bad}
      />
    </>
  );
}

export default App;
