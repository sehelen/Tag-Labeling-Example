import React from 'react';
import './NotesListComponent.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ScrollToBottom from 'react-scroll-to-bottom';

function NotesList({notes, selectedNote, selectedNoteHandler}){

    const listItem = (note, index) => {
        if (note === selectedNote){
            return (
                <ListGroupItem className="selectednote"  id={note.id} key={index} onClick={e => selectedNoteHandler(e.target.id)}  >{note.text}</ListGroupItem>
            );
        }
        else {
            return (
                <ListGroupItem className="note" id={note.id} key={index} onClick={e => selectedNoteHandler(e.target.id)}  >{note.text}</ListGroupItem>
            );
        }
    };

    return(
        <div className='notesList col-4'>
            <h3>List of Notes</h3>
            <ScrollToBottom className="listScroll">
                <ListGroup>
                    {notes.map((note, index) => listItem(note, index))}
                </ListGroup>          
            </ScrollToBottom>           
        </div>
    );
}

export default NotesList;