import React from "react";
import "./Products.css";

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
  return (
    <tr className={rowClass(props.product.status)}>
      <td>{props.product.name}</td>
      <td>{props.product.price}</td>
      <td>{props.product.sale_price}</td>
      <td>{props.product.status}</td>
      <td>ADD TO CART</td>
    </tr>
  );
};

export default ProductRow;
