import React from 'react';

function Lists({ itemtoadd, onDeleteItem }) {
  return (
    <div>
      <h2>Items in list</h2>
      <ol>
        {itemtoadd.map((list, index) => (
          <li key={list.id}>
            Name: {list.name}
            <button onClick={() => onDeleteItem(list.id)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}


export default Lists;
