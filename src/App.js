import React, { useState } from 'react'
import Button from './components/Button'
import {Data} from './assets/data.js'
const App = () => {
  const [input ,setinput] =useState("")
  const [prev ,setprev] = useState("")
  return (
    <div className = "w-full h-screen bg-[#EAB543] flex justify-center items-center">
     <div className='w-[400px] h-[600px]  relative'>
      <span className='absolute right-2 top-2 text-gray-300 text-lg'> {prev}</span>
    <input className='w-full p-2 h-[150px] text-right bg-[#2C3A47] text-white  outline-none text-2xl placeholder:text-2xl' value={input} type='text' placeholder='cal...' />
      <div className='w-full h-[450px] grid grid-cols-4 '>
        {
          Data.map((item, index) => (
            <Button  value={item} key={index} setinput={setinput} input={input} setprev={setprev}/>
          ))
        }
      </div>
     </div>
    </div>
  )
}

export default App