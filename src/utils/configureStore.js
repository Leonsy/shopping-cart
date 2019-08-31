import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import productsReducer from "../ducks/products";
import cartReducer from "../ducks/cart";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});

const persistConfig = {
  key: "root",
  storage: storage,
  stateReconciler: autoMergeLevel2,
  blacklist: ["products"]
};

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  pReducer
);
export const persistor = persistStore(store);
