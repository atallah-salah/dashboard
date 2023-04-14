import styles from "./UserBadge.module.scss";

const UserBadge = () => {
  return (
    <div className={styles.container}>
      <div className={styles.badge}>
        <img alt="user-profile" src="assets/images/avatar.png" />
      </div>
    </div>
  );
};

export default UserBadge;
