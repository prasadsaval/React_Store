import Header from "./components/Header/Header";
import ProductDetail from "./components/Product/ProductDetail";
import Store from "./pages/Store";

import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Search from "./components/Search/Search";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route exact path="/" element={<Store />}></Route>

        <Route path="/cart" element={<Cart />}></Route>

        <Route path="/wishlist" element={<Wishlist />}></Route>

        <Route path="/product/:productId" element={<ProductDetail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
