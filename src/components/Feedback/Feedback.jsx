const Feedback = ({
  countGoodFeedback,
  countNeutralFeedback,
  countBadFeedback,
}) => {
  return (
    <div>
      <p>Good: {countGoodFeedback}</p>
      <p>Neutral: {countNeutralFeedback}</p>
      <p>Bad: {countBadFeedback}</p>
      <p>Positive: </p>
    </div>
  );
};

export default Feedback;
