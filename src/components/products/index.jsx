import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//component
import Product from "../product";
import { getProducts } from "../../store/productsSlice";

//style
import styles from "./style.module.css";

function Products() {
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
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
