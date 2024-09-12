import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import Select from "react-select";
//style
import styles from "./style.module.css";

//icons
import { FaMapMarkerAlt, FaSearch, FaBars } from "react-icons/fa";

function Header() {
  const { cart } = useSelector((state) => state.products);
  const [clickInput, setClickInput] = useState(false);
  const [showModal, setShowModal] = useState(false);
  // const options = [
  //   { value: "all", label: "All" },
  //   { value: "mobiles", label: "Mobiles" },
  //   { value: "laptops", label: "Laptops" },
  //   { value: "mobile accessories", label: "Mobile accessories" },
  // ];
  const totol = () => {
    return cart.reduce((prev, curr) => prev + curr.quantity, 0);
  };
  const quantity = totol();
  const form = useRef();
  useEffect(() => {
    if (clickInput) {
      form.current.style.outline = "3px solid #feba73";
    } else {
      form.current.style.outline = "none";
    }
  }, [clickInput]);
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
          <form action="" ref={form}>
            {/* <Select
              value={selectedOption}
              placeholder="All"
              onChange={setSelectedOption}
              options={options}
            /> */}
            <select name="search" id="search">
              <option value="all">All</option>
              <option value="mobile">Mobile</option>
              <option value="laptop">Laptop</option>
              <option value="mobile accessories">Mobile accessories</option>
            </select>
            <input
              type="text"
              placeholder="Search Amazon"
              onClick={() => setClickInput((prev) => !prev)}
            />
            <button>
              <FaSearch className={styles.iconSearch} />
            </button>
          </form>
        </div>
        <div
          className={styles.language}
          onMouseEnter={() => setShowModal(true)}
          onMouseLeave={() => setShowModal(false)}
        >
          <div>
            <img src="./language.avif" alt="language" />
            <span>EN</span>
          </div>
          {showModal && (
            <div className={styles.modalLanguage}>
              <span>
                Change language
                <a href="#"> Learn more</a>
              </span>
              <div className={styles.selectLanguage}>
                <div>
                  <input type="radio" id="en" name="language" />
                  <label htmlFor="en">English - EN</label>
                </div>
                <div>
                  <input type="radio" id="es" name="language" />
                  <label htmlFor="es">español - ES</label>
                </div>
                <div>
                  <input type="radio" id="ar" name="language" />
                  <label htmlFor="ar">العربية - AR</label>
                </div>
                <div>
                  <input type="radio" id="de" name="language" />
                  <label htmlFor="de">Deutsch - DE</label>
                </div>
                <div>
                  <input type="radio" id="he" name="language" />
                  <label htmlFor="he">עברית - HE</label>
                </div>
                <div>
                  <input type="radio" id="ko" name="language" />
                  <label htmlFor="ko">한국어 - KO</label>
                </div>
                <div>
                  <input type="radio" id="pt" name="language" />
                  <label htmlFor="pt">português - PT</label>
                </div>
                <div>
                  <input type="radio" id="zh" name="language" />
                  <label htmlFor="zh">中文 (简体) - ZH</label>
                </div>
              </div>
              <div className={styles.changeCurrency}>
                <p>
                  <span> Change currency</span>
                  <a href="#">Learn more</a>
                </p>
                <p>
                  <span> $ - USD - US Dollar</span>
                  <a href="#">Change</a>
                </p>
              </div>
              <div className={styles.region}>
                <div>
                  <img src="/language.avif" alt="language" />
                  <p>you are shopping on Amazon.com</p>
                </div>
                <a href="#">Change country/region</a>
              </div>
            </div>
          )}
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
          <span>{quantity > 0 && cart.length === 0 ? 0 : quantity}</span>
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
