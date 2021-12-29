import React from 'react'
import { ReactComponent as Userprofile } from '../Design-images/Contact-card/contact-card.svg'
function ContactCard() {
  return (
    <div className="contact-card">
      <div className="contact-image">
        <Userprofile />
      </div>
      <div className="contact-info">
        <div className="contact-full-names">Sam Ethanar</div>
        <div className="contact-email">Samethanar@gmail.com</div>
      </div>
      <div className="back-to-contact-button">
        <span>Back to Contact List</span>
      </div>
    </div>
  )
}

export default ContactCard
