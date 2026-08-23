import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aspizo IT Solutions | Highway Incident Management, Vision & Traffic Analyzer",
  description:
    "Aspizo IT Solutions — AI for Indian highways. Highway Incident Management (300-camera AID & TMC), Aspizo Vision (road defects → NHAI Excel), Traffic Analyzer (DVR vehicle counts → Aspizo CSV).",
  keywords: [
    "highway incident detection",
    "automatic incident detection AID",
    "TMC control room",
    "RTSP ONVIF camera management",
    "Aspizo Vision",
    "traffic survey software India",
    "Aspizo CSV",
  ],
  openGraph: {
    title: "Aspizo IT Solutions | AI for Indian Highways",
    description:
      "Incident Management, road defect surveys, and traffic counts — built for NHAI, TMC, and highway operators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
