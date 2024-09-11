import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actions } from "./../store/productsSlice";

//component
import Main from "../components/main";
import Product from "../components/cart";

//style
import styles from "./Cart.module.css";

function Cart() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.products);

  const numberOfProducts = () => {
    return cart.reduce((initValue, curElem) => initValue + curElem.quantity, 0);
  };
  const quantity = numberOfProducts();

  const totolCost = () => {
    return cart.reduce(
      (initValue, curElem) =>
        initValue + curElem.quantity * curElem.final_price,
      0
    );
  };
  const subtotal = totolCost();

  return (
    <Main>
      {cart.length > 0 ? (
        <>
          <div className={styles.cartContainer}>
            <div className={styles.containerProduct}>
              <h2>Shopping Basket</h2>
              <span onClick={() => dispatch(actions.deleteProductsFromCart())}>
                Deselect all items
              </span>
              <ul>
                {cart.map((product) => (
                  <Product product={product} />
                ))}
              </ul>
              <h3>
                Subtotal ({quantity} item):
                <span>${subtotal}</span>
              </h3>
            </div>
            <div className={styles.totol}>
              <p> Subtotal ({quantity} item):</p>
              <h3>${subtotal}</h3>
              <div className={styles.gift}>
                <input type="checkbox" />
                <span>
                  This will be a gift <a href="#">Learn more</a>
                </span>
              </div>
              <button>Proceed to Checkout</button>
              <Link to={"/"} className={styles.continue}>
                Continue shopping
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className={styles.cartContainerEmpty}>
          <h1>Your Amazon Basket is empty.</h1>
          <div className={styles.checkProducts}>
            <p>Check products page for shopping.</p>
            <Link to={"/"} className={styles.goToHome}>
              continue shopping
            </Link>
          </div>
        </div>
      )}
    </Main>
  );
}

export default Cart;
