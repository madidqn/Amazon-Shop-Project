import { useParams } from "react-router-dom";
import useProduct from "./../custom-hook/useProduct";

// component
import Main from "../components/main";
import SectionMid from "../components/page-product/SectionMid";
import SectionEnd from "../components/page-product/SectionEnd";

// style
import styles from "./Product.module.css";

function Product() {
  const { id } = useParams();
  const [filterProducts] = useProduct(id);

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
