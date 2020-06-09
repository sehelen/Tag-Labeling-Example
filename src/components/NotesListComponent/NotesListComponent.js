import React from 'react';
import './NotesListComponent.css';
import {ListGroup, ListGroupItem} from 'reactstrap';

function NotesList(){
    return(
        <div className='notesList col-3 ml-auto'>
            <h3>List of Notes</h3>
            <ListGroup>
                <ListGroupItem className="note">Cras justo odio</ListGroupItem>
                <ListGroupItem className="note">Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem className="note">Morbi leo risus</ListGroupItem>
                <ListGroupItem className="note">Porta ac consectetur ac</ListGroupItem>
                <ListGroupItem className="note">Vestibulum at eros</ListGroupItem>
            </ListGroup>
        </div>
    );
}

export default NotesList;

//style={{backgroundColor: 'pink'}}