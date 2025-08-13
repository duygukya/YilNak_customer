import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import CustomerAuthWrapper from "@/components/customer-auth-wrapper"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "YılNak Lojistik - Müşteri Portalı",
  description: "1973'ten beri güvenilir lojistik ortağınız - Ağır ve proje taşımacılığı",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
      <body className="font-sans bg-gradient-to-br from-gray-50 to-gray-100">
        <CustomerAuthWrapper>{children}</CustomerAuthWrapper>
      </body>
    </html>
  )
}
