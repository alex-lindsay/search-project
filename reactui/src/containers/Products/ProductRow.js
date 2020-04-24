import React from "react";
import { useDispatch } from "react-redux";
import { useAppContext } from "../../libs/contextLib";

import "./Products.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

import { addProductToCart } from "../../store/actions";

const rowClass = (status) => {
  switch (status) {
    case "inactive":
      return "warning";
    case "deleted":
      return "danger";
    default:
      return "";
  }
};

const ProductRow = (props) => {
  const { isAuthenticated } = useAppContext();

  const dispatch = useDispatch();

  const addProductToCartButton = isAuthenticated ? (
    <FontAwesomeIcon
      icon={faCartPlus}
      onClick={() =>
        dispatch(
          addProductToCart([{ product_id: props.product.id, quantity: 1 }])
        )
      }
    />
  ) : null;

  return (
    <tr className={rowClass(props.product.status)}>
      <td>{props.product.id}</td>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
      <td>{props.product.sale_price}</td>
      <td>{props.product.status}</td>
      <td>{addProductToCartButton}</td>
    </tr>
  );
};

export default ProductRow;
