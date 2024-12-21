import styles from "../Feedback/Feedback.module.css";
const Feedback = ({ feedback }) => {
  return (
    <div>
      <ul className={styles.feedbackList}>
        <li className={styles.feedbackItem}>Good:{feedback.good}</li>
        <li className={styles.feedbackItem}>Neutral:{feedback.neutral}</li>
        <li className={styles.feedbackItem}>Bad:{feedback.bad}</li>
      </ul>
    </div>
  );
};
export default Feedback;
