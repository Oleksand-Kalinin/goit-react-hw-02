import styles from "./Button.module.css";

const Button = ({ clicksMethod, text }) => {
  return (
    <button className={styles.button} onClick={clicksMethod}>
      {text}
    </button>
  );
};

export default Button;
