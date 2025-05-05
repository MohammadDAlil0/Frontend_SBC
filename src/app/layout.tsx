import { Tajawal } from '../../public/fonts'
import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/sections/Navbar'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'المهندس الذكي للكود السعودي',
  description:
    'شركة كنز الصحراء إحدى الشركات الرائدة في مجال المقاولات منذ أكثر من 40 عاماً، ومع كلّ الظروف والتغييرات والتطورات الحاصلة بالمملكة العربية السعودية وتواكباً مع رؤية 2030 فقد تم توسع الشركة وعمل بعض التطويرات منذ عام 2017 لتصبح باسم شركة كنز الصحراء للمقاولات .',
  icons: {
    icon: '/favicon.png',
    apple: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${Tajawal.variable}`}>
        {/* <main className="bg-gradient-to-br from-[#f5fef9] to-[#e7ffe0] text-gray-800"> */}
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
