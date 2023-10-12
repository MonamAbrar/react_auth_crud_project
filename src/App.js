import React, { useState } from 'react';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Navigate from './Components/Navigate/Navigate';

function App() {
  const [showRegister, setShowRegister] = useState(false);

  return(
    <div className="App">
      <h1>Authentication App</h1>
      {showRegister ? (
        <Register onToggle={() => setShowRegister(false)} />
      ) : (
        <Login OnRegisterClick={() => setShowRegister(true)} />
      )}
        <Navigate/>
    </div>
  )
}

export default App;
