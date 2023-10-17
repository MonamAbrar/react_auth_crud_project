import React, { useEffect, useState } from "react";

import './HomePage.css';

const HomePage = (props) => {

  const [responseData, setResponseData] = useState(null);

  useEffect( () => {

    const fetchData = async () => {
      
      const headers = {
        'Content-Type': 'application/json',
      }
      
      const token = localStorage.getItem('token');
      if (token) {headers.Authorization = `Bearer ${token}`;}

      try {
        const response = await fetch('http://localhost:5678/', {headers});
        const jsonResponse = await response.json();
        setResponseData(jsonResponse);
      } catch (error) {
        console.error('Error:', error);
      }

    }

    fetchData();


  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    props.onLogout();
  }


  return (
    <div className='container'>
      <div>
        <p>{responseData?.message}</p>
      </div>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );

};

export default HomePage;
