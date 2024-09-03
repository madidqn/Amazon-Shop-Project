import Main from "../components/main";
import { useSelector } from "react-redux";

function Cart() {
  const { cart } = useSelector((state) => state.products);
  return (
    <Main>
      <div>
        {cart.map((product) => (
          <h4 key={product.id}>{product.title}</h4>
        ))}
      </div>
    </Main>
  );
}

export default Cart;
