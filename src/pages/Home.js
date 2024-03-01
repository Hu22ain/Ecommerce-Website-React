import React from "react";
// import '../App.css'
// import Navbar from '../components/navBar';
import Hero from "../components/hero";
import Feature from "../components/features";
import Product from "../components/products";
import Banner1 from "../components/banner1";
import Banner2 from "../components/banner2";
import Banner3 from "../components/banner3";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
// Data Api
import Products from "../productsdata";
import FeaturesData from "../featuresdata";
import NewArrival from "../Arrivaldata";

function Home() {
  const products = Products.map((item) => {
    return <Product key={item.id} {...item} />;
  });
  const features = FeaturesData.map((item) => {
    return <Feature key={item.key} {...item} />;
  });
  const newArrival = NewArrival.map((item) => {
    return <Product key={item.id} {...item} />;
  });
  return (
    <div>
      <Hero />
      <div id="features">{features}</div>
      <div className="pro">
        <h1>Featured Products</h1>
        <p> Summer Collection New Modern Design</p>
        <div id="featured-products">{products}</div>
      </div>
      <Banner1 />
      <div className="pro">
        <h1>New Arrivals</h1>
        <p> Summer Collection New Modern Design</p>
        <div id="featured-products">{newArrival}</div>
      </div>
      <Banner2 />
      <Banner3 />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Home;
