import './AddContact.css';
import React, { useState } from 'react';

function AddContact({ onAddContact }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      const newContact = {
        name: name,
        email: email,
      };

      onAddContact(newContact);

      // Clear input fields
      setName('');
      setEmail('');
    }
  };

  return (
    <div>
      <h2 className="h1">Add Contact</h2>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" /> <br /><br />
          <label>Email</label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" /> <br /><br />
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddContact;

