import axios from "axios";

/* Action Types */
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const RESET_PRODUCTS = "RESET_PRODUCTS";

export function setProducts(data) {
  console.log("actions.setProducts");
  return {
    type: SET_PRODUCTS,
    products: data ? data : [],
  };
}

export function setAllProducts(data) {
  return {
    type: SET_ALL_PRODUCTS,
    products: data ? data : [],
  };
}

export function resetProducts(data) {
  return {
    type: RESET_PRODUCTS,
  };
}

export function fetchProducts() {
  return function (dispatch) {
    console.log("fetchProducts");
    return axios
      .get(`${process.env.REACT_APP_API_URL_PRODUCTS}/products`)
      .then((response) => {
        console.log("after axios", response.data);
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
        console.error("Error getting products:", error);
      });
  };
}

// export function searchProducts() {
//   return function (dispatch) {
//     console.log("searchProducts");
//     return axios
//       .get(`${process.env.REACT_APP_API_URL_SEARCH}/search`, {params:{q:}})
//       .then((response) => {
//         console.log("after axios", response.data);
//         dispatch(setProducts(response.data));
//       })
//       .catch((error) => {
//         console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
//         console.error("Error searching products:", error);
//       });
//   };
// }
