
import { React,useState } from 'react';
import  './Header.css';
import Main from './components/Main';
import AddForm from './components/Overlays/AddForm';
import NoteState from './context/NoteState';


function App() {

  const [formIsShown, setFormIsShown] = useState(false);

  const showFormHandler = () => {
    setFormIsShown(true);
  };

  const hideFormHandler = () => {
    setFormIsShown(false);
  };


  return (
    <>
    <NoteState>
    <div className="header">
      <h1>Translation Home Page</h1>
    </div>
    {formIsShown && <AddForm onClose={hideFormHandler}  />}
    
       <Main onShowForm={showFormHandler}  />

     </NoteState>  
     </>
  );
}

export default App;
