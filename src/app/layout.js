import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/providers/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dog Gallery',
  description: 'View your dog gallery!',
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
    other: {
      rel: 'icon',
      url: '/icon.png',
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
