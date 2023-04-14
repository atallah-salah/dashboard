import Rate from "./Rate/Rate";
import styles from "./Section.module.scss";

const Section = ({ title }) => {
  return (
    <div className={styles.section}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.container}>
        <Rate value={50} text={"Current state"} />
        <Rate value={50} text={"Target state"} />
      </div>
    </div>
  );
};

export default Section;
