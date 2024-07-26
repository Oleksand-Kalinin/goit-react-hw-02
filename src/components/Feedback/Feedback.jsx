const Feedback = ({
  countGoodFeedback,
  countNeutralFeedback,
  countBadFeedback,
  countTotalFeedback,
  positive,
}) => {
  return (
    <div>
      <p>Good: {countGoodFeedback}</p>
      <p>Neutral: {countNeutralFeedback}</p>
      <p>Bad: {countBadFeedback}</p>
      <p>Total: {countTotalFeedback}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
