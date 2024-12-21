import styles from "../Feedback/Feedback.module.css";
const Feedback = ({ feedback, totalFeedback, positive }) => {
  if (totalFeedback > 0)
    return (
      <div className={styles.feedbackListContainer}>
        <ul className={styles.feedbackList}>
          <li className={styles.feedbackItem}>Good: {feedback.good}</li>
          <li className={styles.feedbackItem}>Neutral: {feedback.neutral}</li>
          <li className={styles.feedbackItem}>Bad: {feedback.bad}</li>
          <li className={styles.feedbackItem}>Total: {totalFeedback}</li>
          <li className={styles.feedbackItem}>Positive: {positive}%</li>
        </ul>
      </div>
    );
};
export default Feedback;
