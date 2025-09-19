import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Filmy - Your Ultimate Movie Companion",
  description: "Discover, track, and share your favorite movies with Filmy. Your ultimate movie companion.",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Filmy - Your Ultimate Movie Companion",
    description: "Discover, track, and share your favorite movies with Filmy. Your ultimate movie companion.",
    url: "https://filmy123.vercel.app",
    siteName: "Filmy",
    images: [
      {
        url: "https://filmy123.vercel.app/logo.png",
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Filmy - Your Ultimate Movie Companion",
    description: "Discover, track, and share your favorite movies with Filmy. Your ultimate movie companion.",
    images: ["https://filmy123.vercel.app/logo.png"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-tubiPurple">
          <Header />
          {children}
          <Footer />
          <Toaster
            position="top-right"
            richColors
            toastOptions={{
              duration: 5000,
            }}
          />
        </div>
      </body>
    </html>
  );
}
