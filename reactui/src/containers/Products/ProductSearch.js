import React from "react";
import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ProductSearch = (props) => {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-label="Search string"
        placeholder="search text"
      />
      <div className="input-group-append">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </div>
  );
};

export default ProductSearch;
