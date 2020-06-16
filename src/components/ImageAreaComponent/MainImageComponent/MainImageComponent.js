import React, {useState} from 'react';
import './MainImageComponent.css';
import classNames from 'classnames';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

function MainImage({image, notes, notesHandler, selectedNote, selectedNoteHandler}){
    const [id, setId] = useState(0);
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

        const posX = `${(x/block.width) * 100}%`;
        const posY = `${(y/block.height) * 100}%`;
        setSelectedTag({top:posY, left:posX});
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
        const tagClass = classNames({
            'tag': true,
            'selected-tag': note === selectedNote
        });
        
        return (
            <div className={tagClass} id={note.id} key={index} style={note.tag} onClick={e => selectedNoteHandler(e.target.id)} >
                <img src={require('../../../images/notebook.png')} id={note.id} onClick={e => selectedNoteHandler(e.target.id)} alt="tag" />
            </div>
        );
    };

    return(
        <div>
            <div className="tag-area">
                <img className="main-image" onClick={onClick} src={image.preview} alt='mainImg' />
                {notes.map((note, index) => tagDiv(note, index))}
            </div>
            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader>Input new note here...</ModalHeader>
                <ModalBody>
                    <Input className="textarea" type="textarea" onChange={(e) => setNoteText(e.target.value)}/>
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