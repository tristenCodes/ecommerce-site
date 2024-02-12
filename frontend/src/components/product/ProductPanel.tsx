import React from 'react';
import ProductItem from './ProductItem';

import { Product } from '../../types/types'
import ProductItemPanel from './ProductItemPanel';



const ProductPanel = ({propArray} : { propArray: Product[]}) => {

return (
   
        

        <ul className="flex flex-wrap  justify-around p-2 w-50 m-4 bg-slate-900"> 
            {propArray && propArray.map(item => ( <ProductItemPanel  product = {item} />))}
        </ul>


    
);

};

export default ProductPanel;