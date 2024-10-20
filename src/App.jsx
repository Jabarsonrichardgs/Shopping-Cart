import { createContext, useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const cartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);

  return (
    <cartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <Header cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/view-cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </cartContext.Provider>
  );
}

export default App;
