import { useState } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
//style
import styles from "./style.module.css";

//icons
import { FaMapMarkerAlt, FaSearch, FaBars } from "react-icons/fa";

function Header() {
  const { value } = useSelector((state) => state.cart);
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "all", label: "All" },
    { value: "mobiles", label: "Mobiles" },
    { value: "laptops", label: "Laptops" },
    { value: "mobile accessories", label: "Mobile accessories" },
  ];
  return (
    <header className={styles.header}>
      <div className={styles.searchbar}>
        <img src="./logo.avif" alt="logo" className={styles.logo} />
        <div className={styles.deliver}>
          <FaMapMarkerAlt />
          <span>
            <span>Deliver to </span>
            <span> Iran</span>
          </span>
        </div>
        <div className={styles.inputSearch}>
          <form action="">
            <Select
              value={selectedOption}
              placeholder="All"
              onChange={setSelectedOption}
              options={options}
            />
            <input type="text" placeholder="Search Amazon" />
            <button>
              <FaSearch className={styles.FaSearch} />
            </button>
          </form>
        </div>
        <div className={styles.language}>
          <img src="./language.avif" alt="language" />
          <span>EN</span>
        </div>
        <div className={styles.signIn}>
          <span>Hello, sign in</span>
          <span>Account & Lists</span>
        </div>
        <div className={styles.signIn}>
          <span>Returns</span>
          <span>& Orders</span>
        </div>
        <Link className={styles.cart} to={"/cart"}>
          <span>{value}</span>
          <img src="./cart.avif" alt="cart" />
          <span>Cart</span>
        </Link>
      </div>
      <nav className={styles.menu}>
        <ul>
          <li>
            <FaBars className={styles.bergurIcon} />
            <span>All</span>
          </li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
