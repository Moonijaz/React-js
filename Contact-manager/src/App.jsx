
import React from 'react'
import Header from "./Components/Header";
//import AddContact from './Components/AddContact';
import Contactlist from './Components/Contactlist';


function App() {

  return (
    <>
    <div className='container'> 
      <Header/>
     {/* <AddContact/> */}
      <Contactlist/>
    </div>

    </>
  )
}

export default App
