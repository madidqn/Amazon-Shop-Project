import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id?" element={<Product />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* mahsol taki */}
      {/* sabad kharid */}
      {/* sign in??? */}
      <Footer />
    </>
  );
}

export default App;
