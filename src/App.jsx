import React from 'react'
import './Design/App-Design/App.css'
import Header from './Components/Header'
// import ContactList from './Components/ContactList'
// import ContactCard from './Components/ContactCard'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import ContactCard from './Components/ContactCard'
function App() {
  return (
    <div className="container">
      <Header />
      {/* <AddContact />  */}
      {/* <ContactList /> */}
      <ContactCard />
    </div>
  )
}

export default App
