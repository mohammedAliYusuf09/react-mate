import ClientLogo from "@/components/ClientLogo";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Why from "@/components/Why";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ClientLogo/>
      <Services/>
      <Why/>
      <Testimonial/>
    </>
  );
}
