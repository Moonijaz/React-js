import React, { useState } from 'react';
import Header from "./Components/Header";
import AddContact from './Components/AddContact';
import Contactlist from './Components/Contactlist';


function App() {
  const [contacts, setContacts] = useState([]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };


  return (
    <>
    <div className='container'> 
      <Header/>
      <AddContact onAddContact={handleAddContact} />
      <Contactlist contacts={contacts} />
    </div>

    </>
  )
  }

export default App;
