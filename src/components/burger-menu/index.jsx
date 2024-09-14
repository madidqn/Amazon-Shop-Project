import styles from "./style.module.css";
import { CgChevronRight } from "react-icons/cg";

function BurgerMenu() {
  return (
    <div className={styles.container}>
      {/* <div onClick={() => setBurgerMenu(false)}></div> */}
      <div className={styles.burgerMenu}>
        <div>
          <img src="/person.avif" alt="person" />
          <h3>Hello, sign in</h3>
        </div>
        <div>
          <ul>
            <h3> Digital Content & Devices</h3>
            <li>
              <span>Amazon Music</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span>Kindle E -readers & Books</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span>Amazon Appstore</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
          </ul>
          <ul>
            <h3>Shop by Department</h3>
            <li>
              <span>Electronics</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span>Computer</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span>Smart Home</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span> Arts & Crafts</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span> See all </span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
          </ul>
          <ul>
            <h3>Programs & Features</h3>
            <li>
              <span>Gift Cards</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span>Shop By Interest</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span> Amazon live</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span>International Shopping</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span> See all</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
          </ul>
          <ul>
            <h3>Help & Settings</h3>
            <li>
              <span>Your Account</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <p>
                <img src="/language.avif" alt="language" />
                <span>English</span>
              </p>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <p>
                <img src="erth.avif" alt="erth" />
                <span>United States</span>
              </p>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span>Customer Service</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
            <li>
              <span>Sign in</span>
              <CgChevronRight className={styles.iconArrowRight} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BurgerMenu;
