import React from 'react';
import './NotesListComponent.css';
import {ListGroup, ListGroupItem} from 'reactstrap';
import ScrollToBottom from 'react-scroll-to-bottom';

function NotesList({notes}){
    return(
        <div className='notesList col-4'>
            <h3>List of Notes</h3>
            <ScrollToBottom className="listScroll">
                <ListGroup>
                    {notes.map((note, i) => <ListGroupItem className="note" key={i}>{note}</ListGroupItem>)}
                </ListGroup>
            </ScrollToBottom>           
        </div>
    );
}

export default NotesList;