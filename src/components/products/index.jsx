// import { useData } from "./../../custom-hook/useData.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../../store/productsSlice";

//component
import Product from "../product";

//style
import styles from "./style.module.css";

function Products() {
  // const [products] = useData();
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className={styles.products}>
      <p>
        You are on amazon.com. You can also shop on Amazon Iran for millions of
        products with fast local delivery. Click here to go to amazon.de
      </p>
      <div>
        {products.map((product, index) => (
          <Product key={product.id} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Products;
