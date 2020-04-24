import React, { useState, useEffect } from "react";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";
import { useDispatch } from "react-redux";

import Routes from "./Routes";

import { fetchCart } from "./store/actions";

import Navigation from "./containers/Navigation/Navigation";

import "./App.css";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [products, setProducts] = useState([]);
  const [cartProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function asyncOnLoad() {
      await onLoad();
    }
    asyncOnLoad();
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
      dispatch(fetchCart());
      // TODO get current cart for the user upon login
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
        value={{
          isAuthenticated,
          userHasAuthenticated,
          products,
          setProducts,
        }}
      >
        <Navigation
          isAuthenticated={isAuthenticated}
          userHasAuthenticated={userHasAuthenticated}
          cartProducts={cartProducts}
        />
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
