import React, {useMemo, useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import './ImageAreaComponent.css';
import MainImage from './MainImageComponent/MainImageComponent';


function ImageArea({notes, notesHandler, selectedNote, selectedNoteHandler}) {
    const [image, setImage] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        notesHandler(null);
        setImage(Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0])
            }));
        }, [notesHandler]);

    const {
            getRootProps,
            getInputProps
    } = useDropzone({accept: 'image/*', maxFiles: 1, onDrop, noClick: true});

   
   
    const dropzoneContent = () => {
        if (image) {
            return (
                <MainImage 
                image={image} 
                notes={notes} 
                notesHandler={notesHandler} 
                selectedNote={selectedNote} 
                selectedNoteHandler={selectedNoteHandler}
                />
            );
        }
        else {
            return (
                <p>Drag 'n' drop some file here, or click to select file</p>
            );
        }
    };

    return (       
        <div className="dropzone col-8" {...getRootProps()}>
            <input {...getInputProps()} />
            {dropzoneContent()}
        </div>
    );
}

export default ImageArea;