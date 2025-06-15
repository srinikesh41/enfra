import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Enfra",
  description: "A new way of urban planning",
};

interface RootLayoutProps {
  children: React.ReactNode;
  modal?: React.ReactNode;
}

const RootLayout = ({ children, modal }: RootLayoutProps) => (
  <html lang="en">
    <body className={inter.className}>
      <Toaster />
      {modal}
      {children}
    </body>
  </html>
);

export default RootLayout;
