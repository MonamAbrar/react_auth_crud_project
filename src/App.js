import React, { useState } from 'react';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Navigate from './Components/Navigate/Navigate';
//import { Button } from 'react-bootstrap'






  
function App() {
  // const [showLogin, setShowLogin] = useState(true);
  const [shownComponent, setShownComponent] = useState('login');

  const showLoginComponent = () => {setShownComponent('login')};
  const showRegisterComponent = () => {setShownComponent('register')};

  
  return (
    <div className="App">
          
          <h1 className="text-center">Authentication App</h1>
          
          {
            shownComponent === 'login' ?
                <Login onRegisterClick={showRegisterComponent} />
              :
                <Register onCancel={showLoginComponent} />
          }

          {/* {showLogin ? (
            <Login onRegisterClick={() => setShowRegister(true)} />
          ): ''} 
          <div className='container'>
            <Button onClick={toggleView}>
              {showLogin ? 'Register' : 'Login with existing user'}
            </Button>
          </div>
                <br/>
                <br/> */}

            <Navigate/>
          
    </div>
  );
}

export default App;
  /*return(
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
}*/


