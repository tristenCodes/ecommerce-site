import React from 'react';
import ProductItem from './ProductItem';

import { Product } from '../../types/types'
import ProductItemPanel from './ProductItemPanel';



const ProductPanel = ({propArray} : { propArray: Product[]}) => {

return (
    <>
        <h1> gucci flip flop</h1>
        

        <ul className="flex bg-slate-900"> 
            {propArray && propArray.map(item => ( <ProductItemPanel  product = {item} />))}
        </ul>


    </>
);

};

export default ProductPanel;