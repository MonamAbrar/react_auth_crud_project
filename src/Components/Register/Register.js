import React, { useState } from "react";

import { Form, Button } from 'react-bootstrap'
import'./Register.css';

const Register = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:5678/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name, email, password}),
      });

      if (response.ok) {

      } else {

      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Register</h2>
      <Form>
      <Form.Group controlId="fromBasicName">
          
          <Form.Control type="Name" placeholder="Name" onchange={(e) => setName(e.target.value)} />
        </Form.Group>
        
        <Form.Group controlId="fromBasicEmail">
          
          <Form.Control type="email" placeholder="email" onchange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          
          <Form.Control type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
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