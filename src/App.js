import React from "react";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/contact";
import Shop from "./pages/shop";
import About from "./pages/About";
import Meme from "./pages/meme";
import Cart from "./pages/cart";
// import ProductsDetail from "./pages/productDetails";
import ShopContextProvider from "./context/shop-context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Navbar from "./components/navBar";
import ProductsDetail from "./pages/productDetails";

export default function App() {
  return (
    <>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop.js" element={<Shop />} />
            <Route path="/About.js" element={<About />} />
            <Route path="/contact.js" element={<Contact />} />
            <Route path="/Blog.js" element={<Blog />} />
            <Route path="/cart.js" element={<Cart />} />
            <Route path="/meme.js" element={<Meme />} />
            {/* < Route path="/productDetails.js" element={<ProductsDetail/>}/> */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </>
  );
}
