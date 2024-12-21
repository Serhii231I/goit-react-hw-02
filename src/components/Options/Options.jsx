import styles from "../Options/Options.module.css";
const Options = ({ updateFeedback, resetFeedback }) => {
  return (
    <div className={styles.buttonsContainer}>
      <button onClick={() => updateFeedback("good")} className={styles.button}>
        Good
      </button>
      <button
        onClick={() => updateFeedback("neutral")}
        className={styles.button}
      >
        Neutral
      </button>
      <button onClick={() => updateFeedback("bad")} className={styles.button}>
        Bad
      </button>
      <button onClick={resetFeedback} className={styles.button}>
        Reset
      </button>
    </div>
  );
};
export default Options;
