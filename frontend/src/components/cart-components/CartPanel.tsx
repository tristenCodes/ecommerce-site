import React from "react";
import Image from 'next/image'


import  Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import background from '../../../public/images/graysquare.png';
import Slider from '@mui/material/Slider';


const CartPanel = () => {
    return(

        <>
        <Container className=" h-screen p-3 rounded-lg  bg-gradient-to-r from-cyan-500 to-blue-500" >
      
        <Typography className="font-bold text-[#e3f2fd]"variant="h4">Cart</Typography>
     
        <Container className="py-5 m-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
            <Typography className="font-bold text-[#e3f2fd]"variant="h4">No items currently. Please buy something anything'll help. :(</Typography>
            {/* Other components and content */}

                    <Slider
                    defaultValue={30}
                    sx={{
                        width: 300,
                        color: 'success.main',
                    }}
                        />

            </Container>
        
        </Container>
    </>
    )
}

export default CartPanel