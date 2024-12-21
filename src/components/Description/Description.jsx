import styles from "../Description/Description.module.css";
const Description = () => {
  return (
    <div className={styles.headerContainer}>
      <h2 className={styles.headerText}>Sip Happens Café</h2>

      <p className={styles.descriptionText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
};
export default Description;
