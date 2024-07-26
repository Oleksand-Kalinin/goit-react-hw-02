import Button from "../Button/Button";
import styles from "./Options.module.css";

const Options = ({ updateFeedback, resetFeedback, countTotalFeedback }) => {
  return (
    <div className={styles.buttons}>
      <Button clicksMethod={() => updateFeedback("good")} text={"Good"} />
      <Button clicksMethod={() => updateFeedback("neutral")} text={"Neutral"} />
      <Button clicksMethod={() => updateFeedback("bad")} text={"Bad"} />
      {countTotalFeedback > 0 && (
        <Button clicksMethod={resetFeedback} text={"Reset"} />
      )}
    </div>
  );
};

export default Options;
