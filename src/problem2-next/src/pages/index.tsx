import Image from 'next/image'
import { Inter } from 'next/font/google'
import TokenForm from '../components/TokenForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <TokenForm />
    </div>
    )
}
