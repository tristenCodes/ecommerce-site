import React from 'react';
import { Product } from '@/types/types';
import ProductItem from './ProductItem';


const ProductItemPanel = ( {product }:  { product : Product}) => {
    return(
        
       //this component might be redundant, oopsie
        <div className = " relative  h-[37rem]  shadow-md p-1 ">
            <ProductItem id={product.id} src={product.src} name={product.name}  />
        </div>
        
    );
};


export default ProductItemPanel;