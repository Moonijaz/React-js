import React from 'react';
import './Contactlist'
function Contactlist({ contacts }) {
  return (
    <div>
      <h2>Contact List</h2>
      <ol>
        {contacts.map((contact, index) => (
          <li key={index}>
            Name: {contact.name}, <br /> Email: {contact.email}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Contactlist;