import React  from 'react';
import Modal from '../UI/Modal';
import  './EditForm.css';

const EditForm = (props) => {






  return (
  
    <Modal onClose={props.onClose}>
    <form  >
    <div>
      <div className="total">
      <span>EDIT KEY</span><br />
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
                     
                      
                    />
                        </div>
                  </div>

            </div>
        </div>
    <div className="actions">
      <button  className="button--alt" onClick={props.onClose}>
        Cancel
      </button>
      <button className="button--alt" type="submit">
        Submit
      </button>
    
    </div>
    </form>
  </Modal>
  )
}

export default EditForm;
