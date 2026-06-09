import { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "SCE Frontend",
  description: "Frontend for SCE",
}

export default function RootLayout({
  children,
}: Readonly<{ 
    children: React.ReactNode 
  }>) {
  return (<html lang="en" 
                className={`${geistSans.variable} ${geistMono.variable}`}
          >
    <body><MantineProvider>{children}</MantineProvider></body>
  </html>
)}