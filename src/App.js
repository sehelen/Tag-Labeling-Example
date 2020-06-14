import React, { useState } from 'react';
import Header from './components/HeaderComponent/HeaderComponent';
import ImageArea from './components/ImageAreaComponent/ImageAreaComponent';
import NotesList from './components/NotesListComponent/NotesListComponent';


function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);


  const notesHandler = (note) => {
    if (note){
      setNotes(notes => [...notes, note]);
      selectedNoteHandler(note.id, note);
    }  
    else{
      setNotes([]);
    }
     
  };

  const selectedNoteHandler = (id, note) => {
    note ? setSelectedNote(note) : setSelectedNote(notes.filter(note => note.id == id)[0]);
  };

   return (
    <div>
      <Header/>
      <div className='container divMain'>
        <div className='row'>
          <ImageArea notes={notes} notesHandler={notesHandler} selectedNote={selectedNote} selectedNoteHandler={selectedNoteHandler}/>
          <NotesList notes={notes} selectedNote={selectedNote} selectedNoteHandler={selectedNoteHandler}/>
        </div>
      </div>
    </div>
  );
}

export default App;
