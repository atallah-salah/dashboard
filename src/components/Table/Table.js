import styles from "./Table.module.scss";

const Table = () => {
  return (
    <div className={styles.table}>
      <div className={styles.container}>
        <table>
          <tbody>
            <tr>
              <th>Description</th>
              <th>Owner</th>
              <th>Impacted KPI</th>
              <th>Impacted Sub-KPI</th>
              <th>Impacted VC step</th>
              <th>Geography</th>
            </tr>
            <tr>
              <td className={styles.raw}>
                <img alt="check" src="assets/icons/check.svg" />
                Review process with Makkah Amanah to improve their Regulation enforcement rate
              </td>
              <td>Enforcement Team</td>
              <td>Regulation enforcement rate​</td>
              <td>Regulation clause​​</td>
              <td>Plan / Detect</td>
              <td>Riyadh</td>
            </tr>
            <tr>
              <td className={styles.raw}>
                <img alt="check" src="assets/icons/alert.svg" />
                Review process with Makkah Amanah to improve their Regulation enforcement rate
              </td>
              <td>Enforcement Team</td>
              <td>Regulation enforcement rate​</td>
              <td>Regulation clause​​</td>
              <td>Plan / Detect</td>
              <td>Riyadh</td>
            </tr>
            <tr>
              <td className={styles.raw}>
                <img alt="check" src="assets/icons/error.svg" />
                Review process with Makkah Amanah to improve their Regulation enforcement rate
              </td>
              <td>Enforcement Team</td>
              <td>Regulation enforcement rate​</td>
              <td>Regulation clause​​</td>
              <td>Plan / Detect</td>
              <td>Riyadh</td>
            </tr>
            <tr>
              <td className={styles.raw}>
                <img alt="check" src="assets/icons/check.svg" />
                Review process with Makkah Amanah to improve their Regulation enforcement rate
              </td>
              <td>Enforcement Team</td>
              <td>Regulation enforcement rate​</td>
              <td>Regulation clause​​</td>
              <td>Plan / Detect</td>
              <td>Riyadh</td>
            </tr>
            <tr>
              <td className={styles.raw}>
                <img alt="check" src="assets/icons/alert.svg" />
                Review process with Makkah Amanah to improve their Regulation enforcement rate
              </td>
              <td>Enforcement Team</td>
              <td>Regulation enforcement rate​</td>
              <td>Regulation clause​​</td>
              <td>Plan / Detect</td>
              <td>Riyadh</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
