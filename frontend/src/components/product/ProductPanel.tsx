import React from 'react';
import ProductItem from './ProductItem';

import { Product } from '../../types/types'




const ProductPanel = ({propArray} : { propArray: Product[]}) => {

return (
  
        
      

      
        <ul className="relative grid grid-cols-3 grid-rows-3  
                        p-5 m-4 w-4/6  bg-gray-200 m-3 z-0
                        "> 

            {propArray && propArray.map(product => ( <ProductItem id={product.id} src={product.src} name={product.name} />))}
        </ul>
        
    
    
);

};

export default ProductPanel;