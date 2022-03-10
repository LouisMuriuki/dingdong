import { useState } from 'react';
import Navbar from './components/Navbar/Navbar'
import Card from './components/Card/Card'
import './App.css';

function App() {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState('')
  return (

    <div className="App">
      <div className="container">
        {user ? (
          <>
<Navbar/>
<Card/>
<span className='username'>{user}</span>
          </>
        ):(
        <div className='login'>
          <input type='text' placeholder='Username here' onChange={(e) => { setUsername(e.target.value) }} />
          <button onClick={() => { setUser(username) }}>Login</button>
        </div>
         )}
      </div>
    </div>
  );
}

export default App;
