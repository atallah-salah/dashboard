import { useState } from "react";
import styles from "./PagesLinks.module.scss";

const linksData = [
  { pageName: "page1" },
  { pageName: "page2" },
  { pageName: "page3" },
  { pageName: "page4" },
  { pageName: "page5" },
  { pageName: "page6" },
  { pageName: "page7" },
  { pageName: "page8" },
  { pageName: "page9" },
  { pageName: "page10" },
  { pageName: "page11" },
  { pageName: "page12" },
  { pageName: "page13" },
];

const PagesLinks = () => {
  const [activePage, setActivePage] = useState("null");

  return (
    <ul className={styles.container}>
      {linksData.map(({ pageName }, index) => (
        <li className={styles.link} key={pageName}>
          <img className={styles.logo2} alt={pageName} src={`assets/icons/${pageName}.svg`} />
        </li>
      ))}
    </ul>
  );
};

export default PagesLinks;
