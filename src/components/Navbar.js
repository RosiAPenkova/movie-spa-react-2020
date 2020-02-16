import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
} from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import Logo from '../assets/img/Logo.png';

const HeaderNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar  dark expand="md">
        <div className="container">
        <NavbarBrand href="/"> <img src={Logo} alt="Logo" /></NavbarBrand>
       
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink 
                    tag={RRNavLink} 
                    exact 
                    to="/" 
                    activeClassName="active"
                    >Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                     tag={RRNavLink} 
                     to="/catalog" 
                     activeClassName="active"
                    >Catalog</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink 
                        tag={RRNavLink} 
                        to="/favorite" 
                        activeClassName="active"
                        >Favorite</NavLink>                
                </NavItem>
                <NavItem>
                    <NavLink 
                        tag={RRNavLink} 
                        to="/upcoming" 
                        activeClassName="active"
                        >Upcoming Movies</NavLink>                
                </NavItem>
            </Nav>
            </Collapse>
        </div>
    </Navbar>
  );
}

export default HeaderNavbar;