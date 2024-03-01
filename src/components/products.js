import React from "react";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import productsdata from "../productsdata";

export default function Product(props) {
  const { CartItems, addToCart, removeFromCart } = useContext(ShopContext);
  const Navigate = useNavigate();
  const totalAmount = CartItems[props.id];

  for (let i = 0; productsdata[i].id <= 12; i++) {
    return (
      <div className="products">
        <div className="product">
          <img src={props.image} alt="T-shirt"></img>
          <div className="text">
            <span>
              <i class="fa-solid fa-star"></i>
              {props.rating.rate}({props.rating.count})
            </span>

            <h4 className="title"> {props.title}</h4>
            <h4 className="cost">{props.price}$</h4>
          </div>

          <button className="cart" onClick={() => addToCart(props.id)}>
            {totalAmount > 0 ? (
              <h3>{totalAmount}</h3>
            ) : (
              <i class="fa-solid fa-cart-shopping "></i>
            )}
          </button>
          {totalAmount > 0 ? (
            <button
              className="decrease"
              onClick={() => removeFromCart(props.id)}
            >
              -
            </button>
          ) : (
            " "
          )}
          <button className="cart  detail" onClick={() => Navigate("/meme.js")}>
            <i class="fa-solid fa-info"></i>
          </button>
        </div>
      </div>
    );
  }
}
