import React, { useState } from 'react';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Navigate from './Components/Navigate/Navigate';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  const toggleView = () => {
    setShowRegister(!showRegister);
    setShowLogin(!showLogin);
  }

  return(
    <div className="App">
      <h1>Authentication App</h1>
      
      {showRegister ? (
        <Register onToggle={() => setShowRegister(false)} />
      ) : ''}

      {showLogin ? (
        <Login OnRegisterClick={() => setShowRegister(true)} />
      ): ''}

      <br/>
      
      <button onClick={toggleView}>
        {showLogin ? 'Create a new user' : 'Login with existing user'}
      </button>
      
      <br/>
      <br/>

        <Navigate/>
    </div>
  )
}

export default App;
