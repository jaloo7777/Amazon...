import React from "react";
import "./Subtotal.scss";
import { useStateValue } from "../reducer/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getBasket } from "../reducer/reducer";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          console.log(basket);
          return (
            <>
              <h1>
                {" "}
                subtotal ({basket.length} item) :<span>{value}</span>{" "}
              </h1>
              <p>
                <input type="checkbox" /> This order contains a gift
              </p>
              <button>Proceed to checkout</button>
            </>
          );
        }}
        value={getBasket(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;

{
  /* <CurrencyFormat
  value={2456981}
  displayType={"text"}
  thousandSeparator={true}
  prefix={"$"}
  renderText={(value) => <div>{value}</div>}
/>; */
}
