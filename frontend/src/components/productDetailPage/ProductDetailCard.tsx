'use client';

import React from 'react';
import PDCImagePanel from './PDCImagePanel';
import PDCDetailPanel from './PDCDetailPanel';

import { ProductProp } from '@/types/types';


const ProductDetailCard = ({product} : ProductProp) => {
    return(
        <div className = "relative flex w-full justify-around mt-6">
            <PDCImagePanel product={product}/>
            <PDCDetailPanel product={product} />            
        </div>
    );
};

export default ProductDetailCard;