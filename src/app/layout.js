import { Playfair_Display, Quicksand } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import Preloader from "@/components/Preloader";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
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

  manifest: "/manifest.webmanifest",
};

export const viewport = {
  themeColor: "#141b26",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${quicksand.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Preloader />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
