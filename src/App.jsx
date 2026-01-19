import {useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  async function loadData(){
    const result = await fetch('https://sample--myapp-48d0e.us-east4.hosted.app/')
    const data = await result.json();
    setCount(data)
  }
  useEffect(()=>{
    loadData();
  },[])
  return (
    <>
     <div>
      {count.message}ㅎㅇㅎㅇzzsda
     </div>
    </>
  )
}

export default App
