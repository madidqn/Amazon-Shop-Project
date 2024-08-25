import { useState } from "react";
import Select from "react-select";

//icons
import { FaMapMarkerAlt, FaSearch, FaBars } from "react-icons/fa";
// import { FaSearch } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";

// style
import styles from "./App.module.css";

const options = [
  { value: "all", label: "All" },
  { value: "mobiles", label: "Mobiles" },
  { value: "laptops", label: "Laptops" },
  { value: "mobile accessories", label: "Mobile accessories" },
];

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  // function ChangeOption(option) {
  //   setSelectedOption(option);
  // }
  return (
    <>
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
          <div className={styles.cart}>
            <span>0</span>
            <img src="./cart.avif" alt="cart" />
            <span>Cart</span>
          </div>
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
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
