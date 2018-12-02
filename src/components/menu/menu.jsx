import React from 'react';

import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
} from 'reactstrap';

import './menu.css';

const Menu = () => (
  <div className="menu">
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">Gomix</NavbarBrand>
      <Collapse isOpen navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
);

export default Menu;
