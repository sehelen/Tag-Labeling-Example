import React, {useMemo, useCallback, useState } from 'react';
import {useDropzone} from 'react-dropzone';
import './ImageAreaComponent.css';
import MainImage from './MainImageComponent/MainImageComponent';


function ImageArea({notesHandler}) {
    const [image, setImage] = useState(null);

    const onDrop = useCallback(acceptedFiles => {
        setImage(Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0])
            }));
        }, []);

    const {
            getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject
    } = useDropzone({accept: 'image/*', maxFiles: 1, onDrop, noClick: true});

   
   
    const dropzoneContent = () => {
        if (image) {
            return (
                <MainImage image={image} notesHandler={notesHandler}/>
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


// const baseStyle = {
  
  
// };

// const activeStyle = {
//   borderColor: '#2196f3'
// };

// const acceptStyle = {
//   borderColor: '#00e676'
// };

// const rejectStyle = {
//   borderColor: '#ff1744'
// };

// const style = useMemo(() => ({
//     ...baseStyle,
//     ...(isDragActive ? activeStyle : {}),
//     ...(isDragAccept ? acceptStyle : {}),
//     ...(isDragReject ? rejectStyle : {})
// }), [
//     isDragActive,
//     isDragReject,
//     isDragAccept
// ]);