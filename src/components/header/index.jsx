import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import Select from "react-select";

// redux
import { actionsModals } from "../../store/modalsSlice";

//components
import Language from "../modals/Language";
import Account from "../modals/Account";
import BurgerMenu from "../burger-menu";

//style
import styles from "./style.module.css";

//icons
import { FaMapMarkerAlt, FaSearch, FaBars } from "react-icons/fa";

function Header() {
  const { cart } = useSelector((state) => state.products);

  const { inputSearchClick, showModalLanguage, showModalAccount, burgerMenu } =
    useSelector((state) => state.modals);

  const dispatch = useDispatch();

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
    dispatch(actionsModals.handlerInput(true));
  }

  useEffect(() => {
    document.body.addEventListener("click", () => {
      dispatch(actionsModals.handlerInput(false));
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
          onMouseEnter={() =>
            dispatch(actionsModals.handlerShowModalLanguage(true))
          }
          onMouseLeave={() =>
            dispatch(actionsModals.handlerShowModalLanguage(false))
          }
        >
          <div>
            <img src="./language.avif" alt="language" />
            <span>EN</span>
          </div>
          {showModalLanguage && <Language />}
        </div>
        <div
          className={styles.signIn}
          onMouseEnter={() =>
            dispatch(actionsModals.handlerShowModalAccount(true))
          }
          onMouseLeave={() =>
            dispatch(actionsModals.handlerShowModalAccount(false))
          }
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
          <li onClick={() => dispatch(actionsModals.handlerBurgerMenu(true))}>
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
