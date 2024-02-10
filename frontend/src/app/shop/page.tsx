'use client';
import Image from 'next/image'
import Button from '@mui/material/Button';
import GetRequestButton from '../../components/GetRequestButton'
import Background from '@/components/general/Background';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import ProductPanel from '@/components/product/ProductPanel';
import { product } from '@/types/types';
export default function Home() {

  //idea - have dummy data accessible globally through useContext
  //eventually get data from database, dispatch to backend dynamic routing next.js
  
  /*
    export interface product {
    id : number,
    name : string
    src : string
}
  */
  
  const dummyData : product[] = [
    {
      id: 1,
      name : "gucci",
      src : "https://i.imgur.com/Nil58vl.jpeg"
    },
    {
      id: 2,
      name : "prada bag",
      src : "https://i.imgur.com/MeZMP3L.jpeg"
    },
    {
      id: 3,
      name : "bungus hat",
      src : "https://i.imgur.com/B3zyYFhb.jpg"
    },
    {
      id: 4,
      name : "raybands shirt",
      src : "https://i.imgur.com/nAodgwUb.jpg"
    },
  ];
  useEffect( () => {
    console.log("use effect called in testroute page");

  },[]);
  return (
    <>
    <Background />
    <Container className="relative" maxWidth="sm">
        
        <GetRequestButton />

        <ProductPanel propArray = {dummyData} />

    </Container>
    
    </>
      
  )
}
