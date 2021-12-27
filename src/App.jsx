import React from 'react'
import './Design/App-Design/App.css'
import Header from './Components/Header'
// import ContactList from './Components/ContactList'
// import ContactCard from './Components/ContactCard'
import AddContact from './Components/AddContact'
function App() {
  return (
    <div className="container">
      <Header />
      <AddContact />
    </div>
  )
}

export default App
