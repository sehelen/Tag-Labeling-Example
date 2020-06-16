import React, { useState } from 'react';
import './HeaderComponent.css';
import { Button, Input, InputGroup, InputGroupAddon, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


function Header(){
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <div className='Header container'>
            <Navbar expand="md" dark>
                <NavbarBrand href="/" className="mr-auto logo" >LOGO</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar className="nav-collapse">
                    <Nav navbar className="ml-auto">
                        <NavItem className="search-nav-item">
                            <InputGroup size="sm">                 
                                <Input placeholder="Search..."/>  
                                <InputGroupAddon addonType="append"><Button>Search</Button></InputGroupAddon>
                            </InputGroup>  
                        </NavItem>
                        <NavItem>
                            <Button size="sm">Log In</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>            
        </div>
    );
}

export default Header;