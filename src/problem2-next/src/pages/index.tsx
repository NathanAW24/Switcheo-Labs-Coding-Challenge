import Image from 'next/image'
import { Inter } from 'next/font/google'
import TokenForm from '../components/TokenForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <TokenForm />
    </div>
  )
}
