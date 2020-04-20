import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";

import Routes from "./Routes";

import Navigation from "./containers/Navigation/Navigation";

import "./App.css";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    onLoad();
  }, []);

  async function onLoad() {
    try {
      await Auth.currentSession();
      userHasAuthenticated(true);
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    setIsAuthenticating(false);
  }

  return isAuthenticating ? (
    <p>Still authenticating...</p>
  ) : (
    <div className="App container">
      <Navigation
        isAuthenticated={isAuthenticated}
        userHasAuthenticated={userHasAuthenticated}
      />
      <AppContext.Provider
        value={{ isAuthenticated, userHasAuthenticated, products, setProducts }}
      >
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
