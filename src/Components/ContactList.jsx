import React from 'react'
import { ReactComponent as Search } from '../Design-images/Contact-List/search.svg'
import { ReactComponent as ContactUser } from '../Design-images/Contact-List/contact-user.svg'
import { ReactComponent as DeleteUser } from '../Design-images/Contact-List/delete.svg'
import { ReactComponent as UpdateUser } from '../Design-images/Contact-List/update.svg'
function ContactList() {
  return (
    <div className="contact-list">
      <div className="contact-list-header">
        <div className="contact-list-header-title">
          <span>Contact List</span>
        </div>
        <div className="contact-list-header-button">
          <span>Add contact</span>
        </div>
      </div>
      <div className="contact-list-search">
        <input type="text" placeholder="Search for contacts" />
        <Search className="search-svg" />
      </div>
      <div className="contact-list-users">
        <div className="user-contact-details">
          <div className="user-contact-img">
            <ContactUser />
          </div>
          <div className="user-contact-info">
            <span className="user-contact-name">Sam smith</span>
            <span className="user-contact-gmail">SamSmith@gmail.com</span>
          </div>
        </div>

        <div className="contact-action">
          <div className="contact-update">
            <UpdateUser className="contact-update-svg" />
          </div>
          <div className="contact-delete">
            <DeleteUser className="contact-delete-svg" />
          </div>
        </div>
      </div>
      <div className="contact-list-users">
        <div className="user-contact-details">
          <div className="user-contact-img">
            <ContactUser />
          </div>
          <div className="user-contact-info">
            <span className="user-contact-name">Sam smith</span>
            <span className="user-contact-gmail">SamSmith@gmail.com</span>
          </div>
        </div>

        <div className="contact-action">
          <div className="contact-update">
            <UpdateUser />
          </div>
          <div className="contact-delete">
            <DeleteUser />
          </div>
        </div>
      </div>
      <div className="contact-list-users">
        <div className="user-contact-details">
          <div className="user-contact-img">
            <ContactUser />
          </div>
          <div className="user-contact-info">
            <span className="user-contact-name">Sam smith</span>
            <span className="user-contact-gmail">SamSmith@gmail.com</span>
          </div>
        </div>

        <div className="contact-action">
          <div className="contact-update">
            <UpdateUser />
          </div>
          <div className="contact-delete">
            <DeleteUser />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactList
