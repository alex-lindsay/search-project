import React, { useState } from "react";

import "./Navigation.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Cart = (props) => {
  const [cart] = useState();
  console.log(cart);
  return <FontAwesomeIcon icon={faShoppingCart} />;
};

export default Cart;
