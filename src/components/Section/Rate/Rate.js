import styles from "./Rate.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Rate = ({ value, text }) => {
  return (
    <div className={styles.rate}>
      <div className={styles.container}>
        <div style={{ width: 80 }}>
          <CircularProgressbar value={value} text={`${value}%`} />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{text}</p>
          <p className={styles.desc}> ( 1 week ) </p>
        </div>
      </div>
    </div>
  );
};

export default Rate;
