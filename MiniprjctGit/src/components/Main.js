import { React,useState } from 'react';

import './Main.css';
import Table from './Table.js';
import { MdOutlineAdd } from "react-icons/md";
import { RiDeleteBin6Line} from "react-icons/ri";
import { AiOutlineSearch } from "react-icons/ai";
import EditForm from './Overlays/EditForm';
import DeleteForm from './Overlays/DeleteForm';

const Main = (props) => {

  const [editFormIsShown, setEditFormIsShown] = useState(false);

  const showEditFormHandler = () => {
    setEditFormIsShown(true);
  };

  const hideEditFormHandler = () => {
    setEditFormIsShown(false);
  };

  const [deleteFormIsShown, setDeleteFormIsShown] = useState(false);

  const showDeleteFormHandler = () => {
    setDeleteFormIsShown(true);
  };

  const hideDeleteFormHandler = () => {
    setDeleteFormIsShown(false);
  };


  return (
        <div className="container">
         
        <p>Translation Tool</p>
        <form className="form1">
          <select>
            <option>English</option>
          </select>
          <div>
          <input type="search" placeholder="search by key or value"/>
          <button type="search"><AiOutlineSearch /></button>
          </div>
        </form>
        <div className="button-t">
         <button type="submit" onClick={props.onShowForm} className="button2"><MdOutlineAdd/></button>
         <button type="submit" className="button-t"><RiDeleteBin6Line /></button>
        </div>
        {editFormIsShown && <EditForm onClose={hideEditFormHandler}  />}
         {deleteFormIsShown && <DeleteForm onClose={hideDeleteFormHandler}  />}

          <Table onShowEditForm={showEditFormHandler} onShowDeleteForm={showDeleteFormHandler}  />
       
        </div>
  );


};

export default Main;