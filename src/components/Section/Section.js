import Rate from "./Rate/Rate";
import styles from "./Section.module.scss";
import Trend from "./Trend/Trend";

const Section = ({ title, data: { current, target, change, currentDate, targetDate, chart } }) => {
  return (
    <div className={styles.section}>
      <h4 className={styles.title}>{title}</h4>
      <div className={styles.container}>
        <Rate value={current} change={change} date={currentDate} text={"Current state"} />
        <Rate value={target} date={targetDate} text={"Target state"} />
      </div>
      <Trend change={change} chart={chart} />
    </div>
  );
};

export default Section;
