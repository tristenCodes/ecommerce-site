import React from 'react';
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const LogoHeader = () => {
    return(
        <Box className ="flex items-center justify-between h-[100px]"sx={ { background : 'background.paper', borderBottom: 1, borderColor: 'divider', display: 'flex' } } >
                    <Typography variant="h3" gutterBottom>
                        Shibuya Style
                    </Typography>
                    <Image src="/images/LogoCropped.png" alt="Description of the image" width={90} height={90} />
                </Box>
    );
}

export default LogoHeader;