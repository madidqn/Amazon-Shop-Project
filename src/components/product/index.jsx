import styles from "./style.module.css";

function Product({ product }) {
  return (
    <div className={styles.product}>
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
  );
}

export default Product;
