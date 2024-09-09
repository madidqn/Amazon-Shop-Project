import { useSelector } from "react-redux";

function useProduct(id) {
  const { products } = useSelector((state) => state.products);
  const filterProducts = products.filter((product) => product.id === id);

  return [filterProducts];
}

export default useProduct;
