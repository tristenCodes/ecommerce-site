'use client'
import React from 'react';

import Button from '@mui/material/Button';

// Define the component using the FC (Functional Component) type
const MyComponent = () => {
  
    const submitRequest = async () => {
        // Add your logic here
        console.log('Fire the get request to backend immediately!');
        try {
          // Assuming your backend is running on http://localhost:your_backend_port
          const response = await fetch('http://localhost:5069/WeatherForecast'); // Configure the address to be where asp.net backend is hosted
          //u gotta start the backend and have it on to successfully get the data
          const result = await response.json();
          console.log('the resultant data is', result)

        } catch (error) {
          console.error('Error fetching data:', error);
        } 
      };


  return (
    <Button variant="contained" onClick={submitRequest}>Get Weather Data NewNEw</Button>
  );


};

export default MyComponent;