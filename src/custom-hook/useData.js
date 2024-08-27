import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../store/productsSlice";

function useData() {
  const { products } = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return { products };
}
export default useData;
