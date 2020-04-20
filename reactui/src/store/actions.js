import axios from "axios";

/* Action Types */
export const SET_PRODUCTS = "SET_PRODUCTS";

export function setProducts(data) {
  return {
    type: SET_PRODUCTS,
    products: data ? data : [],
  };
}

export function fetchProducts() {
  return function (dispatch) {
    console.log("fetchProducts");
    return axios
      .get(`http://searchproducts.alex-lindsay.com/api/products/products`)
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
