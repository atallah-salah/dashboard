import styles from "./Layout.module.scss";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const Layout = ({ navbar, sidebar, children }) => {
  return (
    <div className={styles.layout}>
      {sidebar && <Sidebar />}
      <div className={styles.container}>
        {navbar && <Navbar />}
        {children}
      </div>
    </div>
  );
};

export default Layout;
