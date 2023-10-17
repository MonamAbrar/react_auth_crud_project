import React, { useState } from "react";

import { Form, Button, Alert } from 'react-bootstrap'
import'./Register.css';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState('');
  const [error] = useState('');

  const handleRegister = async () => {
    const form = document.getElementById('registerForm');
    if (form.checkValidity() === false) {
      setValidated(true);
      return;
    }

    setValidated(false);

    try {

      const response = await fetch('http://localhost:5678/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
      });

      if (response.status === 201) {
        props.onSuccess();
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Register</h2>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form id="registerForm" noValidate validated={validated}>
      <Form.Group controlId="fromBasicName">
          
          <Form.Control 
            type="Name" 
            placeholder="Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />

          <Form.Control.Feedback type="invalid">
            Name field can't be Empty.
          </Form.Control.Feedback>
      
      </Form.Group>
          
        
      <Form.Group controlId="fromBasicEmail">
          
          <Form.Control 
            type="email" 
            placeholder="email" 
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
            placeholder="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            required
          />

          <Form.Control.Feedback type="invalid">
            Password should be 8 characters long and contain atleat 2 uppercase letters .
          </Form.Control.Feedback>
      
      </Form.Group>


        <Button variant="primary" onClick={handleRegister}>
          Register
        </Button>
        <Button variant="secondary" onClick={props.onCancel}>
          Cancel
        </Button>
      </Form>
      
    </div>
  );
};

export default Register;

