import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// theme provider
import { ThemeProvider } from "@/components/ThemeProvider";

const outfit = Outfit({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://rizky-noor.vercel.app"),
  title: {
    default: "Rizky Noor Ichwanudin | Full-Stack Developer",
    template: "%s | Rizky Noor Ichwanudin",
  },
  description:
    "Results-driven Full-Stack Developer with expertise in Vue.js, React.js, Next.js, Node.js, and Laravel. Building resilient enterprise systems, mobile apps, and scalable web platforms.",
  keywords: [
    "Rizky Noor Ichwanudin",
    "Full-Stack Developer",
    "Web Developer",
    "Next.js",
    "React.js",
    "Vue.js",
    "Node.js",
    "Laravel",
    "Flutter",
    "TypeScript",
    "Indonesia Software Engineer",
  ],
  authors: [{ name: "Rizky Noor Ichwanudin", url: "https://rizky-noor.vercel.app" }],
  creator: "Rizky Noor Ichwanudin",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rizky-noor.vercel.app",
    title: "Rizky Noor Ichwanudin | Full-Stack Developer",
    description:
      "Results-driven Full-Stack Developer specializing in modern web ecosystems, cloud databases, and mission-critical enterprise systems.",
    siteName: "Rizky Noor Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rizky Noor Ichwanudin | Full-Stack Developer",
    description:
      "Portfolio of Rizky Noor Ichwanudin - Full-Stack Developer specializing in Vue.js, React, Next.js, Node.js, and Laravel.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
