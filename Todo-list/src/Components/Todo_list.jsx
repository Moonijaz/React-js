import React from 'react';
import './List.css'
function Lists({ itemtoadd, onDeleteItem }) {
  return (
    <div>
      <h2>Items in list</h2>
      <ol>
        {itemtoadd.map((list, index) => (
          <li key={list.id}>
            Name: {list.name}
            <button className='delbutton' onClick={() => onDeleteItem(list.id)}>+</button>
          </li>
        ))}
      </ol>
    </div>
  );
}


export default Lists;
