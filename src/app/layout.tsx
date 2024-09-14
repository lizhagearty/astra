import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { twMerge } from 'tailwind-merge';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Liz Hagearty",
  description: "Engineer. Content Creator. Artist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, 'max-w-[800px] m-auto bg-slate-50')}>
        {children}
      </body>
    </html>
  );
}

