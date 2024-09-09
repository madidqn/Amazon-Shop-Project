import useData from "../../custom-hook/useData";

//component
import Product from "../product/index";

//style
import styles from "./style.module.css";

function Products() {
  const [products] = useData();

  return (
    <div className={styles.products}>
      <p>
        You are on amazon.com. You can also shop on Amazon Iran for millions of
        products with fast local delivery. Click here to go to amazon.de
      </p>
      <div>
        {products.map((product, index) => (
          <Product key={product?.id} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Products;
