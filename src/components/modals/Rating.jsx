import useProduct from "../../custom-hook/useProduct";

import styles from "./Rating.module.css";

function Rating({ id }) {
  const [filterProducts] = useProduct(id);
  return (
    <div className={styles.modalStars}>
      <div>
        {filterProducts[0].rating.map((element, index) => (
          <img src={element} alt="star" key={index} />
        ))}
        <span>4.3 out of 5</span>
      </div>
      <p>{filterProducts[0].voted_number} global ratings</p>
      <ul>
        <li>
          <a href="#">4 star</a>
          <div>
            <span></span>
          </div>
          <a href="#">68%</a>
        </li>
        <li>
          <a href="#">4 star</a>
          <div>
            <span></span>
          </div>
          <a href="#">24%</a>
        </li>
        <li>
          <a href="#">3 star</a>
          <div>
            <span></span>
          </div>
          <a href="#">17%</a>
        </li>
        <li>
          <a href="#">2 star</a>
          <div>
            <span></span>
          </div>
          <a href="#">7%</a>
        </li>
        <li>
          <a href="#">2 star</a>
          <div>
            <span></span>
          </div>
          <a href="#">11%</a>
        </li>
        <li>
          <a href="#">1 star</a>
          <div>
            <span></span>
          </div>
          <a href="#">2%</a>
        </li>
      </ul>
    </div>
  );
}

export default Rating;
