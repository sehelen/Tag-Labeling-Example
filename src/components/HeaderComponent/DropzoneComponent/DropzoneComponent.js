import React, {useMemo, useCallback, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import './DropzoneComponent.css';
import { Button } from 'reactstrap';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function Dropzone({imageHandler, toggle}) {
    const [file, setFile] = useState();

    const onDrop = useCallback(acceptedFiles => {
        setFile(Object.assign(acceptedFiles[0], {
            preview: URL.createObjectURL(acceptedFiles[0])
            }));
        }, []);

    const {
            getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject
    } = useDropzone({accept: 'image/*', maxFiles: 1, onDrop});

    const style = useMemo(() => ({
        ...baseStyle,
        ...(isDragActive ? activeStyle : {}),
        ...(isDragAccept ? acceptStyle : {}),
        ...(isDragReject ? rejectStyle : {})
    }), [
        isDragActive,
        isDragReject,
        isDragAccept
    ]);

    const submitHandler = function(){
        if (file){
            imageHandler(file);
            toggle();
            setFile(null);
        }   
    };

    const cancelHandler = function(){
        toggle();
    };
    
    return (
        <div className="container">
            <div className="container row">
                <div className="container col-6" {...getRootProps({style})}>
                    <input {...getInputProps()} />
                    <p>Drag 'n' drop some file here, or click to select file</p>
                </div>
                <div className="container col-6">
                    <div className="container fileName"><p>{file?file.name:"No file selected"}</p></div>
                    <div className="container btn-group col-3">
                        <Button className="btn-dropzone" onClick={submitHandler}>Submit</Button> 
                        <Button className="btn-dropzone " onClick={cancelHandler}>Cancel</Button>  
                    </div> 
                </div> 
            </div>
        </div>
    );
}

export default Dropzone;
