import {useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const Text = import.meta.env.VITE_APP_TEST

  return (
    <>
     <div>
      {count}히히 됬지롱크크
      {Text}
     </div>
    </>
  )
}

export default App
