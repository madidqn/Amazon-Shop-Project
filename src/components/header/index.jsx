import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import Select from "react-select";

//components
import Language from "../modals/Language";

//style
import styles from "./style.module.css";

//icons
import { FaMapMarkerAlt, FaSearch, FaBars } from "react-icons/fa";

import { actions } from "../../store/productsSlice";
import Account from "../modals/Account";
import BurgerMenu from "../burger-menu";

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
          {showModalLanguage && <Language />}
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
          {showModalAccount && <Account />}
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
          burgerMenu && <BurgerMenu />
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
