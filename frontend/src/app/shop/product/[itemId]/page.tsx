'use client'
import React from 'react';

import Background from '@/components/general/Background';
import NavBar from '@/components/NavBar';
import ProductDetailCard from '@/components/productDetailPage/ProductDetailCard';
import {  Product} from '@/types/types';
import { usePathname } from 'next/navigation'

const Page = () => {
    const pathname = usePathname();
    const parts = pathname.split('/');
  const lastPart = parts[parts.length - 1];
  
  const tid : number = parseInt(lastPart);
  console.log('current item id is ', lastPart);
    //eventualy use useRouter and get id from url and get corresponding product from controller, for now dummy data

    let product : Product = {
        id : tid,
        name : "gucci flipflop",
        price : 200000,
        description : "Are you dumb enough to waste your money on this plastic? We hope you are, buy now!"
    };


    return(
        <div className="relative z-3"> 
        <Background />
        <NavBar />

        <ProductDetailCard  product={product} />

        </div>
    );
}

export default Page;