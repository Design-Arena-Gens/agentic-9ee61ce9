import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Money Making AI Agent',
  description: 'Find legitimate money-making opportunities with AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
