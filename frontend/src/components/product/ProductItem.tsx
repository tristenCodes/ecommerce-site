import React from 'react';
import { Product } from '../../types/types'

import Box from '@mui/material/Box';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
const ProductItem = ({id, src, name}: Product) => {

    return (
        
        <div className="relative flex flex-col justify-content
        h-full
        bg-gray-200">
  
      
  <Box className="relative h-1/3 flex  items-top justify-end p-2" sx ={{
      
        fontSize: '0.875rem',
        fontWeight: '700',
        textAlign: 'center' }}
      >
        <FavoriteBorderIcon />
      </Box>
      
      <div className ="relative h-2/3">
      <img
        className=" relative  object-cover   h-[388px] w-full"
        src={src}
        alt={name}
      />
      </div>
        
        <Box className="relative h-1/3 flex flex-col justify-end p-3" sx ={{
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '200',
        textAlign: 'center' }}
      >
        <h3 className="pb-2"> Name </h3>
        <h3 className="pb-2"> $100.00 </h3>
        <h3 className="pb-2"> Shop This </h3>
      </Box>
      



      </div>
    
    );
}

export default ProductItem;