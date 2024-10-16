import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
//custom hook
import useSelect from "./../../custom-hook/useSelect";
// store
import { actions } from "./../../store/productsSlice";
//style
import styles from "./style.module.css";

function Product({ product }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const elemDelete = useRef();

  const dispatch = useDispatch();

  const [options] = useSelect();

  function handlerOnChange(e) {
    elemDelete.current.innerHTML = "Update";
    setSelectedQuantity(e.target.value);
  }
  function handlerClickBtn() {
    if (elemDelete.current.innerHTML === "Update") {
      elemDelete.current.innerHTML = "Delete";
      dispatch(
        actions.updateProductQuantity({
          id: product.id,
          selectedQuantity: selectedQuantity,
        })
      );
    } else {
      dispatch(actions.deleteProduct(product.id));
    }
  }
  return (
    <div>
      <li key={product.id} className={styles.product}>
        <img src={product.src} alt={product.alt} />
        <div>
          <div className={styles.discription}>
            <p>{product.discription}</p>
            <h3 key={product.id}>${product.final_price}</h3>
          </div>
          <h3>In Stock</h3>
          <img src="/prime.avif" alt="prime" />
          <div className={styles.gift}>
            <input type="checkbox" />
            <span>
              This will be a gift <a href="#">Learn more</a>
            </span>
          </div>
          <p>
            <span>Style Name: </span>0.5 litre work container
          </p>
          <p>
            <span>Colour Name: </span>white
          </p>
          <div className={styles.actions}>
            <select
              onChange={(e) => handlerOnChange(e)}
              value={selectedQuantity}
            >
              {options.map((option) => (
                <option value={option.value} key={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <p
              onClick={() => handlerClickBtn()}
              ref={elemDelete}
              name="quantity"
              className={styles.delete}
            >
              Delete
            </p>
            <p> Save for later </p>
            <p> See more like this </p>
            <p> Share</p>
          </div>
        </div>
      </li>
    </div>
  );
}

export default Product;
