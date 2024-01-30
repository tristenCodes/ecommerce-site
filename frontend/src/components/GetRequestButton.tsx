'use client'
import React from 'react';

import Button from '@mui/material/Button';
import { useState } from 'react';
import Box from '@mui/material/Box';

//yea i know define this elsewhere, i will, test purpose unit test
interface Brand {
  id : number;
  name : string;
}
// Define the component using the FC (Functional Component) type
const MyComponent = () => {
  
    const [brands, setBrands] = useState([]);

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

      const submitRequestBrands = async () => {
        // Add your logic here
        console.log('Fire the get request for brands to backend immediately!');
        try {
          // Assuming your backend is running on http://localhost:your_backend_port
          const response = await fetch('http://localhost:5069/Test'); // Configure the address to be where asp.net backend is hosted
          //u gotta start the backend and have it on to successfully get the data
          const result = await response.json();
          console.log('the resultant data is', result)
          const columnData = result.map((rr : Brand)  => rr.name);
          setBrands(columnData);
        } catch (error) {
          console.error('Error fetching data:', error);
        } 
      };



  return (
    <>
    <Button variant="contained" onClick={submitRequest}>Get Request</Button>

    <Button variant="contained" onClick={submitRequestBrands}>Get Brands</Button>
    <Box>
    <div>
      <h2 className="text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-transparent bg-clip-text">Brands</h2>
      <ul className='text-xl bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text'>
        {brands.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>

    </Box>
    </>
  );


};

export default MyComponent;