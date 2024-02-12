import Image from 'next/image'
import NavBar from '@/components/NavBar'
import Background from '@/components/general/Background'
export default function Home() {
  return (
    <main className="flex relative min-h-screen flex-col items-center justify-between p-24">
      <Background />
      <NavBar />
    </main>

  )
}
