import React, { useState } from 'react';
import './HeaderComponent.css';
import { Navbar} from 'reactstrap';
import Dropzone from './DropzoneComponent/DropzoneComponent';
import { Collapse, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';


function Header(props){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
        <div className='Header container'>
            <Navbar>  
                <InputGroup className="inputGroup col-4 mr-auto">                 
                    <Input placeholder="Search" />
                    <InputGroupAddon addonType="prepend"><Button className="btn-search">Search</Button></InputGroupAddon>
                </InputGroup>  
                <Button className="btn-upload mr-2" onClick={toggle}>Upload Image</Button>
                <Button className="btn-login">Log In</Button>
            </Navbar>
            <Collapse isOpen={isOpen}>
                <Dropzone imageHandler={props.imageHandler} toggle={toggle}/>
            </Collapse>
        </div>
    );
}

export default Header;