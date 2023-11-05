import './App.css'
import Header from './Components/Header';
import Addlist from './Components/Addlist';
import Lists from './Components/Todo_list';
import React, { useState } from 'react'; // Import React and useState

function App() {
  const [itemList, setItemList] = useState([]); // Define a state to hold the item list

  const handleAddlist = (newlist) => {
    const id = Date.now();
    const newItem = {
      id: id,
      name: newlist.name,
    };
    setItemList([...itemList, newItem]);
  };

  const handleDeleteItem = (itemId) => {
    const updatedList = itemList.filter(item => item.id !== itemId);
    setItemList(updatedList);
  };

  return (
    <>
    <div className='main'>
      <Header />
      <Addlist onAddlist={handleAddlist} />
      <Lists itemtoadd={itemList} onDeleteItem={handleDeleteItem} />
      </div>
    </>
  )
}

export default App;
