import React from 'react';

import {useEffect } from 'react';

interface Props {
    
    label : string,
    className : string,
    onClick : () => void,
}

const AddToCartButton = ( props : Props ) => {
    
    useEffect( () => { console.log("useeffect triggered in addcartbutton")
}

, []);;
    return (
        <button onClick= {props.onClick} className = {props.className }> 
            {props.label}
        </button>
    );
};

export default AddToCartButton;