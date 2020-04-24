import React from "react";
import { useSelector } from "react-redux";

import "./Navigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const cartProducts = useSelector((state) => state.cartProducts);
  // console.log("***Cart", cartProducts);
  const cartCount =
    cartProducts && cartProducts.length > 0 ? cartProducts.length : null;
  return (
    <div className="Cart">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cartCount"> ({cartCount})</span>
    </div>
  );
};

export default Cart;
