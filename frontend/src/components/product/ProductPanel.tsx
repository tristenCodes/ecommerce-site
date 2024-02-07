import React from 'react';
import ProductItem from './ProductItem';

import { product } from '../../types/types'

interface properties {
    propArray : product[],
    
};

const ProductPanel = ({propArray} : properties) => {

return (
    <>
        <h1> gucci flip flop</h1>
        

        <ul className="flex"> 
            {propArray.map(item => ( <ProductItem key ={item.id} id={item.id} src = {item.src } name = {item.name} />))}
        </ul>


    </>
);

};

export default ProductPanel;