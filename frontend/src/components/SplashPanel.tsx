'use client';
import React from 'react';
import {useRouter} from 'next/navigation';

const SplashPanel = () => {

    const router = useRouter();

    const handleClick = () => {
        router.push('/shop');
    }

    return (
        <button className = "relative w-full h-3/7" onClick ={handleClick} >
        <div className ="relative w-full h-3/7">
            <img src="/images/HomeSplash.png" alt="Description of the image" className="w-full h-full object-cover" />
            <h2 className="text-8xl bg-gradient-to-r from-teal-500 via-cyan-400 to-sky-900  text-transparent bg-clip-text absolute bottom-[140px] right-[200px]"> EXPLORE </h2>
        </div>
        </button>
    );
}

export default SplashPanel;