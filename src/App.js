import React, { useState, useCallback } from 'react';
import Header from './components/HeaderComponent/HeaderComponent';
import LeftMenu from './components/LeftMenuComponent/LeftMenuComponent';
import ImageArea from './components/ImageAreaComponent/ImageAreaComponent';
import NotesList from './components/NotesListComponent/NotesListComponent';


function App() {
  const [image, setImage] = useState();

  const imageHandler = useCallback((img) =>{
    setImage(img);
  },[]);

  return (
    <div>
      <Header imageHandler={imageHandler}/>
      <div className='container divMain'>
        <div className='row'>
          <LeftMenu />
          <ImageArea image={image}/>
          <NotesList />
        </div>
      </div>
    </div>
  );
}

export default App;
