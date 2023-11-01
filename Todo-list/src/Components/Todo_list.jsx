import React from 'react';

function Lists({ itemtoadd }) {
  return (
    <div>
      <h2>Items in list</h2>
      <ol>
        {itemtoadd && Array.isArray(itemtoadd) ? (
          itemtoadd.map((list, index) => (
            <li key={index}>
             {list.name}
            </li>
          ))
        ) : (
          <li>No items to display</li>
        )}
      </ol>
    </div>
  );
}

export default Lists;
