

import React from 'react'
import './Header.css'
export default function Addlist() {
  return (
    <div className='head'>
            <h3>Add list</h3>
          <input type="text" value={item} onChange={(e) => setName(e.target.value)} placeholder="Add your task/items" /> <br /><br />
          <button className="btn btn-primary" type="submit">Add</button>

    </div>
  )
}
