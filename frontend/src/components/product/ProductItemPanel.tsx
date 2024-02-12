import React from 'react';
import { Product } from '@/types/types';
import ProductItem from './ProductItem';


const ProductItemPanel = ( {product }:  { product : Product}) => {
    return(
        <div className = " flex-shrink-0 bg-slate-800   m-2">
            <ProductItem id={product.id} src={product.src} name={product.name}  />
        </div>
    );
};


export default ProductItemPanel;