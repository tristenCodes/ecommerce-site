import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Background from '@/components/general/Background'
import SplashPanel from '@/components/SplashPanel'
import { useContext } from 'react';

export default function Home() {
  return (
    <main className="flex relative min-h-screen w-full flex-col items-center justify-start ">
      <Background />
      <NavBar />

      <SplashPanel />
    </main>

  )
}
