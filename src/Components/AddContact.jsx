import React, { Component } from 'react'

class AddContact extends Component {
  render() {
    return (
      <div className="add-contact">
        <h1 className="add-contact-title">Add Contact</h1>
        <form className="add-contact-form">
          <div className="input-field">
            <label>Name</label>
            <input type="text" placeholder="Name" />
          </div>

          <div className="input-field">
            <label>Email</label>
            <input type="email" placeholder="Email" />
          </div>

          <div className="add-button">
            <input type="submit" value="Add" />
          </div>
        </form>
      </div>
    )
  }
}

export default AddContact
