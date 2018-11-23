import './Menu.css';

import * as React from 'react';
import {
  Collapse,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink
} from 'reactstrap';

class Menu extends React.Component {
  public render() {
    return (
      <div>
        <Navbar color="light" light={true} expand="md">
          <NavbarBrand href="/">Gomix</NavbarBrand>
          <Collapse isOpen={true} navbar={true}>
            <Nav className="ml-auto" navbar={true}>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/login">login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Menu;
