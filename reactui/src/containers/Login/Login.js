import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Auth } from "aws-amplify";
import { useAppContext } from "../../libs/contextLib";

import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userHasAuthenticated } = useAppContext();
  const history = useHistory();

  function validateForm() {
    return email.length > 0 && password.length >= 16;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      await Auth.signIn(email, password);
      userHasAuthenticated(true);
      Auth.currentSession().then((res) => {
        let accessToken = res.getAccessToken();
        let jwt = accessToken.getJwtToken();
        //You can print them to see the full objects
        console.log(`myAccessToken: ${JSON.stringify(accessToken)}`);
        console.log(`myJwt: ${jwt}`);
      });
      history.push("/reactui/products");
    } catch (e) {
      alert(e.message);
    }
  }

  return (
    <div className="Login">
      <form onSubmit={handleSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <ControlLabel>Email</ControlLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <ControlLabel>Password</ControlLabel>
          <FormControl
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
      </form>
    </div>
  );
}
