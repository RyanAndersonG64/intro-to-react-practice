import { Link } from "react-router-dom"

const Title = () => {
  return (
    <h1>
      huehuehue
    </h1>
  )
}

let counter = 0;
function count() {
  counter ++;
}
function App() {
  return (
    <div 
      className="bg-primary h-100 p-5"
      style={{ color: 'white' }}
    >
      <Link className="text-light" to='/about'>About</Link>
      <Title />
      <button
      value = 'Count'
      onClick ={() => count()}
      >
      </button>
      <Link className='text-light' to='/contacts'>Contacts</Link>
    </div>
  )
}


export default App
