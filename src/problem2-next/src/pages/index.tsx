import Image from 'next/image'
import { Inter } from 'next/font/google'
import TokenForm from '../components/TokenForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <TokenForm />
    </div>
  )
}
