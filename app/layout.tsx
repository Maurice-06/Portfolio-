import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geistSans = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Maurice Birame DIOUF - Data Analyst & Full-Stack Developer",
  description:
    "Data Analyst & Full-Stack Developer portfolio. Specializing in Python, Django, React, and Data Analysis. Turning data into decisive insights.",
  keywords: ["Data Analyst", "Full-Stack Developer", "Python", "Django", "React", "Data Science"],
  authors: [{ name: "Maurice Birame DIOUF" }],
  openGraph: {
    title: "Maurice Birame DIOUF - Data Analyst & Full-Stack Developer",
    description: "Turning data into decisive insights",
    type: "website",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${_geistSans.className} antialiased bg-background text-foreground`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
