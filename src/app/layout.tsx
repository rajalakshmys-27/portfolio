import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ThemeProvider } from "@/app/context/ThemeContext";
import Footer from "@/app/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Rajalakshmy | Portfolio",
  description: "A showcase of my projects, skills, and experiences.",
  icons: {
    icon: "/assets/favicon.ico"
  },
  alternates: {
    canonical: "https://rajalakshmy-portfolio.vercel.app/"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Rajalakshmy S's Portfolio - Front-End Developer specializing in React.js and MERN stack" />
        <meta name="keywords" content="Rajalakshmy S, Front-End Developer, React.js, MERN stack, Portfolio" />
        <meta name="author" content="Rajalakshmy S" />
        <meta name="google-site-verification" content="v_ivi5lGMI1EyRNYhkxWnhRwR54y3uj8Z11BbCB0hkc" />
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
