import { useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
    </>
  )
}

export default App
