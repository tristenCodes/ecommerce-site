import React from 'react';
import ProductItem from './ProductItem';

import { product } from '../../types/types'
import ProductItemPanel from './ProductItemPanel';

interface properties {
    propArray : product[],
    
};

const ProductPanel = ({propArray} : properties) => {

return (
    <>
        <h1> gucci flip flop</h1>
        

        <ul className="flex"> 
            {propArray && propArray.map(item => ( <ProductItemPanel key ={item.id} product = {item} />))}
        </ul>


    </>
);

};

export default ProductPanel;