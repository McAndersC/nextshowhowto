import { Patrick_Hand } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation/navigation'

const patric = Patrick_Hand({ subsets: ['latin'], weight:['400'] })

export const metadata = {
  title: 'App ',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={patric.className}>
        <Navigation></Navigation>
        {children}
      </body>
    </html>
  )
}
