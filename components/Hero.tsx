import Image from "next/image"
import heroImage from "@/public/assets/hero-image-final.png"
import { Caladea, Mulish } from "next/font/google";

const caladea = Caladea({
  subsets: ["latin"],
  weight: ["700"], // You can also add "italic", "700italic" if needed
  display: "swap",
});

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Add weights you plan to use
  display: 'swap',
});

function Hero() {
  return (
    <div className="responsive-container md:flex md:flex-row md:gap-2 md:h-[500px] lg:h-[600px] items-center">

      <div className="md:w-[60%] flex flex-col gap-4 md:gap-8">
        <h1 className={`text-[#2F2E41] text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-center md:text-start mt-4 pt-10 md:pt-0 md:mt-0 ${caladea.className} text-bold`}>Grow Your Business with Results-Driven Digital Marketing</h1>
        <h5 className={`${mulish.className} text-lg text-center md:text-start`}>We help startups and small businesses increase traffic, leads, and sales through tailored digital strategies</h5>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <button className={`${mulish.className} bg-[#6C63FF] text-lg md:text-xl text-white
          px-5 py-2 hover:bg-[#695997] transition-colors ease-in-out duration-150`}>Get Free Strategy Cal</button>
          <a className={`${mulish.className} border-b border-[#DDEB9D] hover:border-[#a0ac6a]`} href="#portfolio">Scrolls to portfolio</a>
        </div>
      </div>

      <Image className="md:w-[40%] md:h-[22rem] pt-10 md:pt-0 m-auto"  src={heroImage} alt="Hero Image" />
      
    </div>
  )
}

export default Hero