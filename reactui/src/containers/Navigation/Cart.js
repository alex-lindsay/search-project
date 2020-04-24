import React from "react";

import "./Navigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  console.log("***Cart", props.cartProducts);
  const cartCount =
    props.cartProducts && props.cartProducts.length > 0
      ? props.cartProducts.length
      : null;
  return (
    <div className="Cart">
      <FontAwesomeIcon icon={faShoppingCart} />
      <span className="cartCount">{cartCount}</span>
    </div>
  );
};

export default Cart;
