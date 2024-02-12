import React from 'react';
import { Product } from '../../types/types'




const ProductItem = ({id, src, name}: Product) => {

    return (
        
        <li  className = "border-2 border-rose-500 object-fill  size-40" key ={id}> {name} is  <img className = "object-fill" src={src} alt= {name} /> </li>
    
    );
}

export default ProductItem;