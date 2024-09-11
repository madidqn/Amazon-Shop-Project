import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import useProduct from "../../custom-hook/useProduct";

//store
import { actions } from "../../store/productsSlice";

//style
import styles from "./SectionEnd.module.css";

//icon
import { FaMapMarkerAlt } from "react-icons/fa";

function SectionEnd({ id }) {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.products);

  const [addItemCart, setAddItemCart] = useState();
  const [showSupport, setShowSupport] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const btnAdd = useRef();

  const [filterProducts] = useProduct(id);

  function fixOptions() {
    let values = [];
    for (let i = 1; i <= 27; i++) {
      values.push({ id: i - 1, value: i, label: `Quantity: ${i}` });
    }
    return values;
  }
  const options = fixOptions();

  function handlerAddToCart(id) {
    dispatch(actions.addToCart({ id, selectedQuantity }));
  }

  function handlerUpdateProduct(id) {
    dispatch(actions.updateProductQuantity({ id, selectedQuantity }));
  }

  useEffect(() => {
    if (cart.find((product) => product.id === id)) {
      setAddItemCart(true);
    } else {
      setAddItemCart(false);
    }
  }, [cart, addItemCart]);

  return (
    <section>
      <div className={styles.buy}>
        <h5>Buy new :</h5>
        <div className={styles.buyPrice}>
          <span>$</span>
          <span>{filterProducts[0]?.final_price}</span>
          <span>99</span>
        </div>
        <p>$91.31 Shipping & Import Fees</p>
        <p> Deposit to Iran Details Delivery</p>
        <span> Wednesday, May 15</span>
        <div className={styles.deliver}>
          <FaMapMarkerAlt />
          <span>Deliver to Iran</span>
        </div>
        <h4>In Stock</h4>
        <select
          onChange={(e) => {
            if (addItemCart) {
              btnAdd.current.innerHTML = "Update";
              setSelectedQuantity(e.target.value);
            } else {
              setSelectedQuantity(e.target.value);
            }
          }}
          value={selectedQuantity}
        >
          {options.map((option) => (
            <option value={option.value} key={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => {
            if (btnAdd.current.innerHTML === "Add to cart") {
              btnAdd.current.innerHTML = "Remove from cart";
              handlerAddToCart(filterProducts[0]?.id);
            } else if (btnAdd.current.innerHTML === "Update") {
              btnAdd.current.innerHTML = "Remove from cart";
              handlerUpdateProduct(filterProducts[0]?.id);
            } else {
              btnAdd.current.innerHTML = "Add to cart";
              dispatch(actions.deleteProduct(filterProducts[0]?.id));
            }
          }}
          ref={btnAdd}
        >
          {!addItemCart ? "Add to cart" : "Remove from cart"}
        </button>
        <div
          className={`${styles.buyLists} ${
            showSupport ? styles.seeMoreBuy : styles.showLessBuy
          }`}
        >
          <div>
            <span>Ships from</span>
            <span>Amazon.com</span>
          </div>
          <div>
            <span>Sold by</span>
            <span>Amazon.com</span>
          </div>
          <div>
            <span>Returns</span>
            <span className={styles.return}>
              Eligible for Return, Refund or Replacement within 30 days of
              receipt
            </span>
          </div>
          <div>
            <span>Payments</span>
            <span className={styles.return}>Secure transaction</span>
          </div>
          <div>
            <span>Support</span>
            <span className={styles.return}>Product support included</span>
          </div>
        </div>
        <span
          className={styles.seeReturn}
          onClick={() => setShowSupport((state) => !state)}
        >
          {showSupport ? "Show less" : "See more"}
        </span>
      </div>
    </section>
  );
}

export default SectionEnd;
