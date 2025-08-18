import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divyansh Chandak | B.Tech Student at IIT Guwahati",
  description: "Final-year B.Tech Student at IIT Guwahati | Aspiring Software Engineer | AI Enthusiast. Explore my projects, experience, and journey in technology.",
  keywords: ["IIT Guwahati", "B.Tech", "Software Engineer", "AI", "Machine Learning", "Portfolio"],
  authors: [{ name: "Divyansh Chandak" }],
  openGraph: {
    title: "Divyansh Chandak | B.Tech Student at IIT Guwahati",
    description: "Final-year B.Tech Student at IIT Guwahati | Aspiring Software Engineer | AI Enthusiast",
    type: "website",
    url: "https://yourportfolio.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divyansh Chandak | B.Tech Student at IIT Guwahati",
    description: "Final-year B.Tech Student at IIT Guwahati | Aspiring Software Engineer | AI Enthusiast",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
