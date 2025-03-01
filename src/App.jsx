import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-zinc-900 flex flex-col w-full h-screen overflow-hidden text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </div>
  );
};

export default App;
