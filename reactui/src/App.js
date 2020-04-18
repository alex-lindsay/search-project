import React, { useState, useEffect } from "react";
import { AppContext } from "./libs/contextLib";
import { Auth } from "aws-amplify";

import Routes from "./Routes";

import Navigation from "./containers/Navigation/Navigation";

import "./App.css";

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

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
      <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
        <Routes />
      </AppContext.Provider>
    </div>
  );
}

export default App;
