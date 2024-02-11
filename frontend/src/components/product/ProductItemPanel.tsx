import React from 'react';
import { Product } from '@/types/types';
import ProductItem from './ProductItem';


const ProductItemPanel = ( {product }:  { product : Product}) => {
    return(
        <div className = "bg-slate-800 size-40">
            <ProductItem id={product.id} src={product.src} name={product.name}  />
        </div>
    );
};


export default ProductItemPanel;