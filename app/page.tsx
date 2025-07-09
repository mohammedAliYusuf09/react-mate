import ClientLogo from "@/components/ClientLogo";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ClientLogo/>
      <Services/>
    </>
  );
}
