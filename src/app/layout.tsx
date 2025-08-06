import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Primr Events - AI-Powered Event Management Platform",
  description: "Revolutionary AI event management platform for professional planners. Automate event scheduling and organize with intelligence.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-[#F1EFEE] text-[#1a1a1a]`}>
        {children}
      </body>
    </html>
  );
}
