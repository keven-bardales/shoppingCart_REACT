import { useReducer } from 'react';
import {
  cartInitialState,
  WITHOUT_SWITCH_CART_REDUCER,
} from '../reducers/cartReducer';
import { CART_ACTIONS_TYPES } from '../reducers/cartReducer';

export function useCartReducer() {
  const [state, dispatch] = useReducer(
    WITHOUT_SWITCH_CART_REDUCER,
    cartInitialState
  );

  const addToCart = (product) =>
    dispatch({
      type: CART_ACTIONS_TYPES.ADD_TO_CART,
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: CART_ACTIONS_TYPES.REMOVE_FROM_CART,
      payload: product,
    });

  const clearCart = () =>
    dispatch({
      type: CART_ACTIONS_TYPES.CLEAR_CART,
    });

  return { addToCart, removeFromCart, clearCart, state };
}
