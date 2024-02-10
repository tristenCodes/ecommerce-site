import React from 'react';
import { product } from '@/types/types';
import ProductItem from './ProductItem';


const ProductItemPanel = ({key : number , product : product}) => {
    return(
        <div className = "bg-slate-800">
            <ProductItem key={key} product={product}  />
        </div>
    );
};


export default ProductItemPanel;