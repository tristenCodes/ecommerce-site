"use client"
import React from "react";
import Image from 'next/image'


import  Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import background from '../../../public/images/graysquare.png';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import ProductPanel from "../product/ProductPanel";
import { product } from "../../types/types"

const CartPanel = () => {

    const cart = [];
    const [cartChange, setCartChange] = useState([]);
    useEffect(() => {
        console.log("test");
      }, [cartChange]);

    const clicky = () => {
        console.log("hehe clicky got a click clik")
        //need to get array of relevant products from backend, use dummy data for now
        // idea - testing mode, boolean available through useContext that deploys alternate components, wrap every component which conditionally
        //renders based on default for default mode or testing component with test data for test mode


    }

    const testMode : boolean = true;

    const productsTestArray : product[] = [
        {
            id : 3,
            name : "gucci flip flop",
            src : "https://i.imgur.com/aQ71rWv.png"
        },
        {
            id : 4,
            name : "gucci flip flop again",
            src : "https://i.imgur.com/aQ71rWv.png"
        },
        {
            id : 5,
            name : "gucci flip flop once mehr",
            src : "https://i.imgur.com/aQ71rWv.png"
        },
    ]


    return(

        <>
        <Container className=" h-screen p-3 rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500" >
      
        <Typography className="font-bold text-[#e3f2fd]"variant="h4">Cart</Typography>
     
        <Container className="py-5 m-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            <Typography className="font-bold text-[#e3f2fd]"variant="h4">No items currently. Please buy something anything'll help. :(</Typography>
            
            
            <AddToCartButton onClick={clicky} label = "Press teh buton "  className = "p-5 bg-gradient-to-r from-cyan-500 to-blue-500" />
           
           
            

                    <Slider
                    defaultValue={30}
                    sx={{
                        width: 300,
                        color: 'success.main',
                    }}
                        />

            <ProductPanel propArray={testMode ? productsTestArray : []} />

            </Container>
        
        </Container>
    </>
    )
}

export default CartPanel