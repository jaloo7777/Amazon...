import React from "react";
import "./Product.scss";
import { useStateValue } from "../reducer/StateProvider";
function Product({ id, image, price, rating, title }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
    console.log(basket);
  };
  return (
    <section className="product">
      <h1 className="product__title">{title} </h1>
      <span className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </span>
      <div className="product__rating">
        {Array.from({ length: rating }, (v, i) => (
          <p key={i}>🌟</p>
        ))}
      </div>
      <img src={image} />
      <button onClick={addToBasket}>Add To Basket</button>
    </section>
  );
}

export default Product;
