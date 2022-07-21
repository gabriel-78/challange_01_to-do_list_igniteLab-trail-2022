import { useState } from 'react'
import Header from './components/Header'
import Input from './components/Input'
import Main from './components/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header/>
      <Main/>
    </div>
  )
}

export default App
