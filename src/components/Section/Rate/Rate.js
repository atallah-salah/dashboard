import styles from "./Rate.module.scss";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Rate = ({ value, text, change, date }) => {
  return (
    <div className={styles.rate}>
      <div className={styles.container}>
        <div style={{ width: 80 }}>
          <CircularProgressbar value={value} text={`${value}%`} />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{text}</p>
          <p className={styles.desc}>{date}</p>
          {Boolean(change) && (
            <div className={styles.change}>
              <img alt="arrow" src={`assets/icons/arrow-${change > 0 ? "up" : "down"}.svg`} />
              <span className={[styles.text, change > 0 ? styles.up : styles.down].join(" ")}>
                {change > 0 ? "+" : "-"} {Math.abs(change)}%
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rate;
