import Image from 'next/image'
import CartPanel from '../../components/cart-components/CartPanel'

import  Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Slider from '@mui/material/Slider';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{ backgroundImage: 'url("https://static.vecteezy.com/system/resources/previews/003/703/566/non_2x/futuristic-digital-square-space-blank-gray-black-color-background-with-white-grid-space-line-color-surfaces-vector.jpg")' }}>
  <CartPanel />
</main>
  )
}
