import React, { useState} from 'react';
import'./Login.css';



const Login = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:5678/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        
        if (responseData.token) {
          localStorage.setItem('token', responseData.token);
        }

      } else {

      }

  } catch (error) {
    console.error('Error:', error);
  }

};

return (
  <div>
    <h2>Login</h2>
    <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
    <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    <button onClick={handleLogin}>Login</button>
    <button onClick={() => console.log('Open Register Component')}>Register</button>
  </div>
  );
};

export default Login;