import { useState } from "react";
import useMedia from "use-media";

import styles from "./Breadcrumbs.module.scss";
const Breadcrumbs = () => {
  const [paths, setPaths] = useState(["Main", "Visual pollution", "Enforcement Rate - Overview Page​ - All Country"]);
  const hidePaths = useMedia({ minWidth: 990 });

  return (
    <div className={styles.breadcrumbs}>
      <div className={styles["menu-trigger"]}>
        <img alt="menu trigger" src="assets/icons/collapse.svg" />
      </div>

      <div className={styles["path-icon"]}>
        <img alt="menu trigger" src="assets/icons/home.svg" />
      </div>

      <div className={styles.title}>Visual pollution</div>

      {hidePaths && (
        <ul className={styles.paths}>
          {paths.map((path, index) => (
            <li className={styles.path} key={path}>
              {Boolean(index) && <span className={styles.separator}>/</span>}
              <p className={styles.title}>{path}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Breadcrumbs;
