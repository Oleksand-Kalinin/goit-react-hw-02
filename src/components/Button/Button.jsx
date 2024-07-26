import styles from "./Button.module.css";

const Button = ({ clicksMethod, text }) => {
  return (
    <button className={styles.button} onClick={clicksMethod} type="button">
      {text}
    </button>
  );
};

export default Button;
