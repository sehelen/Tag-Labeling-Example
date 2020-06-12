import React from 'react';
import './HeaderComponent.css';
import { Navbar} from 'reactstrap';
import { Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';


function Header(){
    return(
        <div className='Header container'>
            <Navbar>  
                <InputGroup className="inputGroup col-4 mr-auto">                 
                    <Input placeholder="Search" />
                    <InputGroupAddon addonType="prepend"><Button className="btn-search">Search</Button></InputGroupAddon>
                </InputGroup>  
                <Button className="btn-login">Log In</Button>
            </Navbar>            
        </div>
    );
}

export default Header;