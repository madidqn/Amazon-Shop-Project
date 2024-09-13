import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";
function NotFound() {
  return (
    <div className={styles.notFound}>
      <img src="/error.jpg" alt="error" />
      <Link className={styles.backHome} to={"/"}>
        Go to home
      </Link>
    </div>
  );
}

export default NotFound;
