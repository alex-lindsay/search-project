import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

import { fetchCart } from "../../store/actions";

import CartProductRow from "./CartProductRow";

import "./Cart.css";

const Cart = (props) => {
  const cartProducts = useSelector((state) => state.cartProducts);
  console.log("Cart cartProducts", { cartProducts });
  const cartRows = cartProducts ? (
    cartProducts.map((product, index) => (
      <CartProductRow key={index} product={product} />
    ))
  ) : (
    <tr>
      <td colSpan="5" className="error">
        No products found.
      </td>
    </tr>
  );

  return (
    <table className="table table-striped table-hover cart">
      <thead className="thead-light">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Price</th>
          <th>Sale Price</th>
          <th>Status</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>{cartRows}</tbody>
    </table>
  );
};

export default Cart;
