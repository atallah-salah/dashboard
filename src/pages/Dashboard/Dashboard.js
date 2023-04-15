import Map from "../../components/Map/Map";
import Section from "../../components/Section/Section";
import styles from "./Dashboard.module.scss";
import { useSelector } from "react-redux";
// import { setState, updateState } from "../../redux/slices/generalSlice.js";

const Dashborad = () => {
  const { regulationEnforcement, coverage, resolution } = useSelector((state) => state.general);

  return (
    <div className={styles.dashborad}>
      <div className={styles["sections-container"]}>
        <Section title={"Regulation enforcement rate"} data={regulationEnforcement} />
        <Section title={"Coverage rate"} data={coverage} />
        <Section title={"Resolution rate"} data={resolution} />
      </div>

      <div className={styles["sections-container"]}>
        <Map />
      </div>
    </div>
  );
};

export default Dashborad;
