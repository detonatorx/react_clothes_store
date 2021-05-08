import { addItemToCart, removeItemFromCart } from './cart.utils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_CART_HIDDEN':
      return {
        ...state,
        hidden: !state.hidden,
      };

    case 'ADD_ITEM':
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };

    case 'CLEAR_ITEM':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id
        ),
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

const addItemAC = payload => ({ type: 'ADD_ITEM', payload });
const clearItemAC = payload => ({ type: 'CLEAR_ITEM', payload });
const removeItemAC = payload => ({ type: 'REMOVE_ITEM', payload });

export { cartReducer, addItemAC, clearItemAC, removeItemAC };
