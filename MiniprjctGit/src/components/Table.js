import React, { useContext} from 'react';  /*shortcut to create a component file -rafce-enter */

import  './Table.css';
import noteContext from '../context/noteContext';
import { nanoid } from "nanoid";
import { BiEdit } from "react-icons/bi";
import { TiDelete } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";


const Table = (props) => {
    
    const context = useContext(noteContext);
    const {notes} = context;

    return( 
        <div className="table">
        <table>
        <thead>
            <tr>
                <th></th>
            <th>Technical-Key</th>
            <th>English-EN</th>
            <th><IoSettingsOutline /></th>
            </tr>
        </thead>
            <tbody>
            {notes.map((note) => (
                
        <tr key={nanoid()}>
            <td><input type="checkbox" /></td>
            <td>{note.TechnicalKey}</td>
            <td>{note.English}</td>
            <td>
                <button
                type="button" className="button" onClick={props.onShowEditForm} >
                <BiEdit />
                </button>
                <button type="button" className="button" onClick= {props.onShowDeleteForm} >
                <TiDelete />
                </button>
            </td>
        </tr>
            )
        )}

    </tbody>

</table>
</div>   
       
    );
}

export default Table;
