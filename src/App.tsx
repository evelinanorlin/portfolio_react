import { useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import { ParallaxProvider } from 'react-scroll-parallax'
import Projects from './components/Projects'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ParallaxProvider>
        <NavBar></NavBar>
        <Header></Header>
        <Projects></Projects>
        {/* <Services></Services>
        <Portfolio></Portfolio> */}
        {/* <Contact></Contact> */}
      </ParallaxProvider>
    </>
  )
}

export default App
