'use client'

import { Mulish, Inter } from "next/font/google";
import { CiMenuBurger } from "react-icons/ci";
import ContactButton from "./ContactButton";
import {  useState } from "react";
import { easeInOut, motion, useMotionValueEvent, useScroll } from "motion/react"

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

function Navbar() {

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false); 
  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {

    setScrolled(latest > 20 ? true : false);
    

    const pre = scrollY.getPrevious();
    if (pre !== undefined && latest > pre && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.nav 
    variants={{
      visible: { y: 0},
      hidden: {y: "-100%"}
    }}
    transition={{duration: 0.35, ease: easeInOut}}
    animate={hidden ? "hidden" : "visible"}
    className={`${scrolled ? "fixed w-[100%] bg-white transform-[20%] z-50 shadow-xl" : ""} transition-all ease-in-out duration-300`}>
      <div className="h-12 xl:h-16 border-b border-[#DF8FD1] items-center" id="top">
      <div className="responsive-container flex justify-between h-full">
         <p className={`flex items-center ${inter.className}"`}>
          <span className="bg-[var(--color-action)] text-white px-2 rounded-3xl">Reach</span>
          MATE
        </p>

        <div className={`hidden md:flex items-center gap-3 ${mulish.className} text-[var(--color-des)] `}>
          <a className="hover:text-gray-700 transition-colors ease-in duration-100" href="#top" >Hero</a>
          <a className="hover:text-gray-700 transition-colors ease-in duration-100" href="#services" >Services</a>
          <a className="hover:text-gray-700 transition-colors ease-in duration-100" href="#stories" >Stories</a>
          <a className="hover:text-gray-700 transition-colors ease-in duration-100" href="#portfolio" >Portfolio</a>
          <a className="hover:text-gray-700 transition-colors ease-in duration-100" href="#pricing" >Pricing</a>
        </div>

        <div className="hidden h-full md:flex items-center">
           <ContactButton/>
        </div>

        <div className="md:hidden h-full flex items-center">
          <span className="text-[var(--socendary)] text-2xl"><CiMenuBurger /></span>
        </div>
        
      </div>
    </div>
    </motion.nav>
  )
}

export default Navbar