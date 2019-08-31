import * as R from "ramda";
import { createActions, handleActions } from "redux-actions";

/*********************
 *   INITIAL STATE   *
 *********************/

const initialState = {
  items: []
};

/***************
 *   ACTIONS   *
 ***************/

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const { addToCart, removeFromCart } = createActions({
  [ADD_TO_CART]: name => ({ name }),
  [REMOVE_FROM_CART]: name => ({ name })
});

/***************
 *   SELECTOR   *
 ***************/
export function getCartList(state) {
  return R.map(item => {
      const product = R.find( R.propEq("name", item.name), state.products.items);
      return {
          ...item,
          unitPrice: product.price,
          totalPrice: product.price * item.amount
      }
  }, state.cart.items);
};

/***************
 *   REDUCER   *
 ***************/

const handleAddProductToCart = (state, { payload: { name } }) => {
  const item = R.find(R.propEq("name", name))(state.items);
  if (item) {
    return {
      items: R.map(
        R.when(R.propEq("name", name), item => ({
          ...item,
          amount: R.inc(item.amount)
        }))
      )(state.items)
    };
  } else {
    return { items: R.append({ name, amount: 1 }, state.items) };
  }
};

const handleRemoveProductFromCart = (state, { payload: { name } }) => {
  const item = R.find(R.propEq("name", name))(state.items);

  if (item.amount === 1) {
    return { items: R.reject(R.propEq("name", name), state.items) };
  } else {
    return {
      items: R.map(
        R.when(R.propEq("name", name), item => ({
          ...item,
          amount: R.dec(item.amount)
        }))
      )(state.items)
    };
  }
};

export default handleActions(
  {
    [addToCart]: handleAddProductToCart,
    [removeFromCart]: handleRemoveProductFromCart
  },
  initialState
);
