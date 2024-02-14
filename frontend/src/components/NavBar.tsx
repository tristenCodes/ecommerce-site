'use client'
import React from "react";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavBarTabs from "./NavBarTabs";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import mallard from '../../public/images/mallard.png';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
    palette: {
      background: {
        paper: '#fff',
      },
      text: {
        primary: '#173A5E',
        secondary: '#46505A',
      },
      action: {
        active: '#001E3C',
      },
      
    },
  });

  interface MyComponentProps {
    // Add any other props your component needs
    className?: string;
  }


const NavBar : React.FC<MyComponentProps>  = () => {

    return (
        <div className= "relative ">
        <ThemeProvider theme={theme}>
            <Box  > 
                <h1 className = " border-solid border-2 border-sky-500"> TESTTESTSTTE </h1>

                <Box sx={ { background : 'background.paper', borderBottom: 1, borderColor: 'divider', display: 'flex' } } >
                    <Typography variant="h3" gutterBottom>
                        Duck River Clothing Depot
                    </Typography>
                    <Image src="/images/mallard.png" alt="Description of the image" width={80} height={80} />
                </Box>
            
                <Box sx={ { background : 'background.paper', border: 1, borderColor: 'divider', display: 'flex' } } >
                    <NavBarTabs  />
                    <Button href ="/cart"variant="outlined">
                    <ShoppingCartIcon />
                  </Button>
                </Box>
            </Box>
        </ThemeProvider>
        </div>

    );
}


export default NavBar;