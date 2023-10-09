import React from 'react'
import { useState } from 'react'
import Header from "./Components/Header"
import AddContact from "./Components/AddContact"
import ContactCard from "./Component/ContactCard"
import AddContactList from "./Components/AddContactList"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <AddContact/>
      <ContactCard/>
      <AddContactList/>
    </>
  )
}

export default App
