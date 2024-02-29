'use client';
import Image from 'next/image'
import Button from '@mui/material/Button';
import GetRequestButton from '../../components/GetRequestButton'
import Background from '@/components/general/Background';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import ProductPanel from '@/components/product/ProductPanel';
import { Product } from '@/types/types';
import LogoHeader from '@/components/general/LogoHeader';
import FilterMenu from '@/components/menus/FilterMenu';

export default function Home() {

  //idea - have dummy data accessible globally through useContext
  //eventually get data from database, dispatch to backend dynamic routing next.js
  

  
  const dummyData : Product[] = [
    {
      id: 1,
      name : "gucci",
      price : 23.23,
      description : "epic!"
      
    },
    {
      id: 2,
      name : "offbranch guuci",
      price : 3333.23,
      description : "epicdddddd!"
      
    },
    {
      id: 3,
      name : "SHIBUYA OFFICIAL ",
      price : 55.23,
      description : "epic woaoaoao!"
      
    },
    {
      id: 4,
      name : "super duck",
      price : 2223.23,
      description : "epic, gotta buy it wowaaaa!"
      
    },
    
  ];


  useEffect( () => {
    console.log("use effect called in testroute page, establish connection to db here potentially not sure yet");

  },[]);


  return (
    <>
      <Background />

      <div className=" relative w-full h-full flex flex-col justify-center items-center">
        <LogoHeader />
        <GetRequestButton />
        <FilterMenu />
        
        <ProductPanel propArray = {dummyData} />

      </div>
    
    </>
      
  )
}