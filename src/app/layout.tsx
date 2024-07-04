import type { Metadata } from "next";
import {  Manrope } from "next/font/google";
import { PatientDataProvider } from "@/context/PatientDataContext";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tech Care",
  description: "Tech Care Patient Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <PatientDataProvider>
        {children}
        </PatientDataProvider>
        </body>
    </html>
  );
}
