import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import { memo } from 'react'
// import useTheme from '@/context/theme'
import { ThemeProvider } from '@/context/theme'

export default function Home() {
  return (
    <>
    <Navbar />
    <Hero/>
    <Footer/>
    </>
      )
}
