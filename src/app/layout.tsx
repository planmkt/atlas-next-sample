import React from 'react'


import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/components/Providers'


import '@/styles/globals.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portal Atlas',
  description: 'Template for a Next.js app with TypeScript and Sass',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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
