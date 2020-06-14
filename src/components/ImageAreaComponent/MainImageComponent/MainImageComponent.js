import React, {useState} from 'react';
import './MainImageComponent.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

function MainImage({image, notes, notesHandler, selectedNote, selectedNoteHandler}){
    const [id, setId] = useState(1);
    const [modal, setModal] = useState(false);
    const [selectedTag, setSelectedTag] = useState();
    const [noteText, setNoteText] = useState();

    const toggle = () => setModal(!modal);

    const onClick = (e) => {
        toggle();

        selectedNoteHandler(null, null);

        const block = e.target.getBoundingClientRect();
        const x = e.clientX - block.left;
        const y = e.clientY - block.top;
        setSelectedTag({top:y, left:x});
    };

    const submitHandler = () => {
        setModal(!modal);
        notesHandler({
            id: id,
            tag: selectedTag,
            text: noteText,
        });
        setId(id + 1);
    };

    const tagDiv = (note, index) => {
        console.log(note);
        if (note === selectedNote){
            return (
                <div className="tag"  id={note.id} key={index} style={note.tag} onClick={e => selectedNoteHandler(e.target.id)} >
                    <img style={{width:"3vw"}} src={require('../../../images/notebook.png')} id={note.id} onClick={e => selectedNoteHandler(e.target.id)} />
                </div>
            );
        }
        else {
            return (
                <div className="tag" id={note.id} key={index} style={note.tag} onClick={e => selectedNoteHandler(e.target.id)} >
                    <img src={require('../../../images/notebook.png')} id={note.id} onClick={e => selectedNoteHandler(e.target.id)} />
                </div>
            );
        }
    };

    return(
        <div className='divImg col-8'>
            <div className="area">
                <img onClick={onClick} src={image.preview} />
                {notes.map((note, index) => tagDiv(note, index))}
            </div>
            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>Input new note here...</ModalHeader>
                <ModalBody>
                    <Input type="textarea" onChange={(e) => setNoteText(e.target.value)}/>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitHandler}>Submit</Button>
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default MainImage;