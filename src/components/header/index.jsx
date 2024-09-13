import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import Select from "react-select";
//style
import styles from "./style.module.css";

//icons
import { FaMapMarkerAlt, FaSearch, FaBars } from "react-icons/fa";
import { CgChevronRight } from "react-icons/cg";
import { actions } from "../../store/productsSlice";

function Header() {
  const { cart, inputSearchClick } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  const [showModalLanguage, setshowModalLanguage] = useState(false);
  const [showModalAccount, setshowModalAccount] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);

  // const [showMenuMusic, setShowMenuMusic] = useState(false);
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

  function clickInputBorder(e) {
    e.stopPropagation();
    dispatch(actions.handlerInput(true));
  }

  function handlerModalOpen(state) {
    state(true);
    dispatch(actions.handlerShowModal(true));
  }

  function handlerModalClose(state) {
    state(false);
    dispatch(actions.handlerShowModal(false));
  }

  useEffect(() => {
    document.body.addEventListener("click", () => {
      dispatch(actions.handlerInput(false));
    });
    if (inputSearchClick) {
      form.current.style.outline = "3px solid #feba73";
    } else {
      form.current.style.outline = "none";
    }
  }, [inputSearchClick]);

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
              onClick={(e) => clickInputBorder(e)}
            />
            <button>
              <FaSearch className={styles.iconSearch} />
            </button>
          </form>
        </div>
        <div
          className={styles.language}
          onMouseEnter={() => handlerModalOpen(setshowModalLanguage)}
          onMouseLeave={() => handlerModalClose(setshowModalLanguage)}
        >
          <div>
            <img src="./language.avif" alt="language" />
            <span>EN</span>
          </div>
          {showModalLanguage && (
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
        <div
          className={styles.signIn}
          onMouseEnter={() => handlerModalOpen(setshowModalAccount)}
          onMouseLeave={() => handlerModalClose(setshowModalAccount)}
        >
          <div>
            <span>Hello, sign in</span>
            <span>Account & Lists</span>
          </div>
          {showModalAccount && (
            <div className={styles.modalSignIn}>
              <div>
                <button>Sign in</button>
                <p>
                  New customer? <a href="#">Start here.</a>
                </p>
              </div>
              <div>
                <ul>
                  <li>Your Lists</li>
                  <li>Create a List</li>
                  <li>Find a List or Registry</li>
                </ul>
                <ul>
                  <li> Your Account</li>
                  <li>Account</li>
                  <li>Orders</li>
                  <li>Recommendations</li>
                  <li>Browsing</li>
                  <li>History</li>
                  <li>Watchlist</li>
                  <li>Video</li>
                  <li>Purchases & Rentals</li>
                  <li>Kindle Unlimited</li>
                  <li>Subscribe & Save Items</li>
                  <li>Memberships & Subscriptions</li>
                  <li>Music Library</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className={styles.return}>
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
          <li onClick={() => setBurgerMenu(true)}>
            <FaBars className={styles.burgerIcon} />
            <span>All</span>
          </li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Registry</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
        {
          burgerMenu && (
            <div className={styles.container}>
              <div onClick={() => setBurgerMenu(false)}></div>
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
          )
          //   <div className={styles.menuMusic}>
          //     <div onClick={setBurgerMenu(true)}>
          //       <CgChevronRight />
          //       <span>Main Menu</span>
          //     </div>
          //     <ul>
          //       <li>Stream Music</li>
          //       <li>Amazon Music Unlimited</li>
          //       <li>Free Streaming Music</li>
          //       <li>Podcasts</li>
          //       <li>Open Web Player</li>
          //       <li>Download the app</li>
          //     </ul>
          //   </div>
          // )
        }
      </nav>
    </header>
  );
}

export default Header;
