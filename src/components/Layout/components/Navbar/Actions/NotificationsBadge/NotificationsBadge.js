import { useState } from "react";
import styles from "./NotificationsBadge.module.scss";

const NotificationsBadge = () => {
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <div className={styles.container}>
      <div className={styles["has-notification"]}>
        <img alt="notifications" src="assets/icons/notifications.svg" />
      </div>
    </div>
  );
};

export default NotificationsBadge;
