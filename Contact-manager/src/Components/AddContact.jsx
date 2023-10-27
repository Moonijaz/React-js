
import React from "react";
import './AddContact.css'
export default class AddContact extends React.Component{
    render(){
        return (
            <div className="ui-main">
                <h2 className="h1">Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label className="lable">Name</label><input type="text"  name="Name" placeholder="Name" /> <br></br><br></br>
                        <label className="lable">Email</label> <input type="text"  name="Email" placeholder="Email" /> <br></br><br></br>
                        <button class="btn btn-primary" type="submit">Add</button>
                    </div>
                </form>
            </div>
        )
    }
}
