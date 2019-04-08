import React from 'react';
import {Link} from 'gatsby';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar color="dark" light expand="md" fixed="top">
        <NavbarBrand>
          <h3 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}>
              {'The Classic Handyman, LLC'}
            </Link>
          </h3>
        </NavbarBrand>
          
        <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{color: 'white', marginTop:'15px'}} href="#services">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color: 'white', marginTop:'15px'}} href="#about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}