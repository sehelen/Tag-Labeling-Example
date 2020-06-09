import React from 'react';
import './LeftMenuComponent.css';
import {ListGroup, ListGroupItem} from 'reactstrap';

function LeftMenu(){
    return(
        <div className='leftMenu col-3 mr-auto'>
        <h3>Edit Menu</h3>
            <ListGroup>
                <ListGroupItem className="listItem">function 1</ListGroupItem>
                <ListGroupItem className="listItem">function 2</ListGroupItem>
                <ListGroupItem className="listItem">function 3</ListGroupItem>
                <ListGroupItem className="listItem">function 4</ListGroupItem>
                <ListGroupItem className="listItem">function 5</ListGroupItem>
                <ListGroupItem className="listItem">function 6</ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default LeftMenu;