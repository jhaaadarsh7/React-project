import './App.css'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import ContactForm from './Components/Navigation/ContactForm/ContactForm'
import Navigation from './Components/Navigation/Navigation'

function App() {
  return (
    <div>
      <Navigation/>
      
      <ContactHeader/>
      <ContactForm/>
      <main/>
    </div>
  )
}

export default App
