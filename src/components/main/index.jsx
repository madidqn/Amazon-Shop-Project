import { useSelector } from "react-redux";
import styles from "./style.module.css";

function Main({ children }) {
  const { inputSearchClick, showModal } = useSelector(
    (state) => state.products
  );
  return (
    <div className={styles.containerMain}>
      <div
        className={`${inputSearchClick || showModal ? styles.filter : null}`}
      ></div>
      <main className={`${styles.main}`}>{children}</main>
    </div>
  );
}

export default Main;
