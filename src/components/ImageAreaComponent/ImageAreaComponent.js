import React, {useMemo, useCallback, useState } from 'react';
import Dropzone, {useDropzone} from 'react-dropzone';
import './ImageAreaComponent.css';
import MainImage from './MainImageComponent/MainImageComponent';


function ImageArea({notes, notesHandler, selectedNote, selectedNoteHandler}) {
    const [image, setImage] = useState(null);

    const onDropAccepted = useCallback(acceptedFiles => {
        notesHandler(null);
        setImage(Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0])
            }));
        }, [notesHandler]);

    const {
            getRootProps,
            getInputProps,
            isDragActive,
            isDragReject
    } = useDropzone({accept: 'image/*', maxFiles: 1, onDropAccepted, noClick: true});

    const activeStyle = {
        borderColor: '#32C724'
      };   
    const rejectStyle = {
        borderColor: '#ff1744'
    };

    const style = useMemo(() => ({
        ...(isDragActive ? activeStyle : {}),
        ...(isDragReject ? rejectStyle : {})
      }), [
        isDragActive,
        isDragReject
      ]);

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
                <p>Drag 'n' drop some file here</p>
            );
        }
    };

    return (       
        <div {...getRootProps({className:"dropzone col-md-8", style})}>
            <input {...getInputProps()} />
            {dropzoneContent()}
        </div>
    );
}

export default ImageArea;