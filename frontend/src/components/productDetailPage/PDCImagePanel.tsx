import React from 'react';
import { ProductProp, Product } from '@/types/types';
import { useState, useEffect } from 'react';

import CircularProgress from '@mui/material/CircularProgress';
import fetchImage from '@/services/imageService';


const PDCImagePanel = ({product} : ProductProp) => {
    
    const [loading, setLoading] = useState(true);    
    const [url, setUrl] = useState('');
    
    useEffect(() => {
        
        let newUrl = fetchImage(product.id);     
        setUrl(newUrl);
        setLoading(false);
            
      }, []);

   

    return(
        <div>Temp, insert image here
           
            { loading ? (<CircularProgress /> )  : ( <img src={url} alt={product.name} className=" z-3"/>)  }
           
        </div>

    );
};

export default PDCImagePanel;