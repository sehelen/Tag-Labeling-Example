import React, { useState } from 'react';
import './HeaderComponent.css';
import { Button, Input, InputGroup, InputGroupAddon, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';


function Header(){
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return(
        <div className='Header container'>
            <Navbar expand="md" dark>
                <NavbarBrand href="/" className="mr-auto" >LOGO</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                <Collapse isOpen={!collapsed} navbar className="p-2">
                    <Nav navbar className="ml-auto">
                        <NavItem className="m-1">
                            <InputGroup size="sm">                 
                                <Input placeholder="Search..."/>  
                                <InputGroupAddon addonType="append"><Button>Search</Button></InputGroupAddon>
                            </InputGroup>  
                        </NavItem>
                        <NavItem className="m-1">
                            <Button size="sm">Log In</Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>            
        </div>
    );
}

export default Header;