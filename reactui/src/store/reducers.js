import { cloneDeep } from "lodash";
import {
  SET_USER_IS_AUTHENTICATED,
  SET_PRODUCTS,
  SET_ALL_PRODUCTS,
  RESET_PRODUCTS,
  UPDATE_CART,
} from "./actions";

const initialState = {
  products: [],
  allProducts: [],
};

function appReducer(oldState = initialState, action) {
  let state = cloneDeep(oldState);
  switch (action.type) {
    case SET_USER_IS_AUTHENTICATED:
      state.isAuthenticated = action.isAuthenticated;
      break;
    case SET_PRODUCTS:
      state.products = action.products;
      break;
    case SET_ALL_PRODUCTS:
      state.allProducts = action.products;
      break;
    case RESET_PRODUCTS:
      state.products = oldState.allProducts;
      break;
    case UPDATE_CART:
      state.cart = action.cart;
      break;
    default:
      return state;
  }
  return state;
}

// const appReducer = combineReducers({ country, countries, language, languages });

export default appReducer;
