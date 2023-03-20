import React, {useContext, useState, useRef} from 'react';
import Modal from '../UI/Modal';
import  './AddForm.css';
import { nanoid } from "nanoid";
import noteContext from '../../context/noteContext';


const AddForm = (props) => {
  const context = useContext(noteContext);
  const {addNote} = context;

  const [addFormData, setAddFormData] = useState({
    TechnicalKey: "",
    English: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const refClose = useRef(null)
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      TechnicalKey: addFormData.TechnicalKey,
      English: addFormData.English
    };

    addNote(newContact);     /*added details will be sent to NoteSate addNote function */
     refClose.current.click();  /*to close form after submitting*/
  };


  return (
    <Modal onClose={props.onClose}>
      <form onSubmit={handleAddFormSubmit } >
      <div>
        <div className="total">
        <span>ADD NEW TRANSLATION</span><br />
        </div>
        <div  className="form1">
          <div>
        <label htmlFor="eng" >Locale:</label><br />
           <select id="eng">
              <option>English</option>
            </select>
            </div>
            <div >
              <div>
                    <label htmlFor="key">Technical Key:</label><br />
                    <input
                      id="key"
                      type="text"
                      name="TechnicalKey"
                      required="required"
                      placeholder="Technical Key"
                      onChange={handleAddFormChange}
                /><br />
             </div>
                  <div>
                      <label htmlFor="cont">Content:</label><br />
                      <input
                        id="cont"
                        type="text"
                        name="English"
                        required="required"
                        placeholder="Content"
                        onChange={handleAddFormChange}
                        
                      />
                          </div>
                    </div>

              </div>
          </div>
      <div className="actions">
        <button ref={refClose} className="button--alt" onClick={props.onClose}>
          Cancel
        </button>
        <button className="button--alt" type="submit">
          Submit
        </button>
      
      </div>
      </form>
    </Modal>
  );
};

export default AddForm;