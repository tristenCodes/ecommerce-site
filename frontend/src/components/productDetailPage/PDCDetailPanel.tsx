import React from 'react';
import BuyButton from './BuyButton';
import { ProductProp } from '@/types/types';

const PDCDetailPanel = ({product} : ProductProp) => {
    
    return(
        <div className="relative">

            <h1> {product.name} </h1>
            <h2> {product.description} </h2>
            <h2> Ratings here </h2>
            <h2> {product.price} </h2>
            <BuyButton />

        </div>
    );
};

export default PDCDetailPanel;