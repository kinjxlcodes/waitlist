import type { Metadata } from "next";
import { Inter, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { Fonts } from "./fonts";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Waitlist - Something Amazing Is Coming",
  description: "Join our exclusive waitlist and be the first to experience the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <head>
        <Fonts />
      </head>
      <body className={`${inter.variable} ${ibmPlexSans.variable} antialiased text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
