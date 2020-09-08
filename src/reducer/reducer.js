import ring from "../home/planche.jpg";

export const initState = {
  basket: [
    {
      id: "1234567",
      title:
        "Fangle Door Bar Chinup Height Increase Strength Developer PullupBars Pull-up Bar ",
      price: 55,
      rating: 4,
      image: ring,
    },
  ],
  user: null,
};

export const getBasket = (basket) =>
  basket.reduce((amount, item) => {
    console.log(amount);
    console.log(item);
    return item.price + amount.price;
  }, 0);

// console.log(getBasket);
const reducer = (state, action) => {
  console.log(initState);
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      //   let newarray = [...state.basket];
      //   let index = newarray.indexOf(action.id);
      //   if (index !== -1) {
      //     newarray.splice(index, 1);
      //   }
      //   console.log(action.id);
      let newBasket = state.basket.filter((item) => item.id !== action.id);
      return {
        basket: newBasket,
      };
      return {
        ...state,
        basket: newBasket,
      };
  }
};
export default reducer;
