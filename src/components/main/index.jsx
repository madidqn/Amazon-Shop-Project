import { useSelector } from "react-redux";

import styles from "./style.module.css";

function Main({ children }) {
  const { inputSearchClick, showModalLanguage, showModalAccount } = useSelector(
    (state) => state.modals
  );
  return (
    <div className={styles.containerMain}>
      <div
        className={`${
          inputSearchClick || showModalLanguage || showModalAccount
            ? styles.filter
            : null
        }`}
      ></div>
      <main className={`${styles.main}`}>{children}</main>
    </div>
  );
}

export default Main;
