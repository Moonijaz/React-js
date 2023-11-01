import './App.css'
import Header from './Components/Header';
import Addlist from './Components/Addlist';
import Lists from './Components/Todo_list';
import React, { useState } from 'react'; // Import React and useState

function App() {
  const [itemList, setItemList] = useState([]); // Define a state to hold the item list

  const handleAddlist = (newlist) => {
    // Function to add a new list item
    setItemList([...itemList, newlist]);
  };

  return (
    <>
      <Header />
      <Addlist onAddlist={handleAddlist} /> {/* Pass the onAddlist prop */}
      <Lists itemtoadd={itemList} /> {/* Pass the itemtoadd prop */}
    </>
  )
}

export default App;
