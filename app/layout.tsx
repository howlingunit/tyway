import type { Metadata } from "next"
import "./globals.css"
import { Comfortaa } from "next/font/google"
import { ThemeProvider } from 'next-themes'

// eslint-disable-next-line
const ComfortaaSans = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Tyway",
  description: "TYWAY is a collection of applications made by Tyler Pitt. On the main site, you can view updates, a list of deployed apps and more about the creator.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  )
}
