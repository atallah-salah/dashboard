import styles from "./Trend.module.scss";

const Trend = ({ change, chart }) => {
  return (
    <div className={styles.trend}>
      <div className={styles.container}>
        <div className={styles.info}>
          <p className={styles.title}>Trend</p>
          <p className={styles.desc}>
            <img alt="arrow" src={`assets/icons/${change > 0 ? "rise" : "down"}.svg`} />
            Last 6 Months
          </p>
        </div>
        <img alt="chart" src={`assets/charts/${chart}.svg`} />
      </div>
    </div>
  );
};

export default Trend;
