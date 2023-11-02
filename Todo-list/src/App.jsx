import './App.css'
import Header from './Components/Header';
import Addlist from './Components/Addlist';
import Lists from './Components/Todo_list';
import React, { useState } from 'react'; // Import React and useState

function App() {
  // for simply adding ata
// const [itemList, setItemList] = useState([]); // Define a state to hold the item list
//
//  const handleAddlist = (newlist) => {
//    // Function to add a new list item
//    setItemList([...itemList, newlist]);
//  };

  const handleAddlist = (newlist) => {
    // Generate a unique ID for the new item
    const id = Date.now();
    const newItem = {
      id: id,
      name: newlist.name,
    };
    setItemList([...itemList, newItem]);

    // Addinf delete function
    const handleDeleteItem = (itemId) => {
      const updatedList = itemList.filter(item => item.id !== itemId);
      setItemList(updatedList);

  return (
    <>
      <Header />
      <Addlist onAddlist={handleAddlist} /> {/* Pass the onAddlist prop */}
     {/* <Lists itemtoadd={itemList} /> {/* Pass the itemtoadd prop */}
      <Lists itemtoadd={itemList} onDeleteItem={handleDeleteItem} />

    </>
  )
}

export default App;
