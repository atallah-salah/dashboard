import styles from "./Sidebar.module.scss";
import PagesLinks from "./PagesLinks/PagesLinks";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <img className={styles.logo} alt="logo" src="assets/icons/logo.svg" />

      <PagesLinks />
    </div>
  );
};

export default Sidebar;
