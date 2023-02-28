
import './Contactlist.css';
import './AddContact'

//Sure! Here's an example of how you can write the JSX code to achieve what you described:

import React, { useState } from 'react';

function Contactlist() {
  const [contacts, setContacts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.Name.value;
    const email = e.target.elements.Email.value;

    if (name && email) {
      const newContact = {
        name: name,
        email: email,
      };

      setContacts([...contacts, newContact]);

      // Clear input fields
      e.target.elements.Name.value = '';
      e.target.elements.Email.value = '';
    }
  };

  return (
    <div className="ui-main">
      <h2 className="h1">Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="Name" placeholder="Name" /> <br /><br />
          <label>Email</label>
          <input type="text" name="Email" placeholder="Email" /> <br /><br />
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
      <h2>Contact List</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            Name: {contact.name}, Email: {contact.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contactlist;
//In this code, we use the  `useState`  hook to manage the state of the contact list. When the form is submitted, the  `handleSubmit`  function is called, which retrieves the values of the name and email inputs and adds a new contact to the list. The contact list is then displayed below the form.