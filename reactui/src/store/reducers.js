import { cloneDeep } from "lodash";
import { SET_PRODUCTS } from "./actions";

const initialState = {
  products: [],
};

function appReducer(oldState = initialState, action) {
  let state = cloneDeep(oldState);
  switch (action.type) {
    case SET_PRODUCTS:
      state.products = action.products;
      break;
    default:
      return state;
  }
  return state;
}

// const appReducer = combineReducers({ country, countries, language, languages });

export default appReducer;
