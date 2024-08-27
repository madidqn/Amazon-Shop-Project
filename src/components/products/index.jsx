import styles from "./style.module.css";
import { useState, useEffect } from "react";
import Product from "../product";

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
          <Product product={product} key={product.id} />
          // <div className={styles.product} key={product.id}>
          //   <img src={product.src} alt={product.alt} />
          //   <h2>{product.title}</h2>
          //   <div className={styles.finalPrice}>
          //     <span>$</span>
          //     <span>{product.final_price}</span>
          //     <span>99</span>
          //   </div>
          //   <span className={styles.price}>${product.price}</span>
          //   <p>{product.discription}</p>
          //   <div className={styles.stars}>
          //     {product.rating.map((element, index) => (
          //       <img src={element} alt="star" key={index} />
          //     ))}
          //     <span>{product.voted_number}</span>
          //   </div>
          //   <a href="#">see more...</a>
          // </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
