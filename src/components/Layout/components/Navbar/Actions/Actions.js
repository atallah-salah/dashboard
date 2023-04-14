import { useMedia } from "use-media";
import styles from "./Actions.module.scss";
import NotificationsBadge from "./NotificationsBadge/NotificationsBadge";

const Actions = () => {
  const hideActions = useMedia({ minWidth: 660 });

  return (
    <nav className={styles.actions}>
      {hideActions && (
        <>
          <img alt="filters" src="assets/icons/filters.svg" />
          <img alt="translate" src="assets/icons/translate.svg" />
          <img alt="settings" src="assets/icons/settings.svg" />
          <img alt="support" src="assets/icons/support.svg" />
        </>
      )}
      <NotificationsBadge />
    </nav>
  );
};

export default Actions;
