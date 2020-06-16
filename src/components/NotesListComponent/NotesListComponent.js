import React from 'react';
import './NotesListComponent.css';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ScrollToBottom, { useScrollTo } from 'react-scroll-to-bottom';
 
const Content = ({notes, selectedNote, selectedNoteHandler}) => {
  const scrollTo = useScrollTo();
 
  const scrollToNote = () => {
        if(selectedNote) {
            scrollTo(60 * selectedNote.id);
        }         
    };

  const listItem = (note, index) => {
        if (note === selectedNote){
            scrollToNote();
            return (
                <ListGroupItem className="selected-note"  id={note.id} key={index} onClick={e => selectedNoteHandler(e.target.id)}  >{note.text}</ListGroupItem>
            );
        }
        else {
            return (
                <ListGroupItem className="note" id={note.id} key={index} onClick={e => selectedNoteHandler(e.target.id)}  >{note.text}</ListGroupItem>
            );
        }
    }; 

  return (
    <ListGroup>
        {notes.map((note, index) => listItem(note, index))}
    </ListGroup> 
  );
}
 
function NotesList({notes, selectedNote, selectedNoteHandler}) {
    return (      
        <div className='notesList col-md-4'>
            <h3>List of Notes</h3>
            <ScrollToBottom className="scrollBox">
                <Content notes={notes} selectedNote={selectedNote} selectedNoteHandler={selectedNoteHandler}/>         
            </ScrollToBottom>           
        </div>
    )
};

export default NotesList;