import React from 'react';
import { Product } from '../../types/types'




const ProductItem = ({id, src, name}: Product) => {

    return (
        
        <li className="border-2 border-rose-500 size-40 relative" key={id}>
  {name} is
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src={src}
    alt={name}
  />
</li>
    
    );
}

export default ProductItem;