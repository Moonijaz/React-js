import React from "react";

export default class AddContact extends React.Component{
    render(){
        return (
            <div className="ui-main">
                <h2>Add Contact</h2>
                <form className="ui form">
                    <div className="field">
                        <label>Name</label> <input type="text"  name="Name" placeholder="Name" />
                        <label>Email</label> <input type="text"  name="Email" placeholder="Email" />

                    </div>
                </form>
            </div>
        )
    }
}