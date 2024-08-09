import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const onClick = ()=>{
    
  }

  return (
    <>
      {count}
      <button onClick={onClick}></button>
    </>
  )
}

export default App

