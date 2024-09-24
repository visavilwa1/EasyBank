import Articles from "./components/Articles"
import Benefits from "./components/Benefits"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navigation from "./components/Navigation"
import {EasyBankProvider} from './contexts/EasyBankProvider'

function App() {


  return (
    <EasyBankProvider>
      <Navigation />
      <Hero />
      <Benefits />
      <Articles />
      <Footer />
      </EasyBankProvider>
  )
}

export default App
