import Section from "../../components/Section/Section";
import styles from "./Dashboard.module.scss";

const Dashborad = () => {
  return (
    <div className={styles.dashborad}>
      <div className={styles["sections-container"]}>
        <Section title={"Regulation enforcement rate"} />
        <Section title={"Coverage rate"} />
        <Section title={"Resolution rate"} />
      </div>
    </div>
  );
};

export default Dashborad;
