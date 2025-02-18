"use client";
import { usePathname } from "next/navigation";
import NavBar from "./shared/Navbar";
import Footer from "./shared/Footer";


export default function ClientWrapper({ children }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard"); // Check if it's a dashboard page

  return (
    <>
      {!isDashboard && <NavBar />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}
