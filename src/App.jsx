import { Routes, Route } from "react-router-dom";

// components
import Header from "./components/header";
import Home from "./pages/Home";
import Footer from "./components/footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
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
