import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import ProductsList from "./Pages/ProductsList/ProductsList";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/groceries" element={<ProductsList />} />
        <Route path="/groceries/:id" element={<SingleProduct />} />
        <Route path="/fruitsandvegetables" element={<ProductsList />} />
        <Route path="/utensils" element={<ProductsList />} />
        <Route path="/utensils/:id" element={<SingleProduct />} />
        <Route path="/fruitsandvegetables/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
