import Actions from "./Actions/Actions";
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import styles from "./Navbar.module.scss";
import UserBadge from "./UserBadge/UserBadge";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>
        <Breadcrumbs />
      </div>
      <div className={styles.right}>
        <Actions />
        <UserBadge />
      </div>
    </nav>
  );
};

export default Navbar;
