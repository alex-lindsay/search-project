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
      const res = await Auth.currentSession();
      userHasAuthenticated(true);
      let accessToken = res.getAccessToken();
      let jwt = accessToken.getJwtToken();
      //You can print them to see the full objects
      console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
      console.log(`myJwt: ${jwt}`);
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
      <AppContext.Provider
        value={{ isAuthenticated, userHasAuthenticated, products, setProducts }}
      >
        <Navigation
          isAuthenticated={isAuthenticated}
          userHasAuthenticated={userHasAuthenticated}
        />
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
