import axios from "axios";
import { Auth } from "aws-amplify";

/* Action Types */
export const SET_USER_IS_AUTHENTICATED = "SET_USER_IS_AUTHENTICATED";
export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
export const RESET_PRODUCTS = "RESET_PRODUCTS";
export const UPDATE_CART = "UPDATE_CART";

export function setUserIsAuthenticated(isAuthenticated) {
  console.log("actions.setUserIsAuthenticated");
  return {
    type: SET_USER_IS_AUTHENTICATED,
    authenticated: isAuthenticated,
  };
}

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

export function addProductToCart(data) {
  return function (dispatch) {
    console.log("actions.addProductToCart");
    Auth.currentSession()
      .then((res) => {
        let accessToken = res.getAccessToken();
        let jwt = accessToken.getJwtToken();

        return axios
          .post(
            `${process.env.REACT_APP_API_URL_CARTS}/carts/products`,
            {
              products: data,
            },
            {
              headers: { Authorization: "Bearer " + jwt },
            }
          )
          .then((response) => {
            console.log("after axios", response.data);
            dispatch(updateCart(response.data));
          })
          .catch((error) => {
            console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
            console.error("Error getting products:", error);
          });
      })
      .catch((error) => {
        console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
        console.error("Error getting products:", error);
      });
  };
}

export function updateCart(data) {
  return {
    ...data,
    type: UPDATE_CART,
  };
}

export function fetchCart() {
  return function (dispatch) {
    console.log("actions.fetchCart");
    Auth.currentSession()
      .then((res) => {
        let accessToken = res.getAccessToken();
        let jwt = accessToken.getJwtToken();

        return axios
          .post(
            `${process.env.REACT_APP_API_URL_CARTS}/carts/products`,
            {
              products: [],
            },
            {
              headers: { Authorization: "Bearer " + jwt },
            }
          )
          .then((response) => {
            console.log("after axios", response.data);
            dispatch(updateCart(response.data));
          })
          .catch((error) => {
            console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
            console.error("Error getting cart:", error);
          });
      })
      .catch((error) => {
        console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
        console.error("Error getting cart:", error);
      });
  };
}

export function removeProductFromCart(data) {
  console.log(data);
  return function (dispatch) {
    console.log("actions.removeProductFromCart");
    Auth.currentSession()
      .then((res) => {
        let accessToken = res.getAccessToken();
        let jwt = accessToken.getJwtToken();

        return axios
          .delete(
            `${process.env.REACT_APP_API_URL_CARTS}/carts/${data.cart_id}/products/${data.product_id}`,
            {
              headers: { Authorization: "Bearer " + jwt },
            }
          )
          .then((response) => {
            console.log("after axios delete product", response.data);
            dispatch(updateCart(response.data));
          })
          .catch((error) => {
            console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
            console.error("Error getting products:", error);
          });
      })
      .catch((error) => {
        console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
        console.error("Error getting products:", error);
      });
  };
}
