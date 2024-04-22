import { Link } from 'react-router-dom'

function Contacts() {
    return (
        <div>
            <Link to ='/'>{'<- Back'}</Link><br></br>
            <Link className="text" to='/about'>About</Link>
            <h1>My Contacts</h1>
            <h2>Henry</h2>
            <h2>Brandon</h2>
            <h2>Owen</h2>
            <h2>Jay</h2>
            <h2>Caitlin</h2>
            <h2>Jacinta</h2>
            <h2>Cody</h2>
            <h2>Nathan</h2>
            <h2>Neal</h2>
            <h2>Duke</h2>
            <h2>Eoin</h2>
            <h2>Maddie</h2>
        </div>
    )
}

export default Contacts