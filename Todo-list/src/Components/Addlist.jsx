import React, { useState } from 'react';
import './Header.css'
import './List.css'
export default function Addlist({ onAddlist }) {
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
    <div className='body'>
    <div className='head'>
      <form className="ui_form" onSubmit={handleSubmit}>
       {/* <label> Add list</label>*/} 
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Add your task/items" />
        <button className="btn_btn_primary" type="submit">+</button>
      </form>
    </div>
   </div>
  );
}