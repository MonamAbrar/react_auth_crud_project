import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import HomePage from '../HomePage/HomePage';

import './App.css';

  
function App() {

  const token = localStorage.getItem('token');
  const initialComponent = token ? 'homepage' : 'login';

  const [shownComponent, setShownComponent] = useState(initialComponent);

  const showLoginComponent = () => {setShownComponent('login')};
  const showRegisterComponent = () => {setShownComponent('register')};
  const showhomePageComponent = () => {setShownComponent('homepage')}

  
  return (
    <div className="App">
          
          <h1 className="text-center">Authentication App</h1>
          
          { shownComponent === 'homepage' ? <HomePage onLogout={showLoginComponent} /> : ''}
          
          { shownComponent === 'login' ? (
              <Login
                onRegisterClick={showRegisterComponent}
                onSuccess={showhomePageComponent}
              />
            ) : ''}
          
          { shownComponent === 'register' ? (
              <Register
                onCancel={showLoginComponent}
                onSuccess={showLoginComponent}
              /> 
             ): '' }

          
    </div>
  );
}

export default App;



