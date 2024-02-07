import React from 'react';
import { product } from '../../types/types'




const ProductItem = ({id, src, name}: product) => {

    return (
        
        <li key ={id}> {name} is  <img src={src} alt= {name} /> </li>
    
    );
}

export default ProductItem;