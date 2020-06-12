import React, { useState } from 'react';
import Header from './components/HeaderComponent/HeaderComponent';
import ImageArea from './components/ImageAreaComponent/ImageAreaComponent';
import NotesList from './components/NotesListComponent/NotesListComponent';


function App() {

  const [notes, setNotes] = useState([]);

   return (
    <div>
      <Header/>
      <div className='container divMain'>
        <div className='row'>
          <ImageArea notesHandler={setNotes}/>
          <NotesList notes={notes}/>
        </div>
      </div>
    </div>
  );
}

export default App;
