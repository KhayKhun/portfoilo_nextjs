import './globals.css'
import HeaderComponent from '@/components/header'
import FooterComponent from '@/components/footer'
import { Montserrat } from 'next/font/google'
const MontserratFont = Montserrat({ subsets: ['latin'],weight : '400' })
import Script from 'next/script'
export const metadata = {
  title: 'Khay Khun',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-QZKLNHKL35" strategy='afterInteractive' />
      <Script>
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-QZKLNHKL35');
        `}
      </Script>
      <body className={`${MontserratFont.className} min-h-screen bg-gradient-to-bl from-white to-gray-200`}>
        <HeaderComponent/>
        <main className=''>
        {children}
        </main>
        <FooterComponent/>
      </body>
    </html>
  )
}
