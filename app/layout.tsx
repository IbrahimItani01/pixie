import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";

const roboto = Roboto ({subsets:['latin'],weight:['400']})
export const metadata: Metadata = {
  title: "Pixie",
  description: "AI Companion developed by Ibrahim Itani",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
          <body
            className={roboto.className}
          >
            {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
