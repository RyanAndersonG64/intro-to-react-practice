import { Link } from "react-router-dom"
import { useState } from "react"

const Title = () => {
  return (
    <h1>
      huehuehue
    </h1>
  )
}




function App() {
  const [counter, increaseCounter] = useState(0);
  return (
    <div 
      className="bg-primary h-100 p-5"
      style={{ color: 'white' }}
    >
      <Link className="text-light" to='/about'>About</Link>
      <Title />
      <Link className='text-light' to='/contacts'>Contacts</Link>
      <button
  className="button"
  value = 'Count'
  onClick ={() => increaseCounter(counter + 1)}
  >
    Click me
  </button>
  <h3>{ counter }</h3>
    </div>
  )
}


export default App