import './globals.css'
import { Orbitron, Inter } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TESSERA - Maritime Intelligence',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${orbitron.variable} ${inter.className}`}>
      <body className="bg-tessera-bg text-white selection:bg-neon-purple selection:text-black">
        <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center opacity-5 pointer-events-none -z-10"></div>
        {children}
      </body>
    </html>
  )
}