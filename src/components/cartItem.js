import React from "react";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";

export default function CartItem(props) {
  const {
    CartItems,
    removeFromCart,
    addToCart,
    updateCartItem,
    getTotalAmount,
    getProductTotal,
    remove,
  } = useContext(ShopContext);
  const { id, image, title, price } = props.data;

  const totalAmount = CartItems[id];
  const productTotal = getProductTotal(id);

  return (
    <>
      <tr>
        <td>
          <i class="fa-solid fa-trash-can" onClick={() => remove(id)}></i>
        </td>
        <td>
          <img src={image}></img>
        </td>
        <td>
          <p className="productTitle">{title}</p>
        </td>
        <td>
          <p>{price}$</p>
        </td>
        <td className="quantity">
          <button className="btnDec" onClick={() => removeFromCart(id)}>
            -
          </button>
          <input
            value={totalAmount}
            onChange={(e) => updateCartItem(e.target.value, id)}
          ></input>
          <button className="btnInc" onClick={() => addToCart(id)}>
            +
          </button>
        </td>
        <td>${productTotal}</td>
      </tr>
    </>
  );
}
