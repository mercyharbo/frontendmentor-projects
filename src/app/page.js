import { Inter } from 'next/font/google'
import Navbar from './navbar'
import HeroSection from './hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='lg:p-10 relative'>
      <Navbar />
      <HeroSection />
    </main>
  )
}
