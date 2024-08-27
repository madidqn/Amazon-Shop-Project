import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function Product() {
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const filterProducts = products.filter((product) => product.id === id);
  console.log(filterProducts);

  return <div>product{id}</div>;
}

export default Product;
