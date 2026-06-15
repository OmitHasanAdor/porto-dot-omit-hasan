import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Omit Hasan Ador | MERN Stack Developer",

  description:
    "Frontend-focused MERN Stack Developer from Bangladesh specializing in React, Next.js and modern web applications.",

  keywords: [
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Frontend Developer",
    "Bangladesh Developer",
  ],

  authors: [{ name: "Omit Hasan Ador" }],

  openGraph: {
    title: "Omit Hasan Ador",
    description:
      "Frontend-focused MERN Stack Developer",
    url: "https://your-portfolio.vercel.app",
    siteName: "Omit Hasan Ador",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
