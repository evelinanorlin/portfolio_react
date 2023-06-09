import { useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <Services></Services>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  )
}

export default App
