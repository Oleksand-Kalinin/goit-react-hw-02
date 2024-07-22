const Feedback = ({
  countGoodFeedback,
  countNeutralFeedback,
  countBadFeedback,
  countTotalFeedback,
  positive,
}) => {
  return (
    <div>
      {countTotalFeedback ? (
        <>
          <p>Good: {countGoodFeedback}</p>
          <p>Neutral: {countNeutralFeedback}</p>
          <p>Bad: {countBadFeedback}</p>
          <p>Total: {countTotalFeedback}</p>
          <p>Positive: {positive}%</p>
        </>
      ) : (
        <>
          <p>No feedback yet</p>
        </>
      )}
    </div>
  );
};

export default Feedback;
