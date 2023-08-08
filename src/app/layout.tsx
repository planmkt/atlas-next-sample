import React from 'react'
import { ToastContainer } from 'react-toastify'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from '@/components/Providers'


import '@/styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

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
        <ToastContainer />
      </body>
    </html>
  )
}
