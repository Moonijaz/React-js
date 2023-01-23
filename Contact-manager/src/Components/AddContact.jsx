<<<<<<< HEAD
jsx
import React from "react";

export default class AddContact extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.Name.value.trim();
    const email = event.target.Email.value.trim();

    // Perform input validation here

    // Proceed with adding the contact
  };
jsx
render() {
  return (
    <div className="ui-main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={this.handleSubmit}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="Name" placeholder="Name" required />
          <br></br>
          <label>Email</label>
          <input type="email" name="Email" placeholder="Email" required />
          <button className="ui button blue" type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
    }
=======
import React from "react";

export default class AddContact extends React.Component{
    render(){
        return (
            <div className="ui-main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label> <input type="text"  name="Name" placeholder="Name" /> <br></br>
                        <label>Email</label> <input type="text"  name="Email" placeholder="Email" />
                        <button className="ui button blue">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}
>>>>>>> AddContact
