import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["600", "700"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sea Blue Shipyard Ltd. | Ship Building & Repair, Kochi",
  description:
    "Sea Blue Shipyard Ltd. is an ISO 9001:2015 certified shipyard in Kochi, India, established in 2003, offering ship building, repair, conversion, and general engineering services to the Indian Navy, Indian Coast Guard, and the marine industry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100dvh",
          fontFamily: "var(--font-body), Arial, Helvetica, sans-serif",
        }}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
