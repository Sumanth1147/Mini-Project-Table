import {React,useState} from 'react';
import NoteContext from "./noteContext";
import data from '../components/data.json';

const NoteState = (props) => {

  const [notes, setNotes] = useState(data)
    /*adding a row*/
    const addNote=(newContact)=>{

      setNotes(notes.concat(newContact))

    }

     const deleteNote=(newContacts)=>{

      setNotes(newContacts);

    }



  return (
    <NoteContext.Provider value={{notes, addNote, deleteNote}}>
            {props.children}
        </NoteContext.Provider>
  )
}

export default NoteState;
