import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

//component
import Main from "../components/main";

//style
import styles from "./Cart.module.css";

function Cart() {
  const { cart } = useSelector((state) => state.products);
  console.log(cart.length);
  return (
    <Main>
      {cart.length > 0 ? (
        <>
          <div className={styles.cartContainer}>
            <div className={styles.product}>
              <h2>Shopping Basket</h2>
              <span>Deselect all items</span>
              <ul>
                {cart.map((product) => (
                  <li>
                    <img src={product.src} alt={product.alt} />
                    <div>
                      <div className={styles.title}>
                        <p>{product.discription}</p>
                        <h3 key={product.id}>{product.title}</h3>
                      </div>
                      <h3>In Stock</h3>
                      <img src="/prime.avif" alt="prime" />
                      <div className={styles.gift}>
                        <input type="checkbox" />
                        <span>
                          This will be a gift <a href="#">Learn more</a>
                        </span>
                      </div>
                      <p>
                        <span>Style Name: </span>0.5 litre work container
                      </p>
                      <p>
                        <span>Colour Name: </span>white
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <h3>Subtotal (44 item): $481200</h3>
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias ex
              debitis quod dolore, voluptatum doloribus eveniet praesentium sunt
              voluptates impedit. Quisquam eveniet.
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
