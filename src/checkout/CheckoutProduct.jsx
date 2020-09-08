import React from "react";
import { useStateValue } from "../reducer/StateProvider";
import "./CheckoutProduct.scss";
function CheckoutProduct({ id, price, title, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} />
      <div className="checkoutProduct__item">
        <h2> {title} </h2>
        <span>${price} </span>
        <span className="checkoutProduct__stars">
          {Array.from({ length: rating }, (v, i) => (
            <p key={i}>🌟</p>
          ))}
        </span>
        <button onClick={removeFromBasket}> Remove from basket </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
