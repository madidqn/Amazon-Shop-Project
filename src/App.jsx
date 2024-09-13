import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* sign in??? */}
      <Footer />
    </>
  );
}

export default App;
