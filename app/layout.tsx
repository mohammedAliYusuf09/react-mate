import type { Metadata } from "next";
import "./globals.css";
import { Caladea, Mulish, Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});


const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["400", "700"], // You can also add "italic", "700italic" if needed
  display: "swap",
});


export const metadata: Metadata = {
  title: "Reach Mate",
  description: "Grow Your Business with Results-Driven Digital Marketing.We help startups and small businesses increase traffic, leads, and sales through tailored digital strategies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${caladea.className} ${mulish.className} ${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
