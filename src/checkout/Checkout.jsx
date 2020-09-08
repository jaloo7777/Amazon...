import React from "react";
import { useStateValue } from "../reducer/StateProvider";
import img from "./great-indian-festival-sale-add-money-offer.png";
import "./Checkout.scss";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
function Checkout({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <section className="checkout">
      <div className="checkout__bannar">
        <img src={img} />

        {basket.length === 0 ? (
          <div>
            {" "}
            <h1 className="checkout__nothing">
              You have nothing in the basket
            </h1>{" "}
          </div>
        ) : (
          <div>
            <h1 className="checkout__nothing"> Your Shopping Basket </h1>
            {basket.map((b) => {
              return (
                <CheckoutProduct
                  id={b.id}
                  title={b.title}
                  price={b.price}
                  image={b.image}
                  rating={b.rating}
                />
              );
            })}
          </div>
        )}
      </div>
      {basket.length > 0 && <Subtotal />}
    </section>
  );
}

export default Checkout;
