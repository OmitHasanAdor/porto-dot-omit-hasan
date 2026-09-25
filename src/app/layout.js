import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
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
    description: "Frontend-focused MERN Stack Developer",
    url: "https://porto-dot-omit-hasan.vercel.app",
    siteName: "Omit Hasan Ador",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omit Hasan Ador Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omit Hasan Ador",
    description: "Frontend-focused MERN Stack Developer",
    images: ["/og-image.png"],
  },
  metadataBase: new URL("https://porto-dot-omit-hasan.vercel.app"),
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
