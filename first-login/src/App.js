import { useState } from 'react';
import Login from './components/Login';
import SecretStuff from './components/Secretstuff';
import './App.css';

function App() {
  const [isLoggenIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <header>
      <h1>My First Login</h1>
    </header>
    {isLoggenIn
    ? <SecretStuff />
    : <Login setIsLoggedIn={setIsLoggedIn}/>
    }
    </>
  );
}

export default App;
