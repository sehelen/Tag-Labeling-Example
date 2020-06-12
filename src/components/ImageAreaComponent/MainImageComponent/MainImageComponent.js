import React, {useState} from 'react';
import './MainImageComponent.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';

function MainImage({image, notesHandler}){
    const [modal, setModal] = useState(false);
    const [tags, setTags] = useState([]);
    const [tag, setTag] = useState();
    const [note, setNote] = useState();

    const toggle = () => setModal(!modal);

    const onClick = (e) => {
        toggle();

        const block = e.target.getBoundingClientRect();
        const x = e.clientX - block.left;
        const y = e.clientY - block.top;

        setTag({top:y, left:x});
    };

    const submitHandler = () => {
        setModal(!modal);
        notesHandler(notes => [...notes, note]);
        setTags(tags => [...tags, tag]);
    };

    const tagDiv = (t,i) => {
        if (t!==tag){
            return (
                <div className="tag" key={i} style={t}>
                    <img src={require('../../../images/notebook.png')} />
                </div>
            );
        }
        else {
            return (
                <div className="tag" key={i} style={t}>
                    <img style={{width:"3vw"}} src={require('../../../images/notebook.png')} />
                </div>
            );
        }
    };

    return(
        <div className='divImg col-8'>
            <div className="area">
                <img onClick={onClick} src={image.preview} />
                {tags.map((tag, i) => tagDiv(tag,i))}
            </div>
            
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Input new note here...</ModalHeader>
                <ModalBody>
                    <Input type="textarea" name="noteName" id="noteId" onChange={(e) => setNote(e.target.value)}/>
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