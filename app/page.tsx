import ActionSection from "@/components/ActionSection";
import ClientLogo from "@/components/ClientLogo";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonial from "@/components/Testimonial";
import Why from "@/components/Why";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <ClientLogo/>
      <Services/>
      <Why/>
      <Testimonial/>
      <Portfolio/>
      <Pricing/>
      <ActionSection/>
      <FAQ/>
      <Footer/>
    </>
  );
}
