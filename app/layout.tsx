import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "오늘의 타로",
  description: "오늘의 타로 운세를 알려드립니다.",
  icons: {
    icon: '/favicon.ico',
  },
  keywords: ['타로', '운세', '타로카드', '타로운세', '타로카드운세'],
  openGraph: {
    type: 'website',
    title: '오늘의 타로',
    url: 'https://tarot-fortune.vercel.app/',
    description: '오늘의 타로 운세를 알려드립니다.',
    locale: 'ko_KR',
    images: [{
      url: 'https://raw.githubusercontent.com/lhg1006/portfolio-images/623216ea41f64878a5b3e96730ced5e09345f4f9/images/project/tarot-0.png',
      width: 1200,
      height: 630,
    }]
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'