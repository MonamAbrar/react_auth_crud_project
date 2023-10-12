import React from "react";
import './Navigate.css';

const Navigate = () => {

  const handleNavigate = async () => {

    const token = localStorage.getItem('token');

    if (token) {
      try {
        const response = await fetch('http://localhost:5678/',
          {headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          }}
        );
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      } catch (error) {
        console.error('Error:', error);
      }
    }
    
    else {
      try {
        const response = await fetch('http://localhost:5678/',
          {headers: {'Content-Type': 'application/json',}}
        );
        const jsonResponse = await response.json();
        console.log(jsonResponse);
      } catch (error) {
        console.error('Error:', error);
      }
    }


    


  };

  return (
    <div>
      {/* <button onClick={handleNavigate}>Home Page</button> */}
      <button onClick={handleNavigate}>Home Page</button>
    </div>
  );

};

export default Navigate;
