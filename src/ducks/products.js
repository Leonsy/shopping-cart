import { createAction, handleAction } from "redux-actions";
import products from "../data/products";

/*********************
 *   INITIAL STATE   *
 *********************/

const initialState = { items: products };

/***************
 *   ACTIONS   *
 ***************/

export const GET_PRODUCTS = "GET_PRODUCTS";

export const getProducts = createAction(GET_PRODUCTS);

/***************
 *   REDUCER   *
 ***************/

export default handleAction(
  getProducts,
  state => ({
    ...state
  }),
  initialState
);
