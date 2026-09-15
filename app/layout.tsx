import "./globals.css"

import type { Metadata } from "next"
import { Geologica, Livvic } from "next/font/google"

const livvicSans = Livvic({
  variable: "--font-livvic-sans",
  subsets: ["latin"],
  weight: "600",
})

const geologicaMono = Geologica({
  variable: "--font-geologica-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Note Store",
  description: "E-commerce de Notebooks",
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${livvicSans.variable} ${geologicaMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  )
}
