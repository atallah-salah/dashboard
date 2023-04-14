import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.left}>left</div>
      <div className={styles.right}>right</div>
    </nav>
  );
};

export default Navbar;
