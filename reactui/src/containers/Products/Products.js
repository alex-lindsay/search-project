import React, { useEffect, useState } from "react";
import axios from "axios";

import ProductRow from "./ProductRow";

import "./Products.css";
import ProductSearch from "./ProductSearch";

const Products = (props) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log(process.env);
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL_PRODUCTS}/products`
        );
        console.log("after axios", result.data);
        setProducts(result.data.data);
      } catch (error) {
        console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
        console.error("Error getting products:", error);
      }
    }
    fetchProducts();
  }, []);

  const productRows = products ? (
    products.map((product) => <ProductRow key={product.id} product={product} />)
  ) : (
    <tr>
      <td colSpan="5" className="error">
        No products found.
      </td>
    </tr>
  );

  return (
    <>
      <ProductSearch />
      <table className="table table-striped table-hover products">
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
        <tbody>{productRows}</tbody>
      </table>
    </>
  );
};

export default Products;
