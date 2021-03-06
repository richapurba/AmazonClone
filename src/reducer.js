export const initialState = {
  basket: [],
  user: null
};

//pk_test_51IBkYpJLYiXcTDTowhJ8rao2IvhWcYgfMR65s6ayFjUaKcy368jW5fgnIMkcDI9nj1r0uJXVeurucmLFx84ojRyG00m2jKiVuj

//Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch(action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];
      if(index >= 0) {
        newBasket.splice(index, 1);
      }
      else {
		  // eslint-disable-next-line
        console.warn("Can't remove product (id: ${action.id}) as its not in basket!")
      }
      return {
        ...state,
        basket: newBasket
      }

    case "SET_USER":
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

export default reducer;