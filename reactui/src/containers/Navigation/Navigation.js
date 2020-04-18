import React from "react";
import { Auth } from "aws-amplify";
import { Link, useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import { Navbar, Nav, NavItem } from "react-bootstrap";

import "./Navigation.css";

const Navigation = (props) => {
  const history = useHistory();

  async function handleLogout() {
    await Auth.signOut();
    props.userHasAuthenticated(false);
    history.push("/reactui/login");
  }

  return (
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/reactui/">Product Searcher</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {props.isAuthenticated ? (
            <NavItem onClick={handleLogout}>Logout</NavItem>
          ) : (
            <>
              <LinkContainer to="/reactui/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/reactui/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;