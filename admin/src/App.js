import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import AddProduct from "./Routes/AddProduct/AddProduct";
import Login from "./Pages/Login/Login";
import ViewProduct from "./Routes/ViewProduct/ViewProduct";
import Product from "./Routes/Product.jsx/Product";
import React, { useEffect } from "react";
import { useState } from "react";

export const UserContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("cred")));
  }, []);

  return (
    <UserContext.Provider value="Reed">
      <div className="App">
        <BrowserRouter>
          {user && <Navbar />}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/view" element={<ViewProduct />} />
            <Route path="/view/:id" element={<Product />} />
            <Route path="/view/:id/:id" element={<AddProduct />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
