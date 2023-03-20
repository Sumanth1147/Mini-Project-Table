import React, {useContext, useRef} from 'react';
import Modal from '../UI/Modal';
import  './DeleteForm.css';
import noteContext from '../../context/noteContext';

const DeleteForm = (props) => {
  const context = useContext(noteContext);
  const {notes, deleteNote} = context;
  
   const refClose = useRef(null)
  const handleDeleteClick = (noteId,event) => {
     event.preventDefault();    
    deleteNote(newContacts);
     refClose.current.click();

  };

  return (
    
    <Modal onClose={props.onClose}>
    <form  >
    <div>
      <div className="total">
      <span>CONFIRMATION</span><br />
      </div>
      <p>Do you want to delete the selected key? </p>
    <div className="actions">
      <button ref={refClose}  className="button--alt" onClick={props.onClose}>
        Cancel
      </button>
      <button  className="button--alt" type="submit" onClick={()=>{deleteNote(note.id)}}>
        Delete
      </button>
    
    </div>
    </div>
    </form>
  </Modal>
    
  )
}

export default DeleteForm
