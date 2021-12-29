import React from 'react'
import './Design/App-Design/App.css'
import Header from './Components/Header'
// import ContactList from './Components/ContactList'
// import ContactCard from './Components/ContactCard'
import AddContact from './Components/AddContact'
import ContactList from './Components/ContactList'
import ContactCard from './Components/ContactCard'
function App() {
  const contacts = [
    {
      id: 1,
      name: 'KevinNdahayo',
      email: 'Ndahayokevin1@gmail.com',
    },
    {
      id: 2,
      name: 'Mr.beast',
      email: 'mrbeast@gmail.com',
    },
  ]
  return (
    <div className="container">
      <Header />
      <AddContact contacts={contacts} />
      {/* <ContactList /> */}
      {/* <ContactCard /> */}
    </div>
  )
}

export default App
