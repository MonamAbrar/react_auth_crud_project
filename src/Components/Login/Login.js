import React, { useState} from 'react';

import { Form, Button, Alert } from 'react-bootstrap';

const Login = (props) => {

  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const [error] = useState('');


  const handleLogin = async () => {
   const form = document.getElementById('loginForm');
   if (form.checkValidity() === false) {
    setValidated(true);
    return;
   }

   setValidated(false);

  
    try {
      const response = await fetch('http://localhost:5678/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  email, password }),
      });

      if (response.status === 200) {
        const responseData = await response.json();
        localStorage.setItem('token', responseData.token);
        props.onSuccess();

      }

  } catch (error) {
    console.error('Error:', error);
  }

};

return (
  <div className='container'>
    <h2>Login</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Form id="loginForm" noValidate validated={validated}>
      
      <Form.Group controlId="formBasicEmail">
        
        <Form.Control 
          type="email" 
          placeholder="Enter email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <Form.Control.Feedback type="invalid">
          Please provide a valid email.
        </Form.Control.Feedback>
      
      </Form.Group>
        

      <Form.Group controlId="formBasicPassword">
        
        <Form.Control 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <Form.Control.Feedback type='invalid'>
          Please provide a password.
        </Form.Control.Feedback>
      
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" onClick={ handleLogin }>
        Sign In
      </Button>
      
      <p className="text-center">Not a member?
        <a href="#!" onClick={props.onRegisterClick}>Register</a>
      </p>
      
      
        
    </Form>
  </div>

  );
};


export default Login;