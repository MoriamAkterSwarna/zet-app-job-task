import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZET : Become a Certified Financial Advisor and Earn Big',
  description: 'Become a Certified Financial Advisor and Earn Big',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
      <Navbar></Navbar>
      <main>{children}</main>
      <Footer></Footer>
      </body>
    </html>
  )
}
