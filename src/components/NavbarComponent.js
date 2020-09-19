import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse,} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  
  constructor(props){
    super(props);
    
    this.state = {
        isNavOpen: false,
        isModalOpen: false
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
}
  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <NavbarBrand href="index.html">This is ME from A to Z</NavbarBrand>
          <NavbarToggler onClick={this.toggleNav}/> 
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to='/profiles'>Profiles</NavLink>
                </NavItem>
            </Nav> 
          </Collapse>
        </Navbar>
    </React.Fragment>
    );
  }
}

export default NavBar;