import React from 'react';
import './NotesListComponent.css';
import classNames from 'classnames';
import { ListGroup, ListGroupItem } from 'reactstrap';
import ScrollToBottom, { useScrollTo } from 'react-scroll-to-bottom';
 
const Content = ({notes, selectedNote, selectedNoteHandler}) => {
  const scrollTo = useScrollTo();
  
  const scrollToNote = (index) => {
    let scrollHeight = 0;

    const items = document.getElementsByClassName('note'); 

    Array.prototype.map.call(items, function(item, i){
        if (i < index){
            scrollHeight += item.clientHeight;
        }
    });
        
    scrollTo(scrollHeight);        
    };

  const listItem = (note, index) => {
    const noteClass = classNames({
        'note': true,
        'selected-note': note === selectedNote
    });
    
    if (note === selectedNote){
        scrollToNote(index);  
    }

    return (
        <ListGroupItem className={noteClass}  id={note.id} key={index} onClick={e => selectedNoteHandler(e.target.id)}  >{note.text}</ListGroupItem>
        );
    }; 

  return (
    <ListGroup>
        {notes.map((note, index) => listItem(note, index))}
    </ListGroup> 
  );
}
 
function NotesList({notes, selectedNote, selectedNoteHandler}) {
    return (      
        <div className='notesList col-md-4 pt-3 pl-4'>
            <h3>List of Notes</h3>
            <ScrollToBottom className="scrollBox">
                <Content notes={notes} selectedNote={selectedNote} selectedNoteHandler={selectedNoteHandler}/>         
            </ScrollToBottom>           
        </div>
    )
};

export default NotesList;