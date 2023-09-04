import { useState } from 'react'
import './App.css'

function App() {

 const [count, setCount] = useState(0)

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)} >
      click me
      </button>
      <button onClick={() => setCount((count) => count - 1)} >
        Reduce me
      </button>

      <p>{count}</p>

      
    </>
  )
}

export default App
