import Products from "../components/products";
import Slider from "../components/slider";
import Main from "./../components/main";

function Home() {
  return (
    <>
      <Main>
        <Slider />
        <Products />
      </Main>
    </>
  );
}

export default Home;
