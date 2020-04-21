import React, { useEffect } from "react";
import { connect } from "react-redux";

import { setProducts, setAllProducts } from "../../store/actions";
import axios from "axios";

import ProductRow from "./ProductRow";

import "./Products.css";
import ProductSearch from "./ProductSearch";

const Products = (props) => {
  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log(process.env);
        const result = await axios.get(
          `${process.env.REACT_APP_API_URL_PRODUCTS}/products`
        );
        console.log("after products axios", result.data);
        props.dispatchSetProducts(result.data.data);
        props.dispatchSetAllProducts(result.data.data);
      } catch (error) {
        console.warn("TODO REPLACE THIS WITH AN ERROR DISPATCH");
        console.error("Error getting products:", error);
      }
    }
    fetchProducts();
  }, []);

  const productRows = props.products ? (
    props.products.map((product) => (
      <ProductRow key={product.id} product={product} />
    ))
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

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetProducts: (products) => dispatch(setProducts(products)),
    dispatchSetAllProducts: (products) => dispatch(setAllProducts(products)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

// export default Products;
