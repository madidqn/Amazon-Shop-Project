import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// component
import Main from "../components/main";
import SectionMid from "../components/page-product/SectionMid";
import SectionEnd from "../components/page-product/SectionEnd";

// style
import styles from "./Product.module.css";

function Product() {
  const { id } = useParams();

  const { products } = useSelector((state) => state.products);
  const filterProducts = products.filter((product) => product.id === id);

  return (
    <Main>
      <div className={styles.product}>
        <img src="/car.avif" alt="car" />
        <div>
          <section>
            <img src={filterProducts[0]?.src} alt={filterProducts[0]?.alt} />
          </section>
          <SectionMid id={id} />
          <SectionEnd id={id} />
        </div>
      </div>
    </Main>
  );
}

export default Product;
