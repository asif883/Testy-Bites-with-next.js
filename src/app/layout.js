import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/shared/Navbar";
import Footer from "./Components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Testy-Bites",
  description: "Best restaurant for delicious food",
  icons: "/logo.png" 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
