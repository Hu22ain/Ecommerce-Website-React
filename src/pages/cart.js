import React from "react";
import Banner from "../components/Banner";
import BannerData from "../BannerData";
import productsdata from "../productsdata";
import { ShopContext } from "../context/shop-context";
import { useContext } from "react";
import CartItem from "../components/cartItem";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { CartItems, getTotalAmount } = useContext(ShopContext);
  const amount = getTotalAmount();
  const Navigate = useNavigate();
  return (
    <>
      <Banner
        key={BannerData[4].key}
        id={BannerData[4].id}
        title={BannerData[4].title}
        subtitle={BannerData[4].subTitle}
      />
      <div>
        <table>
          <thead>
            <tr className="head-row">
              <td>Remove</td>
              <td>Image</td>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
            </tr>
          </thead>
          <tbody>
            {productsdata.map((item) => {
              if (CartItems[item.id] !== 0) {
                return <CartItem data={item} />;
              }
            })}
          </tbody>
        </table>
      </div>
      {amount > 0 ? (
        <div className="superTotal">
          <div className="Total">
            <h4>Total: {amount}$</h4>
            <button onClick={() => Navigate("/shop.js")}>
              Continue Shopping
            </button>
            <button>CheckOut</button>
          </div>
          <div className="coupons">
            <h4>
              Enter Your <span>Coupon</span> Code Here
            </h4>
            <form action="|">
              <input type="text"></input>
              <button onClick={() => Navigate("/meme.js")}>Submit</button>
            </form>
          </div>
        </div>
      ) : (
        <h2 className="empty">Your Cart is empty</h2>
      )}
    </>
  );
}
