import React from "react";
import { useDispatch } from "react-redux";
import { useAppContext } from "../../libs/contextLib";

import "./Cart.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import { removeProductFromCart } from "../../store/actions";

const CartProductRow = (props) => {
  const dispatch = useDispatch();
  console.log("CartProductRow props", props);

  const removeProductFromCartButton = (
    <FontAwesomeIcon
      icon={faTrashAlt}
      onClick={() =>
        dispatch(removeProductFromCart([{ product_id: props.product.id }]))
      }
    />
  );

  return (
    <tr>
      <td>{props.product.product_id}</td>
      <td>{props.product.product_name}</td>
      <td>{props.product.quantity}</td>
      <td>{props.product.product_price}</td>
      <td>{props.product.quantity * props.product.product_price}</td>
      <td>{removeProductFromCartButton}</td>
    </tr>
  );
};

export default CartProductRow;
