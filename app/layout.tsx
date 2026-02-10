import './globals.css'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'ShoaibK Vlog',
  description: 'Influencer • Content Creator • Brand Promotions',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
      </body>
    </html>
  )
}
