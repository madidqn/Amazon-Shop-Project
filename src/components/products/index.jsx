import styles from "./style.module.css";

function Products() {
  return (
    <div className={styles.products}>
      <p>
        You are on amazon.com. You can also shop on Amazon Iran for millions of
        products with fast local delivery. Click here to go to amazon.de
      </p>
      <div>
        <div className={styles.product}>
          <img src="./backpack.jpg" alt="backpack" />
          <h2>Backpack</h2>
          <div className={styles.price}>
            <span>$</span>
            <span>99000</span>
            <span>99</span>
          </div>
          <span className={styles.discount}>$1200</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a
            aperiam quo unde aspernatur culpa nobis eaque sit ...
          </p>
          <div className={styles.stars}>
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <span>1,752</span>
          </div>
          <a href="#">see more...</a>
        </div>
        <div className={styles.product}>
          <img src="./headset.jpg" alt="headset" />
          <h2>Headset</h2>
          <div className={styles.price}>
            <span>$</span>
            <span>99000</span>
            <span>99</span>
          </div>
          <span className={styles.discount}>$1200</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a
            aperiam quo unde aspernatur culpa nobis eaque sit ...
          </p>
          <div className={styles.stars}>
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <span>1,752</span>
          </div>
          <a href="#">see more...</a>
        </div>
        <div className={styles.product}>
          <img src="./ski.png" />
          <h2>Ski Stick</h2>
          <div className={styles.price}>
            <span>$</span>
            <span>99000</span>
            <span>99</span>
          </div>
          <span className={styles.discount}>$1200</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a
            aperiam quo unde aspernatur culpa nobis eaque sit ...
          </p>
          <div className={styles.stars}>
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <span>1,752</span>
          </div>
          <a href="#">see more...</a>
        </div>
        <div className={styles.product}>
          <img src="./laptop.avif" />
          <h2>Laptop</h2>
          <div className={styles.price}>
            <span>$</span>
            <span>99000</span>
            <span>99</span>
          </div>
          <span className={styles.discount}>$1200</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a
            aperiam quo unde aspernatur culpa nobis eaque sit ...
          </p>
          <div className={styles.stars}>
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <span>1,752</span>
          </div>
          <a href="#">see more...</a>
        </div>
        <div className={styles.product}>
          <img src="./mobile.avif" />
          <h2>Mobile</h2>
          <div className={styles.price}>
            <span>$</span>
            <span>99000</span>
            <span>99</span>
          </div>
          <span className={styles.discount}>$1200</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a
            aperiam quo unde aspernatur culpa nobis eaque sit ...
          </p>
          <div className={styles.stars}>
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <span>1,752</span>
          </div>
          <a href="#">see more...</a>
        </div>
        <div className={styles.product}>
          <img src="./shirt.webp" />
          <h2>Shirt</h2>
          <div className={styles.price}>
            <span>$</span>
            <span>99000</span>
            <span>99</span>
          </div>
          <span className={styles.discount}>$1200</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident a
            aperiam quo unde aspernatur culpa nobis eaque sit ...
          </p>
          <div className={styles.stars}>
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <img src="./star.avif" alt="" />
            <span>1,752</span>
          </div>
          <a href="#">see more...</a>
        </div>
      </div>
    </div>
  );
}

export default Products;
