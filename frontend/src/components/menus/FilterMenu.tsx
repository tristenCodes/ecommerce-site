'use client';
import React from 'react';
import {useRouter, usePathname } from 'next/navigation';

const FilterMenu = () => {

    const router = useRouter();
    const currentPath = usePathname();
    //I guarantee there's a better way to wrangle TypeSript here
    const routeTo = (e : React.MouseEvent<HTMLButtonElement>) => {
        const newPath = `${currentPath}/${(e.target  as HTMLButtonElement).name}`;
        router.push(newPath);
    };
    
    return(
        <div>
            Filter Menu :  Filter By :

            <button onClick={routeTo} name="brands">Brands</button>
        
        </div>
    );
};

export default FilterMenu;