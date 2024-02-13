import React from 'react';
import ProductItem from './ProductItem';

import { Product } from '../../types/types'
import ProductItemPanel from './ProductItemPanel';



const ProductPanel = ({propArray} : { propArray: Product[]}) => {

return (
  
        
      

      
        <ul className="relative grid grid-cols-3 grid-rows-3  
                        p-5 m-4 w-4/6  bg-gray-200 m-3 
                        "> 

            {propArray && propArray.map(item => ( <ProductItemPanel  product = {item} />))}
        </ul>
        
    
    
);

};

export default ProductPanel;