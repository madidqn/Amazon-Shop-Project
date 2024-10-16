import { useSelector } from "react-redux";

function useTotal() {
  const { cart } = useSelector((state) => state.products);

  const numberOfProducts = () => {
    return cart.reduce((initValue, curElem) => initValue + curElem.quantity, 0);
  };
  const quantity = numberOfProducts();

  const totalCost = () => {
    return cart.reduce(
      (initValue, curElem) =>
        initValue + curElem.quantity * curElem.final_price,
      0
    );
  };
  const subtotal = totalCost();

  return [quantity, subtotal];
}

export default useTotal;
