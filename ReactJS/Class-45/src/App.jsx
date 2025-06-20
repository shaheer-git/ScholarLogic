import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useContext } from 'react'
import { ParentContext } from './context/ParentContext'

function ParentEle({ children }) {
  const [name, setName] = useState('Shaheer')
  return (
    <div>
      <ParentContext.Provider value={{ name }}>
        {children}
      </ParentContext.Provider >
    </div>
  )
}

function Child() {
  const { name } = useContext(ParentContext)
  debugger
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
function ChildA() {
  const { name } = useContext(ParentContext)
  debugger
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
function App() {
  return (
    <>
      <div>
        <ParentEle>
          <Child />
        </ParentEle>
      </div>
    </>
  )
}

export default App
