import React from 'react';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';


const NavBarTabs = () => {

    const [value, setValue] = React.useState('one');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        console.log('change to ', newValue, ' with event ', event);
        setValue(newValue);
    }

    return (
        <>
        
        
            <Tabs className ="bg-[#082f49] text-white"
                value={value} 
                onChange={handleChange} 
                aria-label="basic tabs example"
            >    
                <Tab value="one" label="New Releases" />
                <Tab value="two" label={<Link href="/testroute">Today's Deal</Link>} />
                <Tab value="three" label="Best Sellers" />
            
            </Tabs>
        

         </>
    )
};

export default NavBarTabs;