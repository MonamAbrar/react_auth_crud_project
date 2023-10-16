import React, { useState} from 'react';

import { Form, Button } from 'react-bootstrap';



const Login = (props) => {

  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const { handleLogin } = async () => {
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
  <div className='container'>
    <h2>Login</h2>
    <Form>
      <Form.Group controlId="formBasicEmail">
        
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        
        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>

      <Form.Group controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Button variant="primary" onClick={ handleLogin }>
        Sing In
      </Button>
      
      <p className="text-center">Not a member?
        <a href="#!" onClick={props.onRegisterClick}>Register</a>
      </p>
      
      
        
    </Form>
  </div>

  );
};


export default Login;