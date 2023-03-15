import { useState } from 'react'

import LifecycleExample from './Components/LifecycleExample'
import GetQuoteComponent from './Components/GetQuoteComponent'
import './App.css'
import useGetQuote from './Hooks/useGetQuote'



function App() {
  const [isToggled, setIsToggled] = useState(true)

  console.log(useGetQuote())

  return (
    <>
    <button onClick={()=>setIsToggled(!isToggled)}>Toggle</button>
      {
        isToggled ?
          <LifecycleExample /> :
          <GetQuoteComponent/>
      }
    </>
  )
}

export default App
