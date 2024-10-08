import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from 'next/font/google'
import { ClerkProvider } from "@clerk/nextjs";
import {NextUIProvider} from "@nextui-org/system";

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
              <NextUIProvider>
                {children}
              </NextUIProvider>
            </body>
        </html>
    </ClerkProvider>
  );
}
