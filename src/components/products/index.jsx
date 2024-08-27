import styles from "./style.module.css";
import { useState, useEffect } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  async function getData() {
    const res = await fetch("http://localhost:3000/products");
    const data = await res.json();
    setProducts(data);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className={styles.products}>
      <p>
        You are on amazon.com. You can also shop on Amazon Iran for millions of
        products with fast local delivery. Click here to go to amazon.de
      </p>
      <div>
        {products.map((product) => (
          <div className={styles.product} key={product.id}>
            <img src={product.src} alt={product.alt} />
            <h2>{product.title}</h2>
            <div className={styles.finalPrice}>
              <span>$</span>
              <span>{product.final_price}</span>
              <span>99</span>
            </div>
            <span className={styles.price}>${product.price}</span>
            <p>{product.discription}</p>
            <div className={styles.stars}>
              {product.rating.map((element, index) => (
                <img src={element} alt="star" key={index} />
              ))}
              <span>{product.voted_number}</span>
            </div>
            <a href="#">see more...</a>
          </div>
        ))}
        {/* <div className={styles.product}>
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
          <a href="#">see more...</a> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Products;
