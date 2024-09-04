import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//component
import Main from "../components/main";

//style
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useSelector((state) => state.products);
  return (
    <Main>
      <div className={styles.cartContainer}>
        {cart.lenght > 0 ? (
          cart.map((product) => <h4 key={product.id}>{product.title}</h4>)
        ) : (
          <>
            <h1>Your Amazon Basket is empty.</h1>
            <div className={styles.checkProducts}>
              <p>Check products page for shopping.</p>
              <Link to={"/"} className={styles.goToHome}>
                continue shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </Main>
  );
}

export default Cart;
