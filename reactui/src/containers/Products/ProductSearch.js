import React from "react";
import axios from "axios";
import { connect } from "react-redux";

import { setProducts, resetProducts } from "../../store/actions";

import "./Products.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const ProductSearch = (props) => {
  let searchTimer = null;
  const handleSearchChange = (evt) => {
    const value = evt.target.value;
    if (searchTimer !== null) {
      clearTimeout(searchTimer);
    }
    searchTimer = null;
    if (value.length > 2) {
      searchTimer = setTimeout(() => {
        console.log(value);
        const fetchData = async () => {
          const result = await axios(
            `${process.env.REACT_APP_API_URL_SEARCH}/search/${value}`
          );
          console.log(result.data);
          props.dispatchSetProducts(result.data.data);
        };
        fetchData();
      }, 500);
    } else {
      searchTimer = setTimeout(() => {
        console.log(null);
        props.dispatchResetProducts();
      }, 500);
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-label="Search string"
        placeholder="search text"
        onChange={handleSearchChange}
      />
      <div className="input-group-append">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // country: state.country,
    // countries: state.countries,
    // language: state.language,
    // languages: state.languages,
    // category: state.category,
    // categories: state.categories,
    // source: state.source,
    // sources: state.sources,
    // headlineVersion: state.headlineVersion,
    // headlines: state.headlines,
    // searchKey: state.searchKey,
    // story: state.story,
    // topics: state.topics,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchSetProducts: (products) => dispatch(setProducts(products)),
    dispatchResetProducts: () => dispatch(resetProducts()),
    // setCountry: (country) => dispatch(setCountry(country)),
    // setLanguage: (language) => dispatch(setLanguage(language)),
    // setCategory: (category) => dispatch(setCategory(category)),
    // setSource: (source) => dispatch(setSource(source)),
    // setStory: (story) => dispatch(setStory(story)),
    // setSearchKey: (searchKey) => dispatch(setSearchKey(searchKey)),
    // getInitialSources: () => dispatch(getInitialSources()),
    // updateHeadlines: (params) => dispatch(getHeadlines(params)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductSearch);
// export default ProductSearch;
