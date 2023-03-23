import React, { useState } from 'react';
import './Header.css'
export default function Addlist({onAddlist}) {
        const [name, setName] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
      
          if (name) {
            const newlist = {
              name: name,
            };
      
            onAddlist(newlist);
      
            // Clear input fields
            setName('');
          }
        };

  return (
    <div className='head'>
            <h3>Add list</h3>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Add your task/items" /> 
          <button className="btn btn-primary" type="submit">Add</button>

    </div>
  )
}
