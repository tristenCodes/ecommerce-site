'use client';
import Image from 'next/image'
import Button from '@mui/material/Button';
import GetRequestButton from '../../components/GetRequestButton'
import Background from '@/components/general/Background';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
export default function Home() {

  useEffect( () => {
    console.log("use effect called in testroute page");

  },[]);
  return (
    <>
    <Background />
    <Container className="relative" maxWidth="sm">
        
        <GetRequestButton />
    </Container>
    
    </>
      
  )
}
