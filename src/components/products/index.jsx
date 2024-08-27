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
        ))}
      </div>
    </div>
  );
}

export default Products;
