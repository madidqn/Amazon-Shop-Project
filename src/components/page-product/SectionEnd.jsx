import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { actions } from "../../store/productsSlice";

import styles from "./SectionEnd.module.css";

import { FaMapMarkerAlt } from "react-icons/fa";

function SectionEnd({ id }) {
  const dispatch = useDispatch();

  const [addToCart, setAddToCart] = useState();
  const [showSupport, setShowSupport] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState();

  const { products, cart } = useSelector((state) => state.products);
  const filterProducts = products.filter((product) => product.id === id);

  function fixOptions() {
    let values = [];
    for (let i = 1; i <= 27; i++) {
      values.push({ id: i - 1, value: i, label: `Quantity: ${i}` });
    }
    return values;
  }
  const options = fixOptions();

  useEffect(() => {
    if (cart.find((product) => product.id === id)) {
      setAddToCart(true);
    } else {
      setAddToCart(false);
    }
  }, [cart, addToCart]);

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
          onChange={(e) => setSelectedQuantity(e.target.value)}
          value={selectedQuantity}
        >
          {options.map((option) => (
            <option value={option.value} key={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <button
          onClick={() => dispatch(actions.addToCart(filterProducts[0]?.id))}
        >
          {addToCart ? "Update" : "Add to cart"}
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
