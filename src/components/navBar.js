import React from "react";
import "../App";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { ShopContext } from "../context/shop-context";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    console.log(isActive);

    setIsActive((prev) => !prev);
  }
  const { getTotalItems } = useContext(ShopContext);
  const totalItems = getTotalItems();
  console.log(totalItems);
  return (
    <section id="navbar">
      <NavLink to="" className="logo">
        {/* <img src="./img/logo.png" alt="logo"></img> */}
      </NavLink>

      <div>
        <ul className={`menu ${isActive ? "active" : ""}`} id="NavLink">
          <li>
            <NavLink to="/" id="home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="./shop.js" id="shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="./Blog.js" id="blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink to="./About.js" id="about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="./contact.js" id="contact">
              Contact
            </NavLink>
          </li>
          <NavLink to="./cart.js" className="cart-bs">
            <i className="fa-solid fa-cart-shopping cart-icon"></i>
          </NavLink>
          {totalItems > 0 ? <p className="totalItems">{totalItems}</p> : ""}
          <i
            className="fa-solid fa-circle-xmark"
            id="close-id"
            onClick={() => toggle()}
          ></i>
        </ul>
      </div>
      <div id="mobile">
        <NavLink to="./cart.js">
          <i className="fa-solid fa-cart-shopping"></i>
        </NavLink>
        <i className="fa-solid fa-bars" id="bar" onClick={() => toggle()}></i>
      </div>
    </section>
  );
}
