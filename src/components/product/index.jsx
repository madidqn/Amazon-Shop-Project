import { Link } from "react-router-dom";
import useData from "../../custom-hook/useData";

//style
import styles from "./style.module.css";

function Product({ index }) {
  const [products] = useData();

  return (
    <Link className={styles.product} to={`/product/${products[index]?.id}`}>
      <img src={products[index]?.src} alt={products[index]?.alt} />
      <h2>{products[index]?.title}</h2>
      <div className={styles.finalPrice}>
        <span>$</span>
        <span>{products[index]?.final_price}</span>
        <span>99</span>
      </div>
      <span className={styles.price}>${products[index]?.price}</span>
      <p className={styles.discription}>{products[index]?.discription}</p>
      <div className={styles.stars}>
        {products[index]?.rating.map((element, index) => (
          <img src={element} alt="star" key={index} />
        ))}
        <span>{products[index]?.voted_number}</span>
      </div>
      <p href="#" className={styles.seeMore}>
        see more...
      </p>
    </Link>
  );
}

export default Product;
