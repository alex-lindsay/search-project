import React, { useState } from "react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";

import "./Products.css";

const Products = (props) => {
  const [products] = useState();
  // const [products, setProducts] = useState();

  // useEffect(() => {
  //   async function fetchProducts() {
  //     console.log("let's get some products");
  //     try {
  //       const result = await axios.get(
  //         `http://searchproducts.alex-lindsay.com/api/products/products`
  //       );
  //       console.log("after axios", result.data);
  //       setProducts(result.data);
  //     } catch (error) {
  //       console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
  //       console.error("Error getting products:", error);
  //     }
  //   }
  //   fetchProducts();
  // }, []);

  const productRows = products ? (
    products.map((product) => <p>product.name</p>)
  ) : (
    <></>
  );

  return (
    <>
      <p>Test Data</p>
      {productRows}
      |||{process.env.API_URL}|||
    </>
  );
};

export default Products;
