import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [selectedValue, setSelectedValue] = useState('')

  return (
    <div>
      <form>
        <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} />
        <select onChange={(event)=>{setSelectedValue(event.target.value)}}>
          <option value="Apple">Apple</option>
          <option value="Mango">Mango</option>
          <option value="Banana">Banana</option>
        </select>
        <textarea name="" id=""></textarea>
      </form>
      <button onClick={()=>alert("clicked")}>Click</button>
      <div>
        <p>My name is: {name}</p>
        <p>User has selected this {selectedValue} fruit: </p>
      </div>
    </div>
      
  )
}

export default App
